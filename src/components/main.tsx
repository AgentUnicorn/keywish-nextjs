'use client'
import { useEffect, useState } from "react"
import type { ImageData, Section } from "@/types"
import CustomSection from "./CustomSection"
import { createDefaultSections, getSections, saveSections } from "@/services/storage.service"
import { useTranslations } from "next-intl"
import { AddImageModal } from "./AddImageModal"
import { createKeycap, removeKeycap, updateTextInput } from "@/services/wishlist.service"
import SectionContent from "./CustomSection/SectionContent"

export default function MainBody() {
    const t = useTranslations('Common')
    const [sections, setSections] = useState<Section[]>([])
    const [editingSectionId, setEditingSectionId] = useState<number | null>(null)
    const [activeModal, setActiveModal] = useState<number | null>(null)

    useEffect(() => {
        const fetchSections = async () => {
            const result = await getSections();
            if (result.length > 0) {
                setSections(result)
            } else {
                const data = await createDefaultSections()
                setSections(data)
            }
        }
        fetchSections()
    }, [])

    const handleUpdateSection = ({ id, value }: { id: number, value: string }) => {
        setSections((prev) => {
            const updatedSections = prev.map(section =>
                section.id === id
                    ? { ...section, title: value }
                    : section

            );
            saveSections(updatedSections)
            return updatedSections
        })
        setEditingSectionId(null)
    }

    const removeImage = (sectionId: number, keycapId: string) => {
        setSections(removeKeycap({ sections, sectionId, keycapId }))
    }

    const addImage = (sectionId: number, imageData: { name: string; url: string }) => {
        setSections(createKeycap({ sections, sectionId, imageData }))
    }

    const updateTextArea = (sectionId: number, value: string) => {
        setSections(updateTextInput({ sections, sectionId, value }))
    }

    return (
        <div className="container mx-auto flex flex-col items-center">
            <div className="w-full px-20">
                {sections.map((section) => (
                    <>
                        <CustomSection
                            key={section.id}
                            section={section}
                            isEditing={editingSectionId === section.id}
                            onTitleSave={({ id, value }) => handleUpdateSection({ id, value })}
                            onEditStart={() => setEditingSectionId(section.id)}
                            onEditCancel={() => setEditingSectionId(null)}
                            onAdd={() => setActiveModal(section.id)}
                            onRemove={(id) => removeImage(section.id, id)}
                            onUpdateTextArea={(value) => updateTextArea(section.id, value)}
                        />
                    </>
                ))}
            </div>

            <AddImageModal
                isOpen={activeModal !== null}
                onClose={() => setActiveModal(null)}
                onAdd={(imageData) => {
                    if (activeModal) addImage(activeModal, imageData)
                }}
            />
        </div>
    )
}
