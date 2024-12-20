"use client"

import * as React from "react"
import {
  ActivitySquare,
  AudioWaveform,
  BookOpen,
  Bot,
  Clock,
  Command,
  File,
  Frame,
  GalleryVerticalEnd,
  Headset,
  HomeIcon,
  LayoutDashboard,
  Map,
  PieChart,
  Pin,
  Rocket,
  Settings2,
  SquareTerminal,
  User2,
  Users,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"


const data = {
  user: {
    name: "Mona",
    email: "m@example.com",
    avatar: "/mona.jpg",
  },
  navMain: [
    {
      title: "Home",
      url: "#",
      icon: HomeIcon, 
    },
    {
      title: "Recent",
      url: "#",
      icon: Clock,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Pinned",
      url: "#",
      icon: Pin,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Sales Accelerator",
      url: "#",
      icon: Rocket,
    },
    {
      name: "Dashboards",
      url: "#",
      icon: LayoutDashboard,
    },
    {
      name: "Activities",
      url: "#",
      icon: ActivitySquare,
    },
  ],
  customers: [
    {
      name: "Account",
      url: "#",
      icon: File,
    },
    {
      name: "Contact",
      url: "#",
      icon: User2,
    },
    {
      name: "Agent Skill",
      url: "/dashboard/agent-skill?id=134",
      icon: Bot,
    },
    
  ],
  sales: [
    {
      name: "Leads",
      url: "/dashboard/leads",
      icon: Headset,
    },
    {
      name: "Opportunity",
      url: "#",
      icon: LayoutDashboard,
    },
    {
      name: "Competitors",
      url: "#",
      icon: Users,
    },
    
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar  collapsible="icon" {...props}>
    
      <SidebarContent className="bg-[#eeeeee] md:mt-14 hide-scrollbar">
        
        <NavMain items={data.navMain} />
        <NavProjects title="My Work" projects={data.projects} />
        <NavProjects title="Customers" projects={data.customers}/>
        <NavProjects title="Sales" projects={data.sales}/>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
