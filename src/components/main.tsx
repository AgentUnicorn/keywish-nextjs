'use client'
import { useEffect, useState } from "react"
import type { ImageData, Section } from "@/types"
import CustomSection from "./CustomSection"
import { createDefaultSections, getSections, saveSections } from "@/services/storage.service"
import { useTranslations } from "next-intl"
import { AddImageModal } from "./AddImageModal"

export default function MainBody() {
    const t = useTranslations('Common')
    const [sections, setSections] = useState<Section[]>([])
    const [editingSectionId, setEditingSectionId] = useState<number | null>(null)
    const [activeModal, setActiveModal] = useState<number | null>(null)

    useEffect(() => {
        const fetchSections = async () => {
            const result = await getSections();
            if (result) {
                setSections(result)
            } else {
                const data = await createDefaultSections()
                console.log("data: ", data)
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

    // const removeImage = (section: keyof typeof sections, id: number) => {
    //     setSections((prev) => ({
    //       ...prev,
    //       [section]: prev[section].filter((img) => img.id !== id),
    //     }))
    //   }

    const addImage = (sectionId: number, imageData: { name: string; url: string }) => {
        console.log(sectionId, imageData)
        // setSections((prev) => ({
        //   ...prev,
        //   [section]: [
        //     ...prev[section],
        //     {
        //       id: Math.max(0, ...prev[section].map((img) => img.id)) + 1,
        //       url: imageData.url,
        //       name: imageData.name,
        //     },
        //   ],
        // }))
    }

    return (
        <div className="container mx-auto flex flex-col items-center">
            <div className="w-full px-20">
                {sections.map((section) => (
                    <CustomSection
                        key={section.id}
                        section={section}
                        isEditing={editingSectionId === section.id}
                        onTitleSave={({ id, value }) => handleUpdateSection({ id, value })}
                        onEditStart={() => setEditingSectionId(section.id)}
                        onEditCancel={() => setEditingSectionId(null)}
                    />
                ))}
            </div>

            <AddImageModal
                isOpen={activeModal !== null}
                onClose={() => setActiveModal(null)}
                onAdd={(imageData) => {
                    if (activeModal) addImage(activeModal, imageData)
                }}
            />


            {/* <Section title="Section 2" onAdd={() => setActiveModal("section2")}>
                {sections.section2.map((image) => (
                    <ImageCard key={image.id} image={image} onRemove={(id) => removeImage("section2", id)} />
                ))}
            </Section>

            <Section title="Section 3">
                <Card className="w-full p-3 flex items-center gap-2">
                    <Input placeholder="Type your message..." className="flex-1" defaultValue="adsdad" />
                    <Button variant="ghost" size="icon">
                        <Mic className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                        <ImageIcon className="w-4 h-4" />
                    </Button>
                </Card>
            </Section> */}
        </div>
    )
}
