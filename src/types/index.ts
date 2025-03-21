import type React from "react"
export interface ImageData {
    id: number
    url: string
    name?: string
    caption?: string
}

export interface SectionProps {
    id: number,
    title: string
    type: "array" | "text",
    data: ImageData[]
    onAdd?: () => void
}

export interface ImageCardProps {
    image: ImageData
    onRemove: (id: number) => void
}

