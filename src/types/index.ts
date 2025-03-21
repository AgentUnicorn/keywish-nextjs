import type React from "react"
export interface ImageData {
    id: number
    url: string
    name?: string
    caption?: string
}

export interface SectionProps {
    title: string
    children: React.ReactNode
    onAdd?: () => void
}

export interface ImageCardProps {
    image: ImageData
    onRemove: (id: number) => void
}

