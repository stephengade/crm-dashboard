"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  ChevronDown,
  BarChart2,
  Layout,
  Plus,
  RefreshCw,
  Menu,
  Trash2,
  MoreVertical,
  ChartPie,
  LayoutListIcon,
} from "lucide-react";
import { IoFilterOutline } from "react-icons/io5";
import { VscShare } from "react-icons/vsc";
import { BsMicrosoftTeams } from "react-icons/bs";
import { useState } from "react";
import tailwindConfig from "../../../../tailwind.config";

const LeadsFilter = ["Open Leads", "Closed Leads"];




interface IAction {
    icon: any
    label: string
    className?: string
    showTextBreakpoint?: string
}

const ActionButton = ({ icon: Icon, label, className = "", showTextBreakpoint = "md" }: IAction) => (
  <Tooltip>
    <TooltipTrigger asChild>
      <Button
        variant="outline"
        size="sm"
        className={`outline-none border-none shadow-none ${className}`}
      >
        <Icon className="h-4 w-4" />
        <span className={`hidden ${showTextBreakpoint}:inline ml-2`}>{label}</span>
      </Button>
    </TooltipTrigger>
    <TooltipContent>{label}</TooltipContent>
  </Tooltip>
);

export function LeadNavigation() {
  const [isOpenLeads, setIsOpenLeads] = useState(false);
  const [selectedLeadFilter, setSelectFilter] = useState(LeadsFilter[0]);

  const handleLeadsFilter = () => {
    setIsOpenLeads((prev) => !prev);
  };

  const handleLeadsSelect = (index: number) => {
    setSelectFilter(LeadsFilter[index]);
    handleLeadsFilter();
  };

  const PrimaryActions = () => (
    <>
      <ActionButton icon={Plus} label="New Lead" />
      <ActionButton icon={RefreshCw} label="Refresh" showTextBreakpoint="2xl" />
      <ActionButton
        icon={BsMicrosoftTeams}
        label="Collaborate"
        className="text-[#4e50a3]"
        showTextBreakpoint="2xl"
      />
      <ActionButton icon={Trash2} label="Delete" showTextBreakpoint="2xl" />
    </>
  );

  const SecondaryActions = () => (
    <>
      <ActionButton icon={ChartPie} label="Smart Data" showTextBreakpoint="2xl" />
      <ActionButton icon={IoFilterOutline} label="Edit Filters" showTextBreakpoint="2xl" />
      <ActionButton icon={LayoutListIcon} label="Edit Columns" showTextBreakpoint="2xl" />
      <Button size="sm" className="hidden md:flex">
        <VscShare className="h-4 w-4" />
        <Separator orientation="vertical" className="mx-2 h-4" />
        <ChevronDown className="h-4 w-4" />
      </Button>
    </>
  );

  const ViewOptions = () => (
    <>
      <ActionButton icon={BarChart2} label="Show Chart" />
      <ActionButton icon={Layout} label="Focused View" />
    </>
  );

  return (
    <TooltipProvider>
      <nav className="border-1 border-solid shadow-md rounded-lg bg-white px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Left side - Always visible */}
          <div className="relative flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="space-x-2 outline-none border-none shadow-none"
                >
                  <span>My {selectedLeadFilter}</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {LeadsFilter.map((filter, index) => (
                  <DropdownMenuItem
                    key={filter}
                    onClick={() => handleLeadsSelect(index)}
                  >
                    {filter}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-2">
            <ViewOptions />
            <PrimaryActions />
            <Separator orientation="vertical" className="h-4" />
            <SecondaryActions />
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center space-x-2">
            <ActionButton icon={Plus} label="New Lead" />
            <ActionButton icon={RefreshCw} label="Refresh" />
            
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="ml-2">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-white" side="right">
                <SheetHeader>
                  <SheetTitle className="text-left">Menu Options</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4 py-4">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-medium mb-2">View Options</h3>
                      <div className="grid grid-cols-2 gap-2">
                        <Button variant="outline" size="sm" className="w-full justify-start">
                          <BarChart2 className="h-4 w-4 mr-2" />
                          Show Chart
                        </Button>
                        <Button variant="outline" size="sm" className="w-full justify-start">
                          <Layout className="h-4 w-4 mr-2" />
                          Focused View
                        </Button>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="text-sm font-medium mb-2">Actions</h3>
                      <div className="grid grid-cols-2 gap-2">
                        <Button variant="outline" size="sm" className="w-full justify-start">
                          <BsMicrosoftTeams className="h-4 w-4 mr-2 text-[#4e50a3]" />
                          Collaborate
                        </Button>
                        <Button variant="outline" size="sm" className="w-full justify-start">
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete
                        </Button>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="text-sm font-medium mb-2">Additional Options</h3>
                      <div className="grid grid-cols-2 gap-2">
                        <Button variant="outline" size="sm" className="w-full justify-start">
                          <ChartPie className="h-4 w-4 mr-2" />
                          Smart Data
                        </Button>
                        <Button variant="outline" size="sm" className="w-full justify-start">
                          <IoFilterOutline className="h-4 w-4 mr-2" />
                          Edit Filters
                        </Button>
                        <Button variant="outline" size="sm" className="w-full justify-start">
                          <LayoutListIcon className="h-4 w-4 mr-2" />
                          Edit Columns
                        </Button>
                        <Button size="sm" className="w-full justify-start">
                          <VscShare className="h-4 w-4 mr-2" />
                          Share
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </TooltipProvider>
  );
}