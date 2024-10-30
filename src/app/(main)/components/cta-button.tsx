'use client'

import Link from "next/link"
import {Sparkles} from "lucide-react"
import {useEffect, useState} from "react"

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
        group relative inline-flex items-center justify-center gap-2 rounded-lg px-8 py-3 text-sm font-medium transition-all duration-300 
        ${isDark ? 'bg-[#5E4978] hover:bg-[#5E4978]/90' : 'bg-[#409888] hover:bg-[#409888]/90'}
        text-white shadow-lg hover:shadow-xl
        before:absolute before:inset-0 before:rounded-lg before:bg-white/10 before:opacity-0 before:transition-opacity hover:before:opacity-100
      `}
        >
            <span className="relative">Launch App</span>
            <Sparkles className="relative h-4 w-4 transition-transform group-hover:rotate-12"/>
        </Link>
    )
}