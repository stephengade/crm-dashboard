"use client";

import {
  Grid,
  HelpCircle,
  Settings,
  Bell,
  Search,
  Plus,
  MonitorPlay,
  Bot,
} from "lucide-react";
import Link from "next/link";
import { CgMenuGridO } from "react-icons/cg";
import { PiChatsBold } from "react-icons/pi";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import { LuLightbulb } from "react-icons/lu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const apps = [
  {
    name: "Sales Hub",
    description: "Manage your sales pipeline and customer relationships",
    icon: MonitorPlay,
  },
  {
    name: "Marketing Hub",
    description: "Create and manage marketing campaigns",
    icon: Bell,
  },
  {
    name: "Service Hub",
    description: "Manage customer service and support",
    icon: HelpCircle,
  },
  {
    name: "Workergen Bot",
    description: "Manage customer service and support",
    icon: Bot,
  },
];

export default function GlobalNavigation() {
  return (
    <TooltipProvider>
      <section className="fixed w-full z-30">
      <nav className="flex relative h-14 items-center gap-4 bg-[#002050] px-4 text-white">
        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-white/90">
                <CgMenuGridO className="h-10 w-10" />
                <span className="sr-only">Open app selector</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-[400px] sm:w-[540px] bg-white"
            >
              <SheetHeader className="text-left">
                <SheetTitle >Select an app</SheetTitle>
                <SheetDescription>
                  Choose from your available applications
                </SheetDescription>
              </SheetHeader>
              <div className="mt-4 grid grid-cols-2 gap-4">
                {apps.map((app) => (
                  <Button
                    key={app.name}
                    variant="ghost"
                    className="flex h-auto items-start justify-start gap-4 p-4 text-left"
                    asChild
                  >
                    <Link href="#">
                      <app.icon className="h-6 w-6 shrink-0" />
                      <div>
                        <div className="font-semibold">{app.name}</div>
                        {/* <div className="text-sm text-muted-foreground line-clamp-1">
                          {app.description}
                        </div> */}
                      </div>
                    </Link>
                  </Button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
          <div className="hidden items-center gap-2 lg:flex">
            <span className="text-lg font-semibold">Dynamics 365</span>
            <Separator orientation="vertical" className="h-4 opacity-45" />
            <span className="text-sm text-white/60">Sales hub</span>
          </div>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <LuLightbulb className="h-5 w-5 opacity-60" />
                <span className="sr-only">Idea</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Explore Ideas</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <Plus className="h-5 w-5 opacity-60" />
                <span className="sr-only">New</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Create new</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <Settings className="h-5 w-5 opacity-60" />
                <span className="sr-only">Settings</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Settings</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <HelpCircle className="h-5 w-5 opacity-60" />
                <span className="sr-only">Help</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Help</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <PiChatsBold className="h-5 w-5 opacity-60" />
                <span className="sr-only">Chat with an agent</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Chat with an agent</TooltipContent>
          </Tooltip>

          <div className="">
          <Avatar className="h-5 w-5 relative rounded-full">
                <AvatarImage src="/mona.jpg" alt="Mona" />
                <AvatarFallback className="rounded-lg">M</AvatarFallback>
              </Avatar>
              <span className="absolute bottom-5 right-[12px] h-2 w-2 rounded-full bg-green-500 border-[1px] border-solid border-white" />
          </div>
        </div>
      </nav>
      </section>
    </TooltipProvider>
  );
}
