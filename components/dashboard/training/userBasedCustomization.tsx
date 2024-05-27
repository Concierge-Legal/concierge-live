
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

import { Switch } from "@/components/ui/switch";

const UserFormSchema = z.object({
	saveCustomerData: z.boolean().default(false).optional(),
	personalizeResponses: z.boolean().default(false).optional(),
	adaptiveLearning: z.boolean().default(false).optional(),
	enableClarifyingQuestions: z.boolean().default(false).optional(),
});


const UserBasedCustomization = () => {
	const userForm = useForm<z.infer<typeof UserFormSchema>>({
		resolver: zodResolver(UserFormSchema),
	});



	const submitUserForm = (data: z.infer<typeof UserFormSchema>) => {
		// Placeholder logic for now, will hook up to database later.
		// { boolean, boolean, boolean, boolean }
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
		<Card className="shadow rounded-lg">
			<CardHeader className="px-5 py-3 border-b">
				<CardTitle className="text-lg font-semibold">User Based Customization</CardTitle>

			</CardHeader>
			<CardContent className="px-5 py-4">
				<Form {...userForm}>
					<form onSubmit={userForm.handleSubmit(submitUserForm)} className="w-full space-y-6">
						<div>
							<div className="space-y-2">
								<FormField
									control={userForm.control}
									name="saveCustomerData"
									render={({ field }) => (
										<FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
											<div className="space-y-0.5">
												<FormLabel className="text-base">
													Save Customer Data
												</FormLabel>
												<FormDescription>
													Store customer conversation data for analysis.
												</FormDescription>
											</div>
											<FormControl>
												<Switch
													checked={field.value}
													onCheckedChange={field.onChange}
												/>
											</FormControl>
										</FormItem>
									)}
								/>
								<FormField
									control={userForm.control}
									name="personalizeResponses"
									render={({ field }) => (
										<FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
											<div className="space-y-0.5">
												<FormLabel className="text-base">Personalize Response</FormLabel>
												<FormDescription>
													Personalize responses based on individual customers.
												</FormDescription>
											</div>
											<FormControl>
												<Switch
													checked={field.value}
													onCheckedChange={field.onChange}
													
												/>
											</FormControl>
										</FormItem>
									)}
								/>
								<FormField
									control={userForm.control}
									name="adaptiveLearning"
									render={({ field }) => (
										<FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
											<div className="space-y-0.5">
												<FormLabel className="text-base">Adaptive Learning</FormLabel>
												<FormDescription>
													Concierge will learn (This is a placeholder calm down Kyler)
												</FormDescription>
											</div>
											<FormControl>
												<Switch
													checked={field.value}
													onCheckedChange={field.onChange}
													
												/>
											</FormControl>
										</FormItem>
									)}
								/>
								<FormField
									control={userForm.control}
									name="enableClarifyingQuestions"
									render={({ field }) => (
										<FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
											<div className="space-y-0.5">
												<FormLabel className="text-base">Clarifying Questions</FormLabel>
												<FormDescription>
													Concierge will ask clarifying questions to users.
												</FormDescription>
											</div>
											<FormControl>
												<Switch
													checked={field.value}
													onCheckedChange={field.onChange}
													
												/>
											</FormControl>
										</FormItem>
									)}
								/>
							</div>
						</div>
						<Button type="submit">Submit</Button>
					</form>
				</Form>
				
			</CardContent>
		</Card>


	);
};

export default UserBasedCustomization;

