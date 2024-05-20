"use client"



// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.


import * as React from "react"
import {
  ColumnDef,
} from "@tanstack/react-table" 

import { Checkbox } from "@/components/ui/checkbox"





// Basic File type definition
export type BaseFile = {
  id: string;
  name: string;
  type: string; // e.g., "PDF", "Text File"
  size: string; // e.g., "1.2 MB"
  lastModified: string; // e.g., "2023-01-01"
}

// Extended IndustryFile type definition
export type IndustryFile = BaseFile & {
  rawText: string;
  summary: string;
  textVectorEmbedding: number[]; // Assuming an array of numbers for simplicity
  hypotheticalQuestions: {
    commonQuestions: string[];
    humanPopulated: boolean;
    aiSuggested: boolean;
  };
  aboutTheSource: string[];
  categoryTags: string[];
}
export type OrgInformationFile = BaseFile & {
  
  rawText: string;
  categoryTags: string[]; // Example values: "Mission", "Github", etc.
  summary: string;
  hypotheticalQuestions: {
    commonQuestions: string[];
    humanPopulated: boolean;
    aiSuggested: boolean;
  };
  managingDepartment: string; // Department responsible for the file
};

export type ProductOffering = {
  name: string;
  price: string;
  pricingMethod: "Flat" | "Hourly";
  retainer: boolean;
}

// Define the ProductFile type for products and services database
export type ProductFile =BaseFile & {
  fullName: string; // Name/Title of the legal professional
  contactInformation: {
    email: string;
    discord: string;
    website?: string;
    profilePictureUrl?: string;
  };
  parentOrganization: {
    title: string;
    entityType: string;
    purpose: string;
  };
  authorizedJurisdictions: string[];
  description: string;
  servicesOffered: ProductOffering[];
}



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


