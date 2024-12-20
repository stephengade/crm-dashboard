"use client"

import { Phone, Video, MessageSquare } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export const CopilotIcon = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Microsoft_365_Copilot_Icon.svg/72px-Microsoft_365_Copilot_Icon.svg.png"

const sidebarItems = [
  {
    src: CopilotIcon,
    label: "Copilot",
  },
  {
    icon: Phone,
    label: "Call",
  },
  {
    icon: Video,
    label: "Meet",
  },
  {
    icon: MessageSquare,
    label: "Messages",
  },
]

export function RightSidebar() {
  return (
    <TooltipProvider>
      <aside className="fixed right-0 top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-12 flex-col items-center border-l bg-[#eeeeee] py-3 shadow-sm md:flex">
        {sidebarItems.map((item, index) => (
          <Tooltip key={item.label}>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-full text-muted-foreground hover:text-foreground"
              >
                {item.icon && <item.icon className="h-5 w-5" />}
                {item.src && <img src={item.src} alt="" className="h-5 w-5 grayscale" />}
                <span className="sr-only">{item.label}</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left" sideOffset={10}>
              {item.label}
            </TooltipContent>
          </Tooltip>
        ))}
      </aside>
    </TooltipProvider>
  )
}

