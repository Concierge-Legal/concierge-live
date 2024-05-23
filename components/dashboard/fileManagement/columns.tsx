"use client"



// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.


import * as React from "react"
import {
  ColumnDef,
} from "@tanstack/react-table" 

import { Checkbox } from "@/components/ui/checkbox"
import { BaseFile, IndustryFile, CompanyFile, ProductOffering, AuthorizedJurisdiction, ProductFile } from '@/utils/types';


// Actions type adjusted to handle the unified File type
type ColumnActions = {
  handleEdit: (file: BaseFile) => void;
  handleDownload: (file: BaseFile) => void;
  handleDelete: (file: BaseFile) => void;
};

// Adjusted column definitions to accept actions and handle both file types
export const getColumns = (actions: ColumnActions): ColumnDef<BaseFile>[] => [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected() || table.getIsSomePageRowsSelected() && "indeterminate"}
        onCheckedChange={value => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={value => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorFn: (row: BaseFile) => row.name,
    id: 'name',
    header: "File Name",
    cell: info => info.getValue(),
  },
  {
    accessorFn: (row: BaseFile) => row.type,
    id: 'type',
    header: "File Type",
    cell: info => info.getValue(),
  },
  {
    accessorFn: (row: BaseFile) => row.size,
    id: 'size',
    header: "Size (KB)",
    cell: info => info.getValue(),
  },
  {
    accessorFn: (row: BaseFile) => row.lastModified,
    id: 'lastModified',
    header: "Last Modified",
    cell: info => info.getValue(),
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => (
      <div className="flex gap-2">
        <button onClick={() => actions.handleEdit(row.original)}>📝 Edit</button>
        <button onClick={() => actions.handleDownload(row.original)}>⬇️ Download</button>
        <button onClick={() => actions.handleDelete(row.original)}>🗑 Delete</button>
      </div>
    ),
    enableSorting: false,
  },
];


