import type React from "react"
export interface ImageData {
    id: number
    url: string
    name?: string
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

export interface Section {
    id: number
    title: string
    type: "array" | "text",
    data: ImageData[] | []
}