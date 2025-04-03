import { useState, useRef, type ChangeEvent } from "react"
import ReactCrop, { type Crop } from "react-image-crop"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { ImageIcon } from "lucide-react"
import "react-image-crop/dist/ReactCrop.css"

interface AddImageModalProps {
    isOpen: boolean
    onClose: () => void
    onAdd: (imageData: { name: string; url: string }) => void
}

export function AddImageModal({ isOpen, onClose, onAdd }: AddImageModalProps) {
    const [name, setName] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [selectedFile, setSelectedFile] = useState<File | null>(null)
    const [previewUrl, setPreviewUrl] = useState("")
    const [crop, setCrop] = useState<Crop>({
        unit: "px",
        x: 0,
        y: 0,
        width: 250,
        height: 250,
    })

    const imageRef = useRef<HTMLImageElement>(null)

    const handleUrlChange = (e: ChangeEvent<HTMLInputElement>) => {
        setImageUrl(e.target.value)
        setPreviewUrl(e.target.value)
    }

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            setSelectedFile(file)
            const reader = new FileReader()
            reader.onloadend = () => {
                setPreviewUrl(reader.result as string)
            }
            reader.readAsDataURL(file)
        }
    }

    const handleCreate = () => {
        if (previewUrl && name) {
            onAdd({ name, url: previewUrl })
            handleClose()
        }
    }

    const handleClose = () => {
        setName("")
        setImageUrl("")
        setSelectedFile(null)
        setPreviewUrl("")
        setCrop({
            unit: "%",
            x: 0,
            y: 0,
            width: 100,
            height: 100,
        })
        onClose()
    }

    return (
        <Dialog open={isOpen} onOpenChange={handleClose}>
            <DialogContent className="sm:max-w-[800px]">
                <DialogHeader>
                    <DialogTitle className="text-xl font-semibold">Create your keycap</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" value={name} onChange={(e) => setName(e.target.value)}
                            placeholder="Enter image name" />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="imageUrl">Image Link</Label>
                        <Input id="imageUrl" value={imageUrl} onChange={handleUrlChange} placeholder="Enter image URL" />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="uploadImage">Upload Image</Label>
                        <div className="flex gap-2 items-center">
                            <Input id="uploadImage" type="file" onChange={handleFileChange} accept="image/*"
                                className="flex-1" />
                            <Button variant="outline" size="icon" className="shrink-0">
                                <ImageIcon className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>

                    {previewUrl && (
                        <div className="mt-4 relative">
                            <Label>Preview & Crop</Label>
                            <div className="mt-2 max-h-[400px] overflow-auto border rounded-lg">
                                <ReactCrop crop={crop} onChange={(c) => setCrop(c)} aspect={1} minHeight={250}
                                    minWidth={250} maxHeight={250} maxWidth={250}>
                                    <img
                                        ref={imageRef}
                                        src={previewUrl || "/placeholder.svg"}
                                        alt="Preview"
                                        className="w-auto h-[200px]"
                                    />
                                </ReactCrop>
                            </div>
                        </div>
                    )}
                </div>
                <div className="flex justify-end gap-2">
                    <Button variant="outline" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button onClick={handleCreate} disabled={!name || !previewUrl}
                        className="bg-blue-500 hover:bg-blue-600">
                        Create
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}

