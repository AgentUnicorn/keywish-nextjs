import { Button } from "@/components/ui/button"
import type { SectionProps } from "@/types"

export function Section({ title, children, onAdd }: SectionProps) {
    return (
        <section className="space-y-4">
            <div className="flex items-center justify-between">
                <h2 className="text-xl text-purple-300 border-b border-purple-700 pb-1">{title}</h2>
                <Button variant="default" className="bg-blue-500 hover:bg-blue-600" onClick={onAdd}>
                    Add
                </Button>
            </div>
            <div className="flex flex-wrap gap-4">{children}</div>
        </section>
    )
}

