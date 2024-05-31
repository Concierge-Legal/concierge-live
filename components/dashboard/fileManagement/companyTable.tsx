'use client';
import React, { useState, useEffect } from 'react';
import { createClient } from '@/lib/utils/supabase/client';

import TextEditor from '@/components/dashboard/fileManagement/TextEditor';
import { getColumns } from "@/components/dashboard/fileManagement/columns";
import { BaseFile, IndustryFile, CompanyFile, ProductFile } from "@/lib/utils/types";

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


import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import OrgInfoEditor from '@/components/dashboard/fileManagement/OrgInfoEditor';

// Initialize Supabase client (configure your Supabase details)
const supabase = createClient();

const data: CompanyFile[] = [
	// Governance Documents
	{
		id: "doc001",
		name: "DemoDAO Charter",
		type: "PDF",
		size: "350 KB",
		lastModified: "2023-01-15",
		rawText: "",
		categoryTags: ["Governance", "Charter"],
		summary: "Defines the foundational governance structure and charter of DemoDAO.",
		hypotheticalQuestions: {
			commonQuestions: ["What are the core governance structures of DemoDAO?", "How is the DAO organized?"],
			humanPopulated: true,
			aiSuggested: false
		},
		managingDepartment: "Governance"
	},
	{
		id: "doc002",
		name: "Token Distribution Policy",
		type: "PDF",
		size: "290 KB",
		lastModified: "2023-02-01",
		rawText: "",
		categoryTags: ["Governance", "Token"],
		summary: "Outlines the policies for distribution and use of governance tokens within DemoDAO.",
		hypotheticalQuestions: {
			commonQuestions: ["How are governance tokens distributed?", "What are the rules for token usage?"],
			humanPopulated: true,
			aiSuggested: true
		},
		managingDepartment: "Legal"
	},
	{
		id: "doc003",
		name: "Board Meeting Minutes 2023-01",
		type: "Text File",
		size: "150 KB",
		lastModified: "2023-01-28",
		rawText: "",
		categoryTags: ["Governance", "Meeting"],
		summary: "Minutes from the January 2023 board meeting of DemoDAO.",
		hypotheticalQuestions: {
			commonQuestions: ["What decisions were made in the latest board meeting?", "Who attended the last board meeting?"],
			humanPopulated: true,
			aiSuggested: false
		},
		managingDepartment: "Corporate Secretary"
	},

	// Legal and Regulatory Compliance
	{
		id: "doc004",
		name: "AI Compliance Policy",
		type: "PDF",
		size: "410 KB",
		lastModified: "2023-02-10",
		rawText: "",
		categoryTags: ["Legal", "AI", "Compliance"],
		summary: "Document detailing compliance policies specific to AI technologies used by DemoDAO.",
		hypotheticalQuestions: {
			commonQuestions: ["What compliance measures does DemoDAO follow for AI use?", "How does DemoDAO ensure AI ethical standards?"],
			humanPopulated: true,
			aiSuggested: true
		},
		managingDepartment: "Compliance"
	},
	{
		id: "doc005",
		name: "Data Protection Audit Report 2022",
		type: "PDF",
		size: "460 KB",
		lastModified: "2023-03-05",
		rawText: "",
		categoryTags: ["Legal", "Compliance", "Audit"],
		summary: "A comprehensive report on DemoDAO’s adherence to global data protection laws.",
		hypotheticalQuestions: {
			commonQuestions: ["What were the findings of the last data protection audit?", "How has DemoDAO improved its data protection measures?"],
			humanPopulated: true,
			aiSuggested: false
		},
		managingDepartment: "Compliance"
	},

	// And so on for other document types...

	// Last document for sample space limit
	{
		id: "doc030",
		name: "Member Exit Protocol",
		type: "Text File",
		size: "210 KB",
		lastModified: "2023-05-01",
		rawText: "",
		categoryTags: ["Membership", "Protocol"],
		summary: "Outlines the process and implications of a member's decision to leave DemoDAO.",
		hypotheticalQuestions: {
			commonQuestions: ["What are the steps for a member to exit DemoDAO?", "What happens to a member’s contributions after they leave?"],
			humanPopulated: true,
			aiSuggested: false
		},
		managingDepartment: "Membership Services"
	},
	{
		id: "doc031",
		name: "Annual Financial Report 2022",
		type: "PDF",
		size: "500 KB",
		lastModified: "2023-04-12",
		rawText: "",
		categoryTags: ["Financial", "Annual Report"],
		summary: "Comprehensive financial performance report of DemoDAO for the year 2022.",
		hypotheticalQuestions: {
			commonQuestions: ["What was DemoDAO’s financial status in 2022?", "How did DemoDAO perform financially last year?"],
			humanPopulated: true,
			aiSuggested: false
		},
		managingDepartment: "Finance"
	},
	{
		id: "doc032",
		name: "Budget Forecast 2023-2024",
		type: "Excel",
		size: "320 KB",
		lastModified: "2023-02-28",
		rawText: "",
		categoryTags: ["Financial", "Budget"],
		summary: "Detailed budget projections for the fiscal years 2023 to 2024.",
		hypotheticalQuestions: {
			commonQuestions: ["What are the budget expectations for the next fiscal year?", "How much budget is allocated to R&D?"],
			humanPopulated: true,
			aiSuggested: false
		},
		managingDepartment: "Finance"
	},

	// Research and Development
	{
		id: "doc033",
		name: "Whitepaper on AI-driven Contract Automation",
		type: "PDF",
		size: "410 KB",
		lastModified: "2023-03-15",
		rawText: "",
		categoryTags: ["Research", "AI"],
		summary: "Exploration of cutting-edge AI techniques to automate contract management processes.",
		hypotheticalQuestions: {
			commonQuestions: ["What advancements does AI offer for contract management?", "How can AI transform contract automation?"],
			humanPopulated: true,
			aiSuggested: true
		},
		managingDepartment: "R&D"
	},

	// Human Resources
	{
		id: "doc034",
		name: "Employee Handbook 2023",
		type: "PDF",
		size: "460 KB",
		lastModified: "2023-01-10",
		rawText: "",
		categoryTags: ["HR", "Policy"],
		summary: "Guidelines and policies for employees of DemoDAO, including code of conduct and ethics.",
		hypotheticalQuestions: {
			commonQuestions: ["What are the core employee policies at DemoDAO?", "What conduct is expected from DemoDAO employees?"],
			humanPopulated: true,
			aiSuggested: false
		},
		managingDepartment: "Human Resources"
	},
	{
		id: "doc035",
		name: "AI Specialist Training Program",
		type: "PDF",
		size: "350 KB",
		lastModified: "2023-04-01",
		rawText: "",
		categoryTags: ["HR", "Training"],
		summary: "Comprehensive training modules for new AI specialists at DemoDAO.",
		hypotheticalQuestions: {
			commonQuestions: ["What does the AI specialist training involve?", "How long is the training period for new AI specialists?"],
			humanPopulated: true,
			aiSuggested: false
		},
		managingDepartment: "Human Resources"
	},

	// Educational and Outreach Programs
	{
		id: "doc036",
		name: "Public Webinar Series on Legal Tech",
		type: "Text File",
		size: "210 KB",
		lastModified: "2023-03-22",
		rawText: "",
		categoryTags: ["Education", "Outreach"],
		summary: "Schedule and topics for the upcoming public webinar series focused on innovations in legal technology.",
		hypotheticalQuestions: {
			commonQuestions: ["What topics will be covered in the legal tech webinar?", "How can one register for the webinar series?"],
			humanPopulated: true,
			aiSuggested: true
		},
		managingDepartment: "Outreach"
	},

	// Technology and Infrastructure
	{
		id: "doc037",
		name: "System Architecture Review 2023",
		type: "PDF",
		size: "470 KB",
		lastModified: "2023-05-08",
		rawText: "",
		categoryTags: ["Technology", "Infrastructure"],
		summary: "Annual review of DemoDAO’s system architecture, focusing on scalability and security enhancements.",
		hypotheticalQuestions: {
			commonQuestions: ["What architectural improvements were made in the last year?", "How is DemoDAO enhancing its technological infrastructure?"],
			humanPopulated: true,
			aiSuggested: true
		},
		managingDepartment: "Technology"
	},

	// Marketing and Public Relations
	{
		id: "doc038",
		name: "Annual Marketing Strategy 2023",
		type: "PDF",
		size: "390 KB",
		lastModified: "2023-01-20",
		rawText: "",
		categoryTags: ["Marketing", "Strategy"],
		summary: "The strategic marketing plan for DemoDAO in 2023, aiming to expand its reach and impact.",
		hypotheticalQuestions: {
			commonQuestions: ["What are the key marketing initiatives for DemoDAO in 2023?", "How does DemoDAO plan to attract new members?"],
			humanPopulated: true,
			aiSuggested: true
		},
		managingDepartment: "Marketing"
	},
	{
		id: "doc039",
		name: "Community Engagement Report Q1 2023",
		type: "PDF",
		size: "410 KB",
		lastModified: "2023-04-18",
		rawText: "",
		categoryTags: ["Public Relations", "Community"],
		summary: "A report detailing DemoDAO’s community engagement activities and their impact during the first quarter of 2023.",
		hypotheticalQuestions: {
			commonQuestions: ["What community engagement activities were conducted?", "How effective were the outreach efforts in Q1?"],
			humanPopulated: true,
			aiSuggested: false
		},
		managingDepartment: "Public Relations"
	},

	// Membership Files
	{
		id: "doc040",
		name: "New Member Onboarding Process",
		type: "Text File",
		size: "180 KB",
		lastModified: "2023-02-25",
		rawText: "",
		categoryTags: ["Membership", "Onboarding"],
		summary: "The onboarding process for new members joining DemoDAO, including initial steps and resources.",
		hypotheticalQuestions: {
			commonQuestions: ["What is the onboarding process for new members?", "What resources are available to new members?"],
			humanPopulated: true,
			aiSuggested: true
		},
		managingDepartment: "Membership"
	},
	{
		id: "doc045",
		name: "Member Contribution Records 2022",
		type: "Excel",
		size: "260 KB",
		lastModified: "2023-03-30",
		rawText: "",
		categoryTags: ["Membership", "Records"],
		summary: "Detailed records of all contributions made by members of DemoDAO in the year 2022.",
		hypotheticalQuestions: {
			commonQuestions: ["What contributions were made by members last year?", "Who were the top contributors in 2022?"],
			humanPopulated: true,
			aiSuggested: false
		},
		managingDepartment: "Membership"
	}
];

