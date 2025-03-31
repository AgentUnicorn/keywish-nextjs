'use client'
import { useEffect, useState } from "react"
import type { ImageData, Section, SectionProps } from "@/types"
import CustomSection from "./CustomSection"
import { createDefaultSections, getSections } from "@/services/storage.service"
import { useTranslations } from "next-intl"



export default function MainBody() {
    const t = useTranslations('Common')
    const [sections, setSections] = useState<Section[]>([])
    const [activeModal, setActiveModal] = useState<"section1" | "section2" | null>(null)

    useEffect(() => {
        const fetchSections = async () => {
            const result = await getSections();
            if (result) {
                console.log("hihi")
                console.log(result)
                setSections(result)
            } else {
                const data = await createDefaultSections()
                setSections(data)
            }
        }
        fetchSections()
    }, [])


    // const removeImage = (section: keyof typeof sections, id: number) => {
    //     setSections((prev) => ({
    //       ...prev,
    //       [section]: prev[section].filter((img) => img.id !== id),
    //     }))
    //   }

    //   const addImage = (section: keyof typeof sections, imageData: { name: string; url: string }) => {
    //     setSections((prev) => ({
    //       ...prev,
    //       [section]: [
    //         ...prev[section],
    //         {
    //           id: Math.max(0, ...prev[section].map((img) => img.id)) + 1,
    //           url: imageData.url,
    //           name: imageData.name,
    //         },
    //       ],
    //     }))
    //   }





    return (
        <div className="container mx-auto flex flex-col items-center">
            <div className="w-full px-20">
                {sections.map((section) => (
                    <CustomSection
                        key={section.id}
                        id={section.id}
                        title={section.title}
                        type={section.type}
                        data={section.data}
                    />
                ))}
            </div>

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
