'use client';
import React, { useState, useEffect } from 'react';
import { createClient } from '@/utils/supabase/client';
import CategorySelector from '@/components/dashboard/fileManagement/CategorySelector';
import FileUploadButton from '@/components/dashboard/fileManagement/FileUpload';
import TextEditor from '@/components/dashboard/fileManagement/TextEditor';
import FileList from '@/components/dashboard/fileManagement/FileList';
import MetadataEditor from '@/components/dashboard/fileManagement/MetadataEditor';
import { DataTable } from '@/components/dashboard/fileManagement/data-table';
import { CustomFile, getColumns } from "@/components/dashboard/fileManagement/columns";
import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";
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
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

// Initialize Supabase client (configure your Supabase details)
const supabase = createClient();

const data: CustomFile[] = [
	{
		id: "file001",
		name: "Blockchain-based-gov-primitives",
		type: "Text File",
		size: "1.2 MB",
		lastModified: "2022-09-15",
	},
	{
		id: "file002",
		name: "Chatbot Development Best Practices.text",
		type: "Text File",
		size: "689 KB",
		lastModified: "2022-08-20",
	},
	{
		id: "file003",
		name: "Machine Learning Algorithms Overview.docx",
		type: "Document",
		size: "2.5 MB",
		lastModified: "2022-07-05",
	},
	{
		id: "file004",
		name: "Data Privacy in AI Services.md",
		type: "Markdown",
		size: "780 KB",
		lastModified: "2022-10-01",
	},
	{
		id: "file005",
		name: "AI Ethics and Compliance Regulations.text",
		type: "Text File",
		size: "465 KB",
		lastModified: "2022-11-12",
	},
];


const KnowledgeDashboardSubpage: React.FC<{ userId: string; }> = ({ userId }) => {
	const [sorting, setSorting] = React.useState<SortingState>([]);
	const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
		[]
	);
	const [columnVisibility, setColumnVisibility] =
		React.useState<VisibilityState>({});
	const [rowSelection, setRowSelection] = React.useState({});
	const [editorOpen, setEditorOpen] = React.useState(false);
	const [currentDocument, setCurrentDocument] = React.useState<CustomFile | null>(null);

	const handleEdit = (file: CustomFile) => {
		setCurrentDocument(file);
		setEditorOpen(true);
	};

	const table = useReactTable({
		data,
		columns: getColumns({ handleEdit }),
		onSortingChange: setSorting,
		onColumnFiltersChange: setColumnFilters,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		onColumnVisibilityChange: setColumnVisibility,
		onRowSelectionChange: setRowSelection,
		state: {
			sorting,
			columnFilters,
			columnVisibility,
			rowSelection,
		},
	});

	const handleFileUpload = () => {
		alert(`Fake upload`);
	};

	const handleSave = () => {
		alert(`Fake saving!`);  // Implement the save logic
	};

	const handleCloseEditor = () => {
		setEditorOpen(false);
	};
	const columns: ColumnDef<CustomFile>[] = [
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
					<button onClick={() => handleEdit(row.original)}>📝 Edit</button>
					<button onClick={() => alert(`Downloading ${row.original.name}`)}>⬇️ Download</button>
					<button onClick={() => alert(`Deleting ${row.original.name}`)}>🗑 Delete</button>
				</div>
			),
			enableSorting: true,
		},
	];




	return (
		<div className="min-h-screen bg-white px-8 py-12">
			<div className="max-w-7xl mx-auto">
				<div className="bg-gray-100 text-black p-8 rounded-lg shadow-lg mb-12 text-center">
					<h1 className="text-5xl font-bold">Concierge Knowledge Upload</h1>
				</div>
				{!editorOpen ? (
					<>
						{/* DataTable and other UI elements */}
						<div className="bg-white">
							<div className="flex items-center justify-between py-4">
								{/* Search input on the left */}
								<Input
									placeholder="Filter filename..."
									value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
									onChange={(event) => table.getColumn("name")?.setFilterValue(event.target.value)}
									className="max-w-sm"
								/>

								{/* Upload button on the right */}
								<div>
									<label className="cursor-pointer">
										<input type="file" className="hidden" onChange={handleFileUpload} />
										<Button variant="outline">
											<ArrowUpTrayIcon className="h-6 w-6 mr-2" aria-hidden="true" />
											Upload File
										</Button>
									</label>
								</div>
							</div>

							<div className="rounded-md border">
								<Table>
									<TableHeader>
										{table.getHeaderGroups().map((headerGroup) => (
											<TableRow key={headerGroup.id}>
												{headerGroup.headers.map((header) => {
													return (
														<TableHead key={header.id}>
															{header.isPlaceholder
																? null
																: flexRender(
																	header.column.columnDef.header,
																	header.getContext()
																)}
														</TableHead>
													);
												})}
											</TableRow>
										))}
									</TableHeader>
									<TableBody>
										{table.getRowModel().rows?.length ? (
											table.getRowModel().rows.map((row) => (
												<TableRow
													key={row.id}
													data-state={row.getIsSelected() && "selected"}
												>
													{row.getVisibleCells().map((cell) => (
														<TableCell key={cell.id}>
															{flexRender(
																cell.column.columnDef.cell,
																cell.getContext()
															)}
														</TableCell>
													))}
												</TableRow>
											))
										) : (
											<TableRow>
												<TableCell
													colSpan={columns.length}
													className="h-24 text-center"
												>
													No results.
												</TableCell>
											</TableRow>
										)}
									</TableBody>
								</Table>
							</div>
							<div className="flex items-center justify-end space-x-2 py-4">
								<div className="flex-1 text-sm text-muted-foreground">
									{table.getFilteredSelectedRowModel().rows.length} of{" "}
									{table.getFilteredRowModel().rows.length} row(s) selected.
								</div>
								<div className="space-x-2">
									<Button
										variant="outline"
										size="sm"
										onClick={() => table.previousPage()}
										disabled={!table.getCanPreviousPage()}
									>
										Previous
									</Button>
									<Button
										variant="outline"
										size="sm"
										onClick={() => table.nextPage()}
										disabled={!table.getCanNextPage()}
									>
										Next
									</Button>
								</div>
							</div>
						</div>
					</>
				) : currentDocument ? (
					<TextEditor document={currentDocument} onClose={handleCloseEditor} onSave={handleSave} />
				) : null}


			</div>
		</div>

	);
};

export default KnowledgeDashboardSubpage;
