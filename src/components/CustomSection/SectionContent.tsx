import type { ImageData } from "@/types"
import ImageCard from "@/components/ImageCard"

interface SectionContentProps {
    data?: ImageData[]
    onRemove: (id: string) => void
}

export default function SectionContent({ data, onRemove }: SectionContentProps) {
    return (
        <div className="w-full">
            <div className="grid grid-cols-3 lg:grid-cols-7 md:grid-cols-5 gap-4 py-4 max-w-fit">
                <div className="col-md-3 mb-3 max-w-fit">
                    {data && data.map((item) => (
                        <ImageCard
                            key={item.id}
                            id={item.id}
                            img_url={item.img_url}
                            name={item.name}
                            onRemove={onRemove}
                        />
                    ))}
                </div>
            </div>
        </div>

    )
}
