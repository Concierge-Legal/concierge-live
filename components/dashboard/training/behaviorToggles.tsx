"use client";
import { useState } from 'react';
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
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "@/components/ui/use-toast";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Separator } from '@/components/ui/separator';

const FormSchema = z.object({
	recommendationWeighting: z
		.string({
			required_error: "Please select a recommendation weighting method.",
		}),
	searchPrecision: z
		.string({
			required_error: "Please select a search precision.",
		}),
	searchAlgorithm: z
		.string({
			required_error: "Please select a search algorithm",
		})

});



const BehaviorToggles = () => {


	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
	});


	const onSubmit = (data: z.infer<typeof FormSchema>) => {
		// Placeholder logic for now, will hook up to database later.
		console.log(JSON.stringify(data, null, 2));
		toast({
			title: "You submitted the following values:",
			description: (
				<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
					<code className="text-white">{JSON.stringify(data, null, 2)}</code>
				</pre>
			),
		});
	};


	return (
		<Card className="bg-white shadow rounded-lg">
			<CardHeader className="bg-gray-100 px-5 py-3 border-b">
				<CardTitle className="text-lg font-semibold">Behavior Toggles</CardTitle>
			</CardHeader>
			<CardContent className="px-5 py-4">
				<div className="flex flex-col">
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
							<FormField
								control={form.control}
								name="recommendationWeighting"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="text-gray-700">Member Recommendation Weighting</FormLabel>
										<FormDescription className="text-sm text-gray-600">
											Choose how to display similar members to the user.
										</FormDescription>
										<Select onValueChange={field.onChange} defaultValue={field.value}>
											<SelectTrigger className="border border-gray-300 rounded-md shadow-sm">
												<SelectValue placeholder="Select weighting" />
											</SelectTrigger>
											<SelectContent className="bg-white shadow-lg rounded-md border-gray-100">
												<SelectItem value="random">Randomized</SelectItem>
												<SelectItem value="ascending">Smallest to Largest</SelectItem>
												<SelectItem value="descending">Largest to Smallest</SelectItem>
												<SelectItem value="similarity">By AI Similarity Score</SelectItem>
											</SelectContent>
										</Select>

										<FormMessage />
									</FormItem>
								)}
							/>


							<Separator className="my-2" />
							{/* Search Form */}

							<FormField
								control={form.control}
								name="searchPrecision"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="text-gray-700">Search Precision</FormLabel>
										<FormDescription className="text-sm">
											Choose how precise you want searches.
										</FormDescription>
										<Select onValueChange={field.onChange} defaultValue={field.value}>
											<SelectTrigger className="border border-gray-300 rounded-md shadow-sm">
												<SelectValue placeholder="Select precision" />
											</SelectTrigger>
											<SelectContent className="bg-white shadow-lg rounded-md border-gray-100">
												<SelectItem value="broad">Broad</SelectItem>
												<SelectItem value="balanced">Balanced</SelectItem>
												<SelectItem value="precise">Precise</SelectItem>
											</SelectContent>
										</Select>

										<FormMessage />
									</FormItem>
								)}
							/>


							<Separator className="my-2" />
							{/* Algorithm Form */}

							<FormField
								control={form.control}
								name="searchAlgorithm"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Search Algorithm</FormLabel>
										<FormDescription >
											Choose how to search stuff.
										</FormDescription>
										<Select onValueChange={field.onChange} defaultValue={field.value}>
											<SelectTrigger className="border border-gray-300 rounded-md shadow-sm">
												<SelectValue placeholder="Select algorithm" />
											</SelectTrigger>
											<SelectContent className="bg-white shadow-lg rounded-md border-gray-100">
												<SelectItem value="popularity">Popularity</SelectItem>
												<SelectItem value="recent">Most Recent</SelectItem>
												<SelectItem value="rating">Highest Rated</SelectItem>
											</SelectContent>
										</Select>

										<FormMessage />
									</FormItem>
								)}
							/>

							<Button type="submit">Submit</Button>

						</form>
					</Form>
				</div>
			</CardContent>
		</Card >
	);
};

export default BehaviorToggles;
