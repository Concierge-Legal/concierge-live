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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";

import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textArea";
import { toast } from "@/components/ui/use-toast";

// rows: [{message: string}]

const ResponsesSchema = z.object({
	rows: z
		.array(
			z.object({
				order: z.number(),
				message: z.string()
					.min(10, { message: "Each message must be at least 10 characters.", })
					.max(160, { message: "Each message must not be longer than 160 characters.", })

			})
		).min(2, { message: "There must be at least 2 messages.", })
		.max(5, { message: "There can be no more than 5 messages.", })
});
type ResponseFormValues = z.infer<typeof ResponsesSchema>;
const defaultValues: Partial<ResponseFormValues> = {
	rows: [
		{ order: 0, message: "What can you help me with?" },
		{ order: 1, message: "What does DemoDAO do?" },
		{ order: 2, message: "Can you give me an overview of DemoDAOs members?" },
		{ order: 3, message: "Can you recommend me a DemoDAO member to help me?" }
	]
};

const DynamicResponseConfig = () => {
	// Create a state for each message with default values

	const form = useForm<ResponseFormValues>({
		resolver: zodResolver(ResponsesSchema),
		defaultValues
	});
	const { fields, append } = useFieldArray({
		name: "rows",
		control: form.control,
	});


	function onSubmit(data: z.infer<typeof ResponsesSchema>) {
		console.log(fields);
		console.log(JSON.stringify(data, null, 2));
		toast({
			title: "You submitted the following values:",
			description: (
				<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
					<code className="text-white">{JSON.stringify(data, null, 2)}</code>
				</pre>
			),
		});
	}



	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} >
				<Card>
					<CardHeader className="px-5 py-3 border-b">
						<CardTitle className="text-lg font-semibold">Configure User Response Buttons</CardTitle>

					</CardHeader>
					<CardContent>
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead className="w-[60px]">Display Order</TableHead>
									<TableHead className="text-left">Message</TableHead>
									<TableHead>Preview</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody >

								{fields.map((field, index) => (
									<FormField

										control={form.control}
										key={field.id}
										name={`rows.${index}.message`}
										
										render={({ field }) => (
											<FormItem >
												<TableRow >
													<TableCell className="font-semibold text-center">
														{index + 1}
													</TableCell>
													<TableCell >
														<Label htmlFor={`message-${index}`} className="sr-only">
															Message
														</Label>
														<FormControl>

															<Textarea
																id={`message-${index}`}
																
																className="min-h-[4rem]"

																
																{...field}

															/>
														</FormControl>
													</TableCell>
													<TableCell>
														<Button>
															{field.value}
														</Button>
													</TableCell>
												</TableRow>


											</FormItem>
										)}
									/>

								))}
								
							</TableBody>
						</Table>
					</CardContent>
					<CardFooter className="flex justify-center border-t p-4">
						<Button size="sm" variant="ghost" className="flex gap-1 items-center">
							<PlusCircle className="h-3.5 w-3.5" />
							Add Message
						</Button>
						<Button type="submit">Submit</Button>
					</CardFooter>

				</Card>
			</form>
		</Form>
	);
};

export default DynamicResponseConfig;
