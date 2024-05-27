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

const RecommendationFormSchema = z.object({
	recommendationWeighting: z
		.string({
			required_error: "Please select a recommendation weighting method.",
		})

});

const SearchFormSchema = z.object({
	searchPrecision: z
		.string({
			required_error: "Please select a search precision.",
		})

});
const AlgorithmFormSchema = z.object({
	searchAlgorithm: z
		.string({
			required_error: "Please select a search algorithm",
		})

});


const GeneralInstructions = () => {


	const recommendationForm = useForm<z.infer<typeof RecommendationFormSchema>>({
		resolver: zodResolver(RecommendationFormSchema),
	});

	const searchForm = useForm<z.infer<typeof SearchFormSchema>>({
		resolver: zodResolver(SearchFormSchema),
	});

	const algorithmForm = useForm<z.infer<typeof AlgorithmFormSchema>>({
		resolver: zodResolver(AlgorithmFormSchema),
	});

	const submitRecommendationForm = (data: z.infer<typeof RecommendationFormSchema>) => {
		// Placeholder logic for now, will hook up to database later.
		toast({
			title: "You submitted the following values:",
			description: (
				<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
					<code className="text-white">{JSON.stringify(data, null, 2)}</code>
				</pre>
			),
		});
	};
	const submitSearchForm = (data: z.infer<typeof SearchFormSchema>) => {
		// Placeholder logic for now, will hook up to database later.
		toast({
			title: "You submitted the following values:",
			description: (
				<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
					<code className="text-white">{JSON.stringify(data, null, 2)}</code>
				</pre>
			),
		});
	};
	const submitAlgorithmForm = (data: z.infer<typeof AlgorithmFormSchema>) => {
		// Placeholder logic for now, will hook up to database later.
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
		<Card >
			<CardHeader >
				<CardTitle>General Instructions</CardTitle>
				<CardDescription>
					Customize how your AI should interact with users.
				</CardDescription>
			</CardHeader>
			<CardContent className=" p-6">
				<div className="flex flex-row gap-6">
					<div className="flex flex-col w-1/2 space-y-2">
						<div className="grid gap-1">
							
							<Select defaultValue="respectful">
								<Label htmlFor="select-tone" className="text-foreground">Tone</Label>
								<SelectTrigger aria-label="Select tone" className="bg-input text-foreground border border-border">
									<SelectValue placeholder="Select tone" />
								</SelectTrigger>
								<SelectContent className="bg-card text-card-foreground">
									<SelectItem value="respectful" className="hover:bg-accent hover:text-accent-foreground">Respectful</SelectItem>
									<SelectItem value="authoritative" className="hover:bg-accent hover:text-accent-foreground">Authoritative</SelectItem>
									<SelectItem value="friendly" className="hover:bg-accent hover:text-accent-foreground">Friendly</SelectItem>
								</SelectContent>
							</Select>
						</div>
						<div className="grid gap-1">
							<Label htmlFor="verbosity" className="text-foreground">Verbosity</Label>
							<Select defaultValue="concise">
								<SelectTrigger aria-label="Select verbosity" className="bg-input text-foreground border border-border">
									<SelectValue placeholder="Select verbosity level" />
								</SelectTrigger>
								<SelectContent className="bg-card text-card-foreground">
									<SelectItem value="concise" className="hover:bg-accent hover:text-accent-foreground">Concise</SelectItem>
									<SelectItem value="detailed" className="hover:bg-accent hover:text-accent-foreground">Detailed</SelectItem>
								</SelectContent>
							</Select>
						</div>
						<div className="grid gap-1">
							<Label htmlFor="formality" className="text-foreground">Formality Level</Label>
							<Select defaultValue="casual">
								<SelectTrigger aria-label="Select formality" className="bg-input text-foreground border border-border">
									<SelectValue placeholder="Select formality level" />
								</SelectTrigger>
								<SelectContent className="bg-card text-card-foreground">
									<SelectItem value="casual" className="hover:bg-accent hover:text-accent-foreground">Casual</SelectItem>
									<SelectItem value="moderate" className="hover:bg-accent hover:text-accent-foreground">Moderate</SelectItem>
									<SelectItem value="formal" className="hover:bg-accent hover:text-accent-foreground">Formal</SelectItem>
								</SelectContent>
							</Select>
						</div>
					</div>
					<div className="flex flex-col w-1/2 space-y-2">
						<Label htmlFor="textInput" className="text-foreground">Specific Instructions</Label>
						<Textarea id="textInput" className="min-h-[11rem] w-full bg-input text-foreground border border-border"></Textarea>
					</div>
				</div>
			</CardContent>
		</Card>


	);
};

export default GeneralInstructions;

