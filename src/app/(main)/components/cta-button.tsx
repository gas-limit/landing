'use client'

import Link from "next/link"
import { Sparkles } from "lucide-react"
import { useEffect, useState } from "react"

export function CTAButton() {
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        setIsDark(window.matchMedia('(prefers-color-scheme: dark)').matches)

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
        const handler = (e: MediaQueryListEvent) => setIsDark(e.matches)
        mediaQuery.addEventListener('change', handler)

        return () => mediaQuery.removeEventListener('change', handler)
    }, [])

    return (
        <Link
            href="https://app.coven.fi"
            className={`
                group relative inline-flex items-center justify-center gap-2 px-8 py-3 text-sm font-medium transition-all duration-300 
                ${isDark ? 'bg-gradient-to-r from-[#C1A3E7] via-[#D4B8EF] to-[#A3E4E7]' : 'bg-gradient-to-r from-[#E0C7FF] via-[#E5DBFF] to-[#A0E7E5]'}
                text-purple-900 rounded-full shadow-[0px_0px_20px_rgba(220,170,250,0.6)] hover:shadow-[0px_0px_25px_rgba(220,170,250,0.8)]
                transform transition-transform transform-origin-center hover:scale-102
                mb-4
                before:absolute before:inset-0 before:rounded-full before:bg-white/30 before:blur-lg before:opacity-40 hover:before:opacity-60
                after:content-[''] after:absolute after:inset-0 after:rounded-full after:animate-pulse after:bg-white/20 after:opacity-0 group-hover:after:opacity-100
            `}
        >
            <span className="relative font-bold">Launch App</span>
            <Sparkles className="relative h-4 w-4 text-purple-700 transition-transform group-hover:rotate-12"/>
        </Link>
    )
}
