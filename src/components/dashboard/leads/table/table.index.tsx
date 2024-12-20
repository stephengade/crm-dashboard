"use client";



import { mockLeads } from "./types.data";

import { DataTable } from "./tabledemo";

export function LeadsTable() {

  return (
    <div className="rounded-lg border bg-white px-2 md:px-3 lg:px-4 py-2 shadow-sm">
      <DataTable data={mockLeads} />
    </div>
  );
}