const IndustryTable: React.FC<{}> = ({}) => {
	const [sorting, setSorting] = useState<SortingState>([]);
	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>(
		[]
	);
	const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
	const [rowSelection, setRowSelection] = useState({});
	const [editorOpen, setEditorOpen] = useState(false);
	const [currentDocument, setCurrentDocument] = useState<BaseFile | null>(null);
	

	const handleEdit = (file: BaseFile) => {
		console.log(`Handling edit. Printing out file: ${file}`)
		setCurrentDocument(file);
		setEditorOpen(true);
	};
	const handleDownload = (file: BaseFile) => {
		setCurrentDocument(file);
		setEditorOpen(true);
	};
	const handleDelete = (file: BaseFile) => {
		setCurrentDocument(file);
		setEditorOpen(true);
	};

	const table = useReactTable({
		data,
		columns: getColumns({ handleEdit, handleDownload, handleDelete }),
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

	const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement> ) => {
		console.log(`Handling upload.`)
		const file = event.target.files![0];

		const { data, error } = await supabase.storage
		.from('demodao')
		.upload(`company/${file.name}`, file, {
			upsert: true
		})
		if (error) {
			alert(`Error uploading file! ${error}`)
		} else {
			console.log(`Succesfully uploaded file!`)
		}
		

		
	}

	const handleSave = () => {
		alert(`Fake saving!`);  // Implement the save logic
	};

	const handleCloseEditor = () => {
		setEditorOpen(false);
	};
	const columns: ColumnDef<BaseFile>[] = [
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
			<div className="max-w-7xl mx-auto min-h-screen">
				<div className="bg-gray-100 text-black p-8 rounded-lg shadow-lg mb-12 text-center">
					<h1 className="text-5xl font-bold">Company Information Upload</h1>
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
										<input type="file" onChange={handleFileUpload} />
										{/* <Button variant="outline">
											<ArrowUpTrayIcon className="h-6 w-6 mr-2" aria-hidden="true" />
											Upload File
										</Button> */}
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
					<div className="flex flex-col w-full min-h-screen bg-gray-50 p-4">
						<div className="flex justify-between items-center mb-4">
							<Button onClick={handleCloseEditor} variant="outline">← Back to Files</Button>
							<Button onClick={handleSave}>Save All Changes</Button>
						</div>
						<div className="flex flex-grow">
							<div className="flex-1 p-4 h-full">
								<TextEditor document={currentDocument} onSave={handleSave} />
							</div>
							<div className="flex-1 p-4 h-full">
								<OrgInfoEditor document={currentDocument as CompanyFile} onSave={handleSave} />
							</div>
						</div>
					</div>
				) : null}
			</div>
		</div>

	);
};
export default IndustryTable;