"use client"



// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type CustomFile = {
  id: string;
  name: string;
  type: string; // Added to distinguish between file types visually
  size: string; // Adjusted to be a string for formatted sizes (e.g., "15 MB", "2 KB")
  lastModified: string; // More readable date format
}

import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table" 
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";


type ColumnActions = {
    handleEdit: (file: CustomFile) => void;
  };
  
  // Extend the column definitions to accept actions
  export const getColumns = (actions: ColumnActions): ColumnDef<CustomFile>[] => [
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
    accessorKey: "name",
    header: "File Name",
    cell: info => info.getValue(),
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: info => info.getValue(),
  },
  {
    accessorKey: "size",
    header: "Size",
    cell: info => info.getValue(),
  },
  {
    accessorKey: "lastModified",
    header: "Last Modified",
    cell: info => info.getValue(),
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => (
      <div className="flex gap-2">
        <button onClick={() => actions.handleEdit(row.original)}>📝 Edit</button>
        <button onClick={() => alert(`Downloading ${row.original.name}`)}>⬇️ Download</button>
        <button onClick={() => alert(`Deleting ${row.original.name}`)}>🗑 Delete</button>
      </div>
    ),
    enableSorting: false,
  },
];
