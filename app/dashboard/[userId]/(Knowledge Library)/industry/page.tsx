'use client';
import React, { useState, useEffect } from 'react';

import TextEditor from '@/components/dashboard/fileManagement/TextEditor';

import { getColumns } from "@/components/dashboard/fileManagement/columns";
import { BaseFile, IndustryFile, CompanyFile, ProductFile } from "@/utils/types";
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
import { Input } from "@/components/ui/input";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";


const data: IndustryFile[] = [
	{
		id: "file006",
		name: "Smart Contract Best Practices",
		type: "PDF",
		size: "950 KB",
		lastModified: "2023-02-15",

		rawText: "",
		textVectorEmbedding: [/* vector data */],
		summary: "Guidelines and standards for developing robust smart contracts in legal frameworks.",
		hypotheticalQuestions: {
			commonQuestions: ["What are the essential features of a legally compliant smart contract?", "How can smart contracts be used to automate legal processes?"],
			humanPopulated: true,
			aiSuggested: true
		},
		aboutTheSource: ["From our website"],
		categoryTags: ["Legal Tech", "Smart Contracts"]
	},
	{
		id: "file007",
		name: "AI Mediation Protocols",


		type: "Text File",
		size: "1.1 MB",
		lastModified: "2023-03-22",

		rawText: "",
		textVectorEmbedding: [/* vector data */],
		summary: "Exploring the use of AI to conduct unbiased mediations and negotiations.",
		hypotheticalQuestions: {
			commonQuestions: ["How does AI mediation work?", "What are the benefits of AI in resolving disputes?"],
			humanPopulated: true,
			aiSuggested: false
		},
		aboutTheSource: ["Internal document", "Peer Reviewed"],
		categoryTags: ["AI Ethics", "Dispute Resolution"]
	},
	{
		id: "file008",
		name: "Blockchain and Privacy Laws",


		type: "Document",
		size: "650 KB",
		lastModified: "2023-01-31",

		rawText: "",
		textVectorEmbedding: [/* vector data */],
		summary: "Analysis of how blockchain technology intersects with global privacy regulations.",
		hypotheticalQuestions: {
			commonQuestions: ["How do blockchain technologies comply with GDPR?", "What are the privacy concerns associated with blockchain?"],
			humanPopulated: true,
			aiSuggested: false
		},
		aboutTheSource: ["Newsletter", "From a prominent professor named X"],
		categoryTags: ["Crypto", "Privacy Law"]
	},
	{
		id: "file009",
		name: "AI Legal Engineer Certification Guide",


		type: "Text File",
		size: "500 KB",
		lastModified: "2023-04-10",

		rawText: "",
		textVectorEmbedding: [/* vector data */],
		summary: "A comprehensive guide to becoming a certified AI legal engineer at DemoDAO.",
		hypotheticalQuestions: {
			commonQuestions: ["What qualifications are needed for AI legal engineer certification?", "What does the certification process involve at DemoDAO?"],
			humanPopulated: true,
			aiSuggested: true
		},
		aboutTheSource: ["From our website"],
		categoryTags: ["Legal Engineering", "Education"]
	},
	{
		id: "file010",
		name: "Decentralized Governance Models",


		type: "Markdown",
		size: "820 KB",
		lastModified: "2023-02-20",

		rawText: "",
		textVectorEmbedding: [/* vector data */],
		summary: "Exploring different models of governance in decentralized systems.",
		hypotheticalQuestions: {
			commonQuestions: ["What are common decentralized governance structures?", "How do token-based governance models function?"],
			humanPopulated: true,
			aiSuggested: true
		},
		aboutTheSource: ["Combo of many"],
		categoryTags: ["DAO Governance", "DAO Sociology"]
	},
	{
		id: "file011",
		name: "Tokenization and Legal Implications",


		type: "PDF",
		size: "740 KB",
		lastModified: "2023-05-01",

		rawText: "",
		textVectorEmbedding: [/* vector data */],
		summary: "An exploration of how tokenization affects property rights and contractual obligations under the law.",
		hypotheticalQuestions: {
			commonQuestions: ["What legal rights are associated with tokens?", "How does tokenization impact traditional contracts?"],
			humanPopulated: true,
			aiSuggested: true
		},
		aboutTheSource: ["Internal document"],
		categoryTags: ["Crypto Law", "Token Economics"]
	},
	{
		id: "file012",
		name: "Regulatory Sandbox Models for Blockchain Innovations",


		type: "Document",
		size: "620 KB",
		lastModified: "2023-04-18",

		rawText: "",
		textVectorEmbedding: [/* vector data */],
		summary: "Discussion on how regulatory sandboxes are used to foster innovation in blockchain technology while ensuring compliance.",
		hypotheticalQuestions: {
			commonQuestions: ["What is a regulatory sandbox?", "How do regulatory sandboxes aid blockchain startups?"],
			humanPopulated: true,
			aiSuggested: false
		},
		aboutTheSource: ["From our website"],
		categoryTags: ["Blockchain Applications", "Legal Tech"]
	},
	{
		id: "file013",
		name: "AI Tools in Due Diligence Processes",


		type: "Text File",
		size: "560 KB",
		lastModified: "2023-04-11",

		rawText: "",
		textVectorEmbedding: [/* vector data */],
		summary: "How AI tools are revolutionizing due diligence processes in legal transactions.",
		hypotheticalQuestions: {
			commonQuestions: ["What AI tools are available for due diligence?", "How do AI tools improve accuracy and efficiency?"],
			humanPopulated: true,
			aiSuggested: true
		},
		aboutTheSource: ["Newsletter"],
		categoryTags: ["AI Ethics", "Legal Engineering"]
	},
	{
		id: "file014",
		name: "Challenges of Implementing AI in Legal Frameworks",


		type: "PDF",
		size: "530 KB",
		lastModified: "2023-03-07",

		rawText: "",
		textVectorEmbedding: [/* vector data */],
		summary: "Identifying and addressing the major challenges in the integration of AI technologies in legal systems.",
		hypotheticalQuestions: {
			commonQuestions: ["What are the main challenges of using AI in legal systems?", "How can these challenges be mitigated?"],
			humanPopulated: true,
			aiSuggested: false
		},
		aboutTheSource: ["From a prominent professor named X"],
		categoryTags: ["AI Legal Frameworks", "Challenges"]
	},
	{
		id: "file015",
		name: "Ethics of AI in Mediation and Arbitration",


		type: "Text File",
		size: "690 KB",
		lastModified: "2023-02-24",

		rawText: "",
		textVectorEmbedding: [/* vector data */],
		summary: "Exploring ethical considerations when employing AI in mediation and arbitration settings.",
		hypotheticalQuestions: {
			commonQuestions: ["What ethical issues arise with AI in mediation?", "How can fairness be ensured in AI-facilitated arbitration?"],
			humanPopulated: true,
			aiSuggested: true
		},
		aboutTheSource: ["Internal document", "Peer Reviewed"],
		categoryTags: ["AI Ethics", "Dispute Resolution"]
	},
	{
		id: "file016",
		name: "Blockchain and Intellectual Property Rights",


		type: "Markdown",
		size: "480 KB",
		lastModified: "2023-01-29",

		rawText: "",
		textVectorEmbedding: [/* vector data */],
		summary: "Analysis of the impact of blockchain technology on intellectual property rights management.",
		hypotheticalQuestions: {
			commonQuestions: ["How does blockchain affect IP rights management?", "What are the benefits of blockchain for creators?"],
			humanPopulated: true,
			aiSuggested: false
		},
		aboutTheSource: ["Combo of many"],
		categoryTags: ["Blockchain Applications", "Intellectual Property"]
	},
	{
		id: "file017",
		name: "Legal Implications of Decentralized Autonomous Organizations",


		type: "Document",
		size: "760 KB",
		lastModified: "2023-05-15",

		rawText: "",
		textVectorEmbedding: [/* vector data */],
		summary: "A deep dive into the legal implications and regulatory considerations for DAOs.",
		hypotheticalQuestions: {
			commonQuestions: ["What legal structures support DAOs?", "How are DAOs regulated across different jurisdictions?"],
			humanPopulated: true,
			aiSuggested: true
		},
		aboutTheSource: ["From our website"],
		categoryTags: ["DAOs", "Legal Compliance"]
	},
	{
		id: "file018",
		name: "Using AI to Enhance Corporate Compliance",


		type: "PDF",
		size: "720 KB",
		lastModified: "2023-03-14",

		rawText: "",
		textVectorEmbedding: [/* vector data */],
		summary: "How AI can be leveraged to improve compliance processes in corporate environments.",
		hypotheticalQuestions: {
			commonQuestions: ["How can AI enhance compliance monitoring?", "What are the benefits of AI in risk management?"],
			humanPopulated: true,
			aiSuggested: false
		},
		aboutTheSource: ["Newsletter"],
		categoryTags: ["AI Applications", "Corporate Law"]
	},
	{
		id: "file019",
		name: "Fundamentals of Crypto Law",


		type: "Text File",
		size: "820 KB",
		lastModified: "2023-04-03",

		rawText: "",
		textVectorEmbedding: [/* vector data */],
		summary: "Essential legal concepts and frameworks applicable to cryptocurrency operations and transactions.",
		hypotheticalQuestions: {
			commonQuestions: ["What are the foundational legal principles of crypto law?", "How do different countries regulate cryptocurrencies?"],
			humanPopulated: true,
			aiSuggested: true
		},
		aboutTheSource: ["From our website"],
		categoryTags: ["Crypto Law", "Regulatory Compliance"]
	},
	{
		id: "file020",
		name: "AI-Driven Contract Automation",


		type: "Markdown",
		size: "630 KB",
		lastModified: "2023-02-22",

		rawText: "",
		textVectorEmbedding: [/* vector data */],
		summary: "Exploring the use of artificial intelligence to automate and optimize contract creation and management.",
		hypotheticalQuestions: {
			commonQuestions: ["How does AI automate contract creation?", "What are the benefits of AI in contract management?"],
			humanPopulated: true,
			aiSuggested: false
		},
		aboutTheSource: ["Combo of many"],
		categoryTags: ["AI Applications", "Legal Tech"]
	}
];






export default function IndustryKnowledgeDashboardSubpage({ params }: { params: { userId: string; }; }) {
	const [sorting, setSorting] = React.useState<SortingState>([]);
	const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
		[]
	);
	const [columnVisibility, setColumnVisibility] =
		React.useState<VisibilityState>({});
	const [rowSelection, setRowSelection] = React.useState({});
	const [editorOpen, setEditorOpen] = React.useState(false);
	const [currentDocument, setCurrentDocument] = React.useState<BaseFile | null>(null);

	const handleEdit = (file: BaseFile) => {
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

	const handleFileUpload = () => {
		alert(`Fake upload`);
	};

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
			accessorKey: "title",
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
					<h1 className="text-5xl font-bold">Industry Knowledge Upload</h1>
				</div>
				{!editorOpen ? (
					<>
						{/* DataTable and other UI elements */}
						<div className="bg-white">
							<div className="flex items-center justify-between py-4">
								{/* Search input on the left */}
								<Input
									placeholder="Filter name..."
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
					<TextEditor document={currentDocument} onSave={handleSave} />
				) : null}


			</div>
		</div>

	);
};


