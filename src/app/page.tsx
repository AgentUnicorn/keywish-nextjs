"use client"

import { useState } from "react"
import { AddImageModal } from "@/components/add-image-modal"
import MainBody from "@/components/main"
import Header from "@/components/Header"

export default function KeywishUI() {



  return (
    <div className="min-h-screen bg-[url('/assets/header.png')] bg-cover bg-center bg-no-repeat p-4">
      {/* <header className="flex items-center justify-between mb-8">
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
        </header> */}
      <Header />

      <main className="space-y-8">
        <MainBody />
      </main>

      {/* <AddImageModal
            isOpen={activeModal !== null}
            onClose={() => setActiveModal(null)}
            onAdd={(imageData) => {
              if (activeModal) {
                addImage(activeModal, imageData)
              }
            }}
        /> */}
    </div>
  )
}

