'use client'

import * as React from "react"
import * as Dialog from "@radix-ui/react-dialog"

import { cn } from "@/lib/utils"

const Sheet = Dialog.Root
const SheetTrigger = Dialog.Trigger

const SheetContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof Dialog.Content>
>(({ className, children, ...props }, ref) => (
  <Dialog.Portal>
    <Dialog.Overlay
      className={cn(
        "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-opacity",
      )}
    />
    <Dialog.Content
      ref={ref}
      className={cn(
        "fixed right-0 top-0 z-50 flex h-full w-[min(90vw,20rem)] flex-col gap-4 border-l border-border/40 bg-background p-6 shadow-2xl shadow-black/20 outline-none",
        className,
      )}
      {...props}
    >
      {children}
    </Dialog.Content>
  </Dialog.Portal>
))
SheetContent.displayName = Dialog.Content.displayName

export { Sheet, SheetContent, SheetTrigger }
