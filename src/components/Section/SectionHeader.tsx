'use client'
import { Button } from '@/components/ui/button'

export default function SectionHeader({ title }: { title: string }) {
    return (
        <div className="flex w-full relative items-center">
            <h3 className="flex cursor-pointer items-center justify-start me-6 min-w-[300px] truncate text-2xl min-h-[42px] border-b-2 border-fuchsia-300"
                ng-click="editTitle(section)"
                ng-hide="section.editing"
            >
                {title}
            </h3>
            <Button variant="default" className="flex items-center text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl 
                            focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 
                            font-medium rounded-lg text-sm px-4 py-2.5 text-center me-2 absolute right-0 bottom-0"
            >
                Add
            </Button>
        </div>

    )
}