import Image from "next/image"
import {X} from "lucide-react"
import {Button} from "@/components/ui/button"
import {Card} from "@/components/ui/card"
import type {ImageCardProps} from "@/types"

export function ImageCard({image, onRemove}: ImageCardProps) {
    return (
        <div className="relative">
            <Card className="overflow-hidden w-48">
                <div className="relative h-48">
                    <Image src={image.url || "/placeholder.svg"} alt={image.name || "Image"} fill
                           className="object-cover"/>
                    <Button
                        variant="secondary"
                        size="icon"
                        className="absolute top-2 right-2 w-6 h-6 rounded-full bg-white/80 hover:bg-white"
                        onClick={() => onRemove(image.id)}
                    >
                        <X className="w-4 h-4"/>
                    </Button>
                </div>
                {image.caption && <div className="p-2 text-sm text-gray-700">{image.caption}</div>}
                {image.name && <div className="p-2 text-sm font-medium text-gray-700">{image.name}</div>}
            </Card>
        </div>
    )
}

