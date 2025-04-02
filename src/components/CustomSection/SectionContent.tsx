'use client'

import { ImageCard } from "../image-card"
import type { ImageData } from "@/types"

interface SectionContentProps {
    data?: ImageData[]
}

export default function SectionContent({ data }: SectionContentProps) {
    return (
        <div className="w-full" id="content1">
            <div className="grid grid-cols-3 lg:grid-cols-7 md:grid-cols-5 gap-4 py-4 max-w-fit">
                <div className="col-md-3 mb-3 max-w-fit">
                    {data && data.map((item) => (
                        <ImageCard
                            key={item.id}
                            id={item.id}
                            url={item.url}
                            name={item.name}
                        />
                    ))}
                </div>
            </div>
        </div>

    )
}
