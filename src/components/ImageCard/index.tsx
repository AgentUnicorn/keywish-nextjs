import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import type { ImageData } from "@/types"
import Image from "next/image"

interface ImageCardProps extends ImageData {
    onRemove: (id: string) => void
}

export default function ImageCard({ id, img_url, name, onRemove }: ImageCardProps) {
    return (
        <div className="relative max-w-fit">
            <Card className="overflow-hidden w-48">
                <div className="relative h-48">
                    <Image src={img_url || "/placeholder.svg"} alt={name || "Image"} fill
                        className="object-cover" />
                    <Button
                        variant="secondary"
                        size="icon"
                        className="absolute top-2 right-2 w-6 h-6 rounded-full bg-white/80 hover:bg-white"
                        onClick={() => onRemove(id)}
                    >
                        <X className="w-4 h-4" />
                    </Button>
                </div>
                {name && <div className="p-2 text-sm font-medium text-gray-700">{name}</div>}
            </Card>
        </div>
    )
}

