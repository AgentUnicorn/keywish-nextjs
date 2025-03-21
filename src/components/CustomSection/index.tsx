import type { SectionProps } from "@/types"
import SectionHeader from "./SectionHeader"
import SectionContent from "./SectionContent"

export default function CustomSection({ title, data, onAdd }: SectionProps) {
    return (
        <div className="section flex flex-col items-center w-full mb-5">
            <SectionHeader title={title} />
            <SectionContent data={data} />
        </div>
    )
}

