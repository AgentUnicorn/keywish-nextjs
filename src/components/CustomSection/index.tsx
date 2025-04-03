import SectionHeader from "./SectionHeader"
import SectionContent from "./SectionContent"
import { Section, UpdateSectionProps } from "@/types";
import SectionTextArea from "./SectionTextArea";
import { Button } from "../ui/button";

export interface SectionProps {
    section: Section;
    isEditing: boolean;
    onEditStart: () => void;
    onTitleSave: UpdateSectionProps;
    onEditCancel: () => void;
    onAdd: () => void;
    onRemove: (id: string) => void;
    onUpdateTextArea: (value: string) => void;
}

export default function CustomSection({
    section,
    isEditing,
    onEditStart,
    onTitleSave,
    onEditCancel,
    onAdd,
    onRemove,
    onUpdateTextArea
}: SectionProps) {
    return (
        <div className="section flex flex-col items-center w-full mb-7">
            <div className="flex w-full relative items-center">
                <SectionHeader
                    id={section.id}
                    title={section.title}
                    isEditing={isEditing}
                    onEdit={onEditStart}
                    onCancel={onEditCancel}
                    onUpdate={onTitleSave}
                />

                {section.type === 'array' && (
                    <Button
                        onClick={onAdd}
                        variant="default"
                        className="flex items-center text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-4 py-2.5 text-center me-2 absolute right-0 bottom-0"
                    >
                        Add
                    </Button>
                )}
            </div >
            {section.type === 'array' ? (
                <SectionContent data={section?.data || []} onRemove={onRemove} />
            ) : (
                <SectionTextArea onUpdate={onUpdateTextArea} />
            )}
        </div>
    )
}

