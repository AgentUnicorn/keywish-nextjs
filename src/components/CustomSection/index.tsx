import SectionHeader from "./SectionHeader"
import SectionContent from "./SectionContent"
import { Section, UpdateSectionProps } from "@/types";

export interface SectionProps {
    section: Section;
    isEditing: boolean;
    onEditStart: () => void;
    onTitleSave: UpdateSectionProps;
    onEditCancel: () => void;
}

export default function CustomSection({
    section,
    isEditing,
    onEditStart,
    onTitleSave,
    onEditCancel
}: SectionProps) {
    return (
        <div className="section flex flex-col items-center w-full mb-5">
            <SectionHeader
                id={section.id}
                title={section.title}
                isEditing={isEditing}
                onEdit={onEditStart}
                onCancel={onEditCancel}
                onUpdate={onTitleSave}
            />

            {section.type === 'array' ? (
                <SectionContent data={section?.data || []} />
            ) : (
                <>
                    <div className="w-[35%]">
                        <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Your note</label>
                        <textarea
                            id="floatingTextarea"
                            rows={4}
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 
                                focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                                content: ''
                                dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Write your note here..."
                        >
                        </textarea>
                    </div>
                </>
            )
            }
        </div >
    )
}

