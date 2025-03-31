'use client'

import MainBody from "@/components/main"
import Header from "@/components/Header"

export default function Home() {

  return (
    <>
      <div className="h-[100vh] overflow-auto tracking-normal text-indigo-400 bg-cover bg-fixed bg-mainmin-h-screen bg-[url('/assets/header.png')]">
        <Header />

        <main className="space-y-8">
          <MainBody />
        </main>

      </div>
    </>
  )
}
