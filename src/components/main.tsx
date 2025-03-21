'use client'
import { useEffect, useState } from "react"
import type { ImageData, Section, SectionProps } from "@/types"
import CustomSection from "./CustomSection"
import { createDefaultSections, getSections } from "@/services/storage.service"



export default function MainBody() {
    const [sectionsData, setSectionsData] = useState<Section[]>([])

    useEffect(() => {
        const fetchSections = async () => {
            const result = await getSections();
            if (result) {
                setSectionsData(result)
            } else {
                const data = await createDefaultSections()
                setSectionsData(data)
            }
        }
        fetchSections()
    }, [])

    const [activeModal, setActiveModal] = useState<"section1" | "section2" | null>(null)
    const [sections, setSections] = useState<SectionProps[]>([
        {
            id: 1,
            title: "Section 1",
            type: "array",
            data: [{
                id: 1,
                url: "https://images.unsplash.com/photo-1498462440456-0dba182e775b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                name: "Beach Scene",
            },
            ]
        },
        {
            id: 2,
            title: "Section 2",
            type: "array",
            data: [{
                id: 1,
                url: "https://images.unsplash.com/photo-1498462440456-0dba182e775b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                name: "Spider-Man",
            }
            ]
        },
    ])


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