"use client";

import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import {
	ChevronLeft,
	Home,
	LineChart,
	Package,
	Package2,
	PanelLeft,
	PlusCircle,
	Search,
	Settings,
	ShoppingCart,
	Upload,
	Users2,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textArea";

const DynamicResponseConfig = () => {
	// Create a state for each message with default values
	const [messages, setMessages] = useState([
		"What can you help me with?",
		"What does DemoDAO do?",
		"Can you give me an overview of DemoDAOs members?",
		"Can you recommend me a DemoDAO member to help me?"
	]);

	const handleInputChange = (index: number, newValue: string) => {
		// Create a new array that reflects the change in the textarea
		const newMessages = [...messages];
		newMessages[index] = newValue;
		setMessages(newMessages);
	};

	return (
		<Card>
			<CardHeader className="px-5 py-3 border-b">
				<CardTitle className="text-lg font-semibold">Configure User Response Buttons</CardTitle>

			</CardHeader>
			<CardContent>

				<Table>
					<TableHeader>
						<TableRow>
							<TableHead className="w-24 text-center">Display Order</TableHead>
							<TableHead className="w-1/2">Message</TableHead>
							<TableHead className="w-1/4">Preview</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{messages.map((message, index) => (
							<TableRow key={index}>
								<TableCell className="font-semibold text-center">
									{index + 1}
								</TableCell>
								<TableCell>
									<Label htmlFor={`message-${index}`} className="sr-only">
										Message
									</Label>
									<Textarea
										id={`message-${index}`}
										value={message}
										onChange={(e) => handleInputChange(index, e.target.value)}
										className="min-h-[4rem] w-full"
									/>
								</TableCell>
								<TableCell>
									<Button className="w-full">
										{message}
									</Button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</CardContent>
			<CardFooter className="flex justify-center border-t p-4">
				<Button size="sm" variant="ghost" className="flex gap-1 items-center">
					<PlusCircle className="h-3.5 w-3.5" />
					Add Message
				</Button>
			</CardFooter>
		</Card>
	);
};

export default DynamicResponseConfig;
