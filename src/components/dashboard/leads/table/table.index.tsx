"use client";

import { useState } from "react";
import { format } from "date-fns";
import { ChevronDown, ChevronUp, Search } from "lucide-react";
import Image from "next/image";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { getLeads, mockLeads, TableLead } from "./types.data";
import { CopilotIcon } from "../../__global/global.right-sidebar";
import { DataTable } from "./tabledemo";

export function LeadsTable() {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<keyof TableLead>("createdAt");
  const [sortDesc, setSortDesc] = useState(true);
  const [page, setPage] = useState(1);
  const pageSize = 10;

  const { leads, total } = getLeads(search, sortBy, sortDesc, page, pageSize);
  const totalPages = Math.ceil(total / pageSize);

  const handleSort = (column: keyof TableLead) => {
    if (sortBy === column) {
      setSortDesc(!sortDesc);
    } else {
      setSortBy(column);
      setSortDesc(true);
    }
  };

  const SortIcon = ({ column }: { column: keyof TableLead }) => {
    if (sortBy !== column) return null;
    return sortDesc ? (
      <ChevronDown className="ml-2 h-4 w-4" />
    ) : (
      <ChevronUp className="ml-2 h-4 w-4" />
    );
  };

  return (
    <div className="rounded-lg border bg-white px-2 md:px-3 lg:px-4 py-2 shadow-sm">
      <DataTable data={mockLeads} />
    </div>
  );
}
