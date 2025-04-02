import { Button } from '@/components/ui/button'
import React, { useEffect, useRef, useState } from 'react'
import { UpdateSectionProps } from '@/types'
import { Input } from '../ui/input'
import { Check, X } from 'lucide-react'

interface SectionHeaderProps {
    id: number,
    title: string,
    isEditing: boolean
    onEdit: () => void
    onCancel: () => void
    onUpdate: UpdateSectionProps
}

export default function SectionHeader({ id, title, isEditing, onEdit, onUpdate, onCancel }: SectionHeaderProps) {
    const [sectionTitle, setSectionTitle] = useState<string>(title)
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (isEditing && inputRef.current) {
            inputRef.current.focus()
        }
    }, [isEditing])

    useEffect(() => {
        setSectionTitle(title)
    }, [title])

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            onUpdate({ id, value: sectionTitle })
        } else if (e.key === "Escape") {
            onCancel()
        }
    }

    if (isEditing) {
        return (
            <div className="flex w-full relative items-center gap-2">
                <Input
                    ref={inputRef}
                    value={sectionTitle}
                    onChange={(e) => setSectionTitle(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="max-w-[20%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                            focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 
                            dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                            dark:focus:border-blue-500"
                />
                <div className="flex gap-1">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="h-[40px] text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 
                            hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 
                            dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg 
                            text-sm px-5 py-2.5 text-center ms-2"
                        onClick={() => onUpdate({ id, value: sectionTitle })}
                    >
                        <Check className="h-4 w-4" />
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="h-[40px] text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 
                            hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 
                            dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg
                            dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center ms-2"
                        onClick={onCancel}
                    >
                        <X className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        )
    }

    return (
        <div className="flex w-full relative items-center">
            <h3
                className="flex cursor-pointer items-center justify-start me-6 min-w-[300px] truncate text-2xl min-h-[42px] border-b-2 border-fuchsia-300"
                onClick={onEdit}
            >
                {sectionTitle}
            </h3>
            <Button
                variant="default"
                className="flex items-center text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-4 py-2.5 text-center me-2 absolute right-0 bottom-0"
            >
                Add
            </Button>
        </div>

    )
}
