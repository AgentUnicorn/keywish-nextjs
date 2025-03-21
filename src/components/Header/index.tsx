'use client'

import { timestamptToDateString } from "@/utils/helpers";

export default function Header() {

    const version = process.env.NEXT_PUBLIC_VERSION
    const releaseDate = timestamptToDateString(1722883059)

    return (
        <div className="w-full py-7 flex justify-between top-0 z-50">
            <div className="w-full flex items-center justify-between px-10">
                <a className="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
                    Key<span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">wish</span>
                </a>
            </div>
            <div className="global-notification text-ellipsis min-w-fit truncate text-right text-sm text-gray-300">
                <p>
                    Version { version }
                </p>
                 <p> 
                    Release Date: { releaseDate }
                </p>
            </div>
        </div>
    );
}