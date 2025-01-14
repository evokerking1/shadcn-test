"use client"

import {CommandDialogDemo} from "@/app/components/command"
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/ui/theme_button'
import { ToastAction } from '@/components/ui/toast'
import {toast} from "@/hooks/use-toast";


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <CommandDialogDemo></CommandDialogDemo>
        <ModeToggle/>

        <Button variant={"destructive"} onClick={() => {
            toast({
                title: "Are You Sure You Want To Self Destruct?",
                description: "Press the button to confirm.",
                action: <ToastAction altText="Self Destruct">Self Destruct</ToastAction>,
            })
        }}>Self Destruct.</Button>
        
      </main>
    </div>
  );
}

