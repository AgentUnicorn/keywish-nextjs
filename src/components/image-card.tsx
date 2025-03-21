import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import type { ImageCardProps, ImageData } from "@/types"
import Image from "next/image"

export function ImageCard({ id, url, name, caption }: ImageData) {
    return (
        <div className="h-full flex flex-col max-w-fit">
            <div className="relative max-w-fit">
                <Card className="overflow-hidden w-48">
                    <div className="relative h-48">
                        <Image src={url || "/placeholder.svg"} alt={name || "Image"} fill
                            className="object-cover" />
                        <Button
                            variant="secondary"
                            size="icon"
                        >
                            <X className="w-4 h-4" />
                        </Button>
                    </div>
                    {name && <div className="p-2 text-sm font-medium text-gray-700">{name}</div>}
                </Card>
            </div>
        </div>
    )
}

