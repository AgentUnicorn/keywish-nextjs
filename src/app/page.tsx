"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mic, ImageIcon } from "lucide-react"
import { Section } from "@/components/section"
import { ImageCard } from "@/components/image-card"
import { AddImageModal } from "@/components/add-image-modal"
import type { ImageData } from "@/types"

export default function KeywishUI() {
  const [sections, setSections] = useState<{
    section1: ImageData[]
    section2: ImageData[]
  }>({
    section1: [
      {
        id: 1,
        url: "https://images.unsplash.com/photo-1498462440456-0dba182e775b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Beach Scene",
      },
    ],
    section2: [
      {
        id: 1,
        url: "https://images.unsplash.com/photo-1498462440456-0dba182e775b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Spider-Man",
        caption: "adsasdasdasdd",
      },
    ],
  })

  const [activeModal, setActiveModal] = useState<"section1" | "section2" | null>(null)

  const removeImage = (section: keyof typeof sections, id: number) => {
    setSections((prev) => ({
      ...prev,
      [section]: prev[section].filter((img) => img.id !== id),
    }))
  }

  const addImage = (section: keyof typeof sections, imageData: { name: string; url: string }) => {
    setSections((prev) => ({
      ...prev,
      [section]: [
        ...prev[section],
        {
          id: Math.max(0, ...prev[section].map((img) => img.id)) + 1,
          url: imageData.url,
          name: imageData.name,
        },
      ],
    }))
  }

  return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900 p-4">
        <header className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Keywish
          </h1>
          <div className="flex items-center gap-4">
            <Button variant="secondary" className="bg-emerald-200 text-emerald-900 hover:bg-emerald-300">
              Preview
            </Button>
            <div className="text-right text-sm text-gray-300">
              <div>Version 0.0.31</div>
              <div>Release Date: 6/8/2024</div>
            </div>
          </div>
        </header>

        <main className="space-y-8">
          <Section title="Section 1" onAdd={() => setActiveModal("section1")}>
            {sections.section1.map((image) => (
                <ImageCard key={image.id} image={image} onRemove={(id) => removeImage("section1", id)} />
            ))}
          </Section>

          <Section title="Section 2" onAdd={() => setActiveModal("section2")}>
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
          </Section>
        </main>

        <AddImageModal
            isOpen={activeModal !== null}
            onClose={() => setActiveModal(null)}
            onAdd={(imageData) => {
              if (activeModal) {
                addImage(activeModal, imageData)
              }
            }}
        />
      </div>
  )
}

