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
import { toast } from "@/components/ui/use-toast"
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
	  
  })


const BehaviorToggles = () => {
	const [settings, setSettings] = useState({
		recommendationWeighting: 'random',
		searchPrecision: 'balanced',
		privacyLevel: 'high',
		responseSpeed: 'balanced',
		dynamicRouting: true,
		searchAlgorithm: 'popularity'
	});

	const form = useForm<z.infer<typeof RecommendationFormSchema>>({
		resolver: zodResolver(RecommendationFormSchema),
	  })

	const submitRecommendationMessage = (data: z.infer<typeof RecommendationFormSchema>) => {
		// Placeholder logic for now, will hook up to database later.
		toast({
			title: "You submitted the following values:",
			description: (
			  <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
				<code className="text-white">{JSON.stringify(data, null, 2)}</code>
			  </pre>
			),
		  })
	};

	return (
		<Card className="bg-white shadow-md rounded-lg">
			<CardHeader className="bg-gray-100 px-5 py-3 border-b">
				<CardTitle className="text-lg font-semibold">Behavior Toggles</CardTitle>
			</CardHeader>
			<CardContent className="p-5">
				<div className="grid gap-6 md:grid-cols-2">
					<div className="grid gap-3">
						<Label htmlFor="recommendation" className="font-medium text-gray-700">Member Recommendation Weighting</Label>


						<Form {...form}>
							<form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
								<FormField
									control={form.control}
									name="recommendationWeighting"
									render={({ field }) => (
										<FormItem>
											<FormLabel className="font-medium text-gray-700">Member Recommendation Weighting</FormLabel>
											<Select onValueChange={field.handleSubmit(onSubmit)} defaultValue={field.value}>
												<FormControl>
													<SelectTrigger>
														<SelectValue placeholder="Select weighting" />
													</SelectTrigger>
												</FormControl>
												<SelectContent>
													<SelectItem value="random">Randomized</SelectItem>
													<SelectItem value="ascending">Smallest to Largest</SelectItem>
													<SelectItem value="descending">Largest to Smallest</SelectItem>
													<SelectItem value="similarity">By AI Similarity Score</SelectItem>
												</SelectContent>
											</Select>
											<FormDescription>
												Choose how to display similar members to the user.
											</FormDescription>
											<FormMessage />
										</FormItem>
									)}
								/>
								
							</form>
						</Form>


						<Select>
							<SelectTrigger id="recommendation" onChange={(e) => handleChange('recommendationWeighting', e.target.value)}
								className="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm">
								<SelectValue placeholder={settings.recommendationWeighting} />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="random">Randomized</SelectItem>
								<SelectItem value="ascending">Smallest to Largest</SelectItem>
								<SelectItem value="descending">Largest to Smallest</SelectItem>
								<SelectItem value="similarity">By AI Similarity Score</SelectItem>
							</SelectContent>
						</Select>
					</div>
					<div className="grid gap-3">
						<Label htmlFor="searchPrecision" className="font-medium text-gray-700">Search Precision</Label>
						<Select id="searchPrecision" value={settings.searchPrecision} onChange={(e) => handleChange('searchPrecision', e.target.value)}
							className="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm">
							<SelectItem value="broad">Broad</SelectItem>
							<SelectItem value="balanced">Balanced</SelectItem>
							<SelectItem value="precise">Precise</SelectItem>
						</Select>
					</div>
					<div className="grid gap-3">
						<Label htmlFor="privacyLevel" className="font-medium text-gray-700">Conversation Privacy Level</Label>
						<Select id="privacyLevel" value={settings.privacyLevel} onChange={(e) => handleChange('privacyLevel', e.target.value)}
							className="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm">
							<SelectItem value="low">Low</SelectItem>
							<SelectItem value="medium">Medium</SelectItem>
							<SelectItem value="high">High</SelectItem>
						</Select>
					</div>
					<div className="grid gap-3">
						<Label htmlFor="responseSpeed" className="font-medium text-gray-700">Response Speed vs Detail</Label>
						<Select id="responseSpeed" value={settings.responseSpeed} onChange={(e) => handleChange('responseSpeed', e.target.value)}
							className="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm">
							<SelectItem value="faster">Faster Responses</SelectItem>
							<SelectItem value="balanced">Balanced</SelectItem>
							<SelectItem value="detailed">More Detailed</SelectItem>
						</Select>
					</div>
					<div className="grid gap-3">
						<Label htmlFor="dynamicRouting" className="font-medium text-gray-700">Enable Dynamic Routing</Label>
						<Select id="dynamicRouting" value={settings.dynamicRouting} onChange={(e) => handleChange('dynamicRouting', e.target.value)}
							className="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm">
							<SelectItem value={true}>Enabled</SelectItem>
							<SelectItem value={false}>Disabled</SelectItem>
						</Select>
					</div>
					<div className="grid gap-3">
						<Label htmlFor="searchAlgorithm" className="font-medium text-gray-700">Product/Service Search Algorithm</Label>
						<Select id="searchAlgorithm" value={settings.searchAlgorithm} onChange={(e) => handleChange('searchAlgorithm', e.target.value)}
							className="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm">
							<SelectItem value="popularity">Popularity</SelectItem>
							<SelectItem value="recent">Most Recent</SelectItem>
							<SelectItem value="rating">Highest Rated</SelectItem>
						</Select>
					</div>
				</div>
			</CardContent>
		</Card>
	);
};

export default BehaviorToggles;
