"use client";

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
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

import { Textarea } from "@/components/ui/textArea";
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

const FormSchema = z.object({
	tone: z
		.string({
			required_error: "Please select a tone.",
		}),
	verbosity: z
		.string({
			required_error: "Please select a verbosity.",
		}),
	formality: z
		.string({
			required_error: "Please select a formality",
		}),
	instructions: z
		.string().optional()
});



const GeneralInstructions = () => {


	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
	});



	const onSubmit = (data: z.infer<typeof FormSchema>) => {
		// Placeholder logic for now, will hook up to database later.
		console.log(`${JSON.stringify(data, null, 2)}`)
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
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
							<div className="flex flex-row h-4/5">
								<div className="flex flex-col w-1/2 space-y-2">
									<div className="grid gap-1 pr-10">
										<FormField
											control={form.control}
											name="tone"
											render={({ field }) => (
												<FormItem>
													<FormLabel>Tone</FormLabel>
													<Select onValueChange={field.onChange} defaultValue="respectful">
														<SelectTrigger aria-label="Select tone" className="bg-input text-foreground border border-border">
															<SelectValue placeholder="Select tone" />
														</SelectTrigger>
														<SelectContent className="bg-card text-card-foreground">
															<SelectItem value="respectful" className="hover:bg-accent hover:text-accent-foreground">Respectful</SelectItem>
															<SelectItem value="authoritative" className="hover:bg-accent hover:text-accent-foreground">Authoritative</SelectItem>
															<SelectItem value="friendly" className="hover:bg-accent hover:text-accent-foreground">Friendly</SelectItem>
														</SelectContent>
													</Select>
												</FormItem>
											)}
										/>
									</div>
									<div className="grid gap-1 pr-10">
										<FormField
											control={form.control}
											name="verbosity"
											render={({ field }) => (
												<FormItem>
													<FormLabel>Verbosity</FormLabel>
													<Select onValueChange={field.onChange} defaultValue="concise">
														<SelectTrigger aria-label="Select verbosity" className="bg-input text-foreground border border-border">
															<SelectValue placeholder="Select verbosity level" />
														</SelectTrigger>
														<SelectContent className="bg-card text-card-foreground">
															<SelectItem value="concise" className="hover:bg-accent hover:text-accent-foreground">Concise</SelectItem>
															<SelectItem value="detailed" className="hover:bg-accent hover:text-accent-foreground">Detailed</SelectItem>
														</SelectContent>
													</Select>
												</FormItem>
											)}
										/>
									</div>
									<div className="grid gap-1 pr-10">
										<FormField
											control={form.control}
											name="formality"
											render={({ field }) => (
												<FormItem>
													<FormLabel>Formality Level</FormLabel>
													<Select onValueChange={field.onChange} defaultValue="casual">
														<SelectTrigger aria-label="Select formality" className="bg-input text-foreground border border-border">
															<SelectValue placeholder="Select formality level" />
														</SelectTrigger>
														<SelectContent className="bg-card text-card-foreground">
															<SelectItem value="casual" className="hover:bg-accent hover:text-accent-foreground">Casual</SelectItem>
															<SelectItem value="moderate" className="hover:bg-accent hover:text-accent-foreground">Moderate</SelectItem>
															<SelectItem value="formal" className="hover:bg-accent hover:text-accent-foreground">Formal</SelectItem>
														</SelectContent>
													</Select>
												</FormItem>
											)}
										/>
									</div>
								</div>
								<div className="flex flex-col w-1/2 space-y-2">

									<FormField
										control={form.control}
										name="instructions"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Specific Instructions</FormLabel>
												<FormControl>
													<Textarea
														id="textInput"
														className="min-h-[11rem] w-full bg-input text-foreground border border-border resize-none"
														{...field}
													/>
												</FormControl>
											</FormItem>
										)}
									/>
								</div>
							</div>
							<div className="flex flex-row h-1/5 justify-end">
								<Button type="submit">Submit</Button>
							</div>
						</form>
					</Form>
				</div>
			</CardContent>
		</Card>


	);
};

export default GeneralInstructions;

