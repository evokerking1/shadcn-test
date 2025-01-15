"use client"

import { ThemeProvider } from '@/components/theme-provider'
import { ModeToggle } from '@/components/ui/theme_button'
import { CommandDialogDemo } from '@/app/components/command'

export default function TopLayout() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-neutral-800 bg-neutral-900/95 backdrop-blur supports-[backdrop-filter]:bg-neutral-900/60">
            <div className="flex h-14 items-center px-4">
                <div className="flex items-center gap-4 mr-4">
                    <CommandDialogDemo></CommandDialogDemo>

                </div>
            </div>
        </header>
    )

} 