// Import necessary functions and components
import { CustomBarChart, CustomLineChart, CustomPieChart } from '@/components/dashboard/customCharts';
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
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BanknotesIcon } from '@heroicons/react/24/solid';
import {
	ListFilter,
	MoreVertical
} from "lucide-react";


import { Separator } from "@/components/ui/separator";

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@/components/ui/tabs";

const dailyConversationData = [
	{ day: 'Mon', conversations: 120 },
	{ day: 'Tue', conversations: 230 },
	{ day: 'Wed', conversations: 180 },
	{ day: 'Thu', conversations: 210 },
	{ day: 'Fri', conversations: 240 },
	{ day: 'Sat', conversations: 100 },
	{ day: 'Sun', conversations: 90 },
];
const customerSatisfactionData = [
	{ category: 'Billing', value: 300, satisfaction: 'High' },
	{ category: 'Technical Support', value: 250, satisfaction: 'Medium' },
	{ category: 'Product Information', value: 150, satisfaction: 'Low' },
	{ category: 'General Queries', value: 200, satisfaction: 'High' },
];
const responseTimesData = [
	{ category: 'Billing', time: 2.63 },
	{ category: 'Technical Support', time: 5.24 },
	{ category: 'Product Information', time: 3.2 },
	{ category: 'General Queries', time: 1.9 },
];

export default async function Dashboard({ params }: { params: { organizationId: string; }; }) {
	// For demo purposes, we'll skip authentication checks
	// const supabase = createClient()
	// const { data, error } = await supabase.auth.getUser()
	// // Check the user is authenticated
	// if (error || !data?.user) {
	// 	redirect('/login')
	// }
	// // Check the user is authorized
	// if (data.user.app_metadata.organization_id !== params.organizationId) {
	// 	redirect('/login')
	// }

	return (
		<main className="grid flex-1 items-start gap-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
			<div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
				<div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 py-6">
					<Card className="sm:col-span-2">
						<CardHeader className="pb-3 px-4 pt-4">
							<CardTitle >Concierge Health</CardTitle>
							<CardDescription >
								Monitor system health at a glance.
							</CardDescription>
						</CardHeader>
						<CardContent className="px-4 py-2">
							<div className="grid grid-cols-2 gap-4">
								<div className="flex items-center justify-between px-3 py-2 rounded-lg border border-gray-300 bg-gray-50">
									<span className="text-gray-800 font-medium">Database</span>
									<span className="h-3 w-3 bg-green-500 rounded-full"></span>
								</div>
								<div className="flex items-center justify-between px-3 py-2 rounded-lg border border-gray-300 bg-gray-50">
									<span className="text-gray-800 font-medium">Storage</span>
									<span className="h-3 w-3 bg-green-500 rounded-full"></span>
								</div>
								<div className="flex items-center justify-between px-3 py-2 rounded-lg border border-gray-300 bg-gray-50">
									<span className="text-gray-800 font-medium">API</span>
									<span className="h-3 w-3 bg-green-500 rounded-full"></span>
								</div>
								<div className="flex items-center justify-between px-3 py-2 rounded-lg border border-gray-300 bg-gray-50">
									<span className="text-gray-800 font-medium">Frontend</span>
									<span className="h-3 w-3 bg-green-500 rounded-full"></span>
								</div>
							</div>
						</CardContent>


					</Card>

					<Card x-chunk="dashboard-05-chunk-1">
						<CardHeader>
							<CardTitle className="text-sm">Conversations this Week</CardTitle>

						</CardHeader>
						<CardContent>
							<div className="items-center justify-between h-full w-full">
								<div className="text-4xl">67
								</div>
								<div>
									+25% from last week
								</div>
							</div>

						</CardContent>

					</Card>
					<Card x-chunk="dashboard-05-chunk-2">
						<CardHeader className="pb-2">
							<CardDescription>Conversations This Month</CardDescription>
							<CardTitle className="text-4xl">202</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="text-xs text-muted-foreground">
								+10% from last month
							</div>
						</CardContent>

					</Card>
				</div>
				<Tabs defaultValue="high" activationMode="manual">
					<div className="flex items-center">
						<TabsList>
							<TabsTrigger value="high">High</TabsTrigger>
							<TabsTrigger value="medium" >Medium</TabsTrigger>
							<TabsTrigger value="low" >Low</TabsTrigger>
						</TabsList>
						<div className="ml-auto flex items-center gap-2">
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button
										variant="outline"
										size="sm"
										className="h-7 gap-1 text-sm"
									>
										<ListFilter className="h-3.5 w-3.5" />
										<span className="sr-only sm:not-sr-only">Filter</span>
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent align="end">
									<DropdownMenuLabel>Filter by</DropdownMenuLabel>
									<DropdownMenuSeparator />
									<DropdownMenuCheckboxItem checked>
										Needs Human Oversight
									</DropdownMenuCheckboxItem>
									<DropdownMenuCheckboxItem>
										Everything is on Fire
									</DropdownMenuCheckboxItem>
									<DropdownMenuCheckboxItem>
										I dont know what to put here
									</DropdownMenuCheckboxItem>
								</DropdownMenuContent>
							</DropdownMenu>
							{/* <Button
								size="sm"
								variant="outline"
								className="h-7 gap-1 text-sm"
							>
								<File className="h-3.5 w-3.5" />
								<span className="sr-only sm:not-sr-only">Export</span>
							</Button> */}
						</div>
					</div>
					<TabsContent value="high">
						<Card x-chunk="dashboard-05-chunk-3">
							<CardHeader className="px-7 w-full flex flex-col">
								<div className="flex flex-row justify-between items-center mb-2">
									<CardTitle className="flex-grow">High Priority Alerts</CardTitle>
									<label className="bg-red-500 text-white h-11 rounded-md px-8 flex items-center justify-center">Immediate Action Required</label>
								</div>
								<CardDescription className="text-sm text-gray-600">
									Recent conversations which require immediate human action.
								</CardDescription>
							</CardHeader>

							<CardContent>
								<Table>
									<TableHeader>
										<TableRow>
											<TableHead>Customer</TableHead>
											<TableHead className="hidden sm:table-cell">
												Escalation Type
											</TableHead>

											<TableHead className="hidden md:table-cell">
												Date
											</TableHead>
											<TableHead className="text-right">Problem Summary</TableHead>
										</TableRow>
									</TableHeader>
									{/* Please update the table body data to better represent AI customer service bot.*/}
									<TableBody>
										<TableRow>
											<TableCell>
												<div className="font-medium">Will Diamond</div>
												<div className="text-sm text-gray-500">
													best-ceo@recodify.com
												</div>
											</TableCell>
											<TableCell className="hidden sm:table-cell">
												Skill Issue
											</TableCell>
											<TableCell className="hidden md:table-cell">
												2024-05-30
											</TableCell>
											<TableCell className="text-right">
												Does not understand tailwind styling. Refuses to learn. Forced the Concierge Instance to do all frontend styling.
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>
												<div className="font-medium">Madeline Kaufman </div>
												<div className="text-sm text-gray-500">
													wills-caretaker@recodify.com
												</div>
											</TableCell>
											<TableCell className="hidden sm:table-cell">
												Complaint
											</TableCell>
											<TableCell className="hidden md:table-cell">
												2024-05-30
											</TableCell>
											<TableCell className="text-right">
												Hates the fact that Will is using ShadCN components everywhere. Secretly likes them, but is threatening to strike if the website &apos;looks too much like ShadCN&apos;
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>
												<div className="font-medium">Kyler Wandler </div>
												<div className="text-sm text-gray-500">
													goob-for-hire@recodify.com
												</div>
											</TableCell>
											<TableCell className="hidden sm:table-cell">
												High Usage Alert
											</TableCell>
											<TableCell className="hidden md:table-cell">
												2024-05-30
											</TableCell>
											<TableCell className="text-right">
												Is currently bankrupting Recodify with his Synthetic Data Creation API calls. Critically blocking synthetic data creation because it takes him 8 years to write a prompt.
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>
												<div className="font-medium">James Doe</div>
												<div className="text-sm text-gray-500">
													james.doe@example.com
												</div>
											</TableCell>
											<TableCell className="hidden sm:table-cell">
												Technical Issue
											</TableCell>
											<TableCell className="hidden md:table-cell">
												2024-05-30
											</TableCell>
											<TableCell className="text-right">
												Unresolved system error reported during transaction.
											</TableCell>
										</TableRow>
										<TableRow >
											<TableCell>
												<div className="font-medium">Anna Belle</div>
												<div className="text-sm text-gray-500">
													anna.belle@example.com
												</div>
											</TableCell>
											<TableCell className="hidden sm:table-cell">
												Payment Failure
											</TableCell>
											<TableCell className="hidden md:table-cell">
												2024-05-29
											</TableCell>
											<TableCell className="text-right">
												Multiple failed attempts to process payment.
											</TableCell>
										</TableRow>
										<TableRow >
											<TableCell>
												<div className="font-medium">Carlos Smith</div>
												<div className="text-sm text-gray-500">
													carlos.smith@example.com
												</div>
											</TableCell>
											<TableCell className="hidden sm:table-cell">
												Complaint
											</TableCell>
											<TableCell className="hidden md:table-cell">
												2024-05-28
											</TableCell>
											<TableCell className="text-right">
												Urgent complaint regarding service quality.
											</TableCell>
										</TableRow>
										<TableRow >
											<TableCell>
												<div className="font-medium">Ella Johnson</div>
												<div className="text-sm text-gray-500">
													ella.johnson@example.com
												</div>
											</TableCell>
											<TableCell className="hidden sm:table-cell">
												High Usage Alert
											</TableCell>
											<TableCell className="hidden md:table-cell">
												2024-05-27
											</TableCell>
											<TableCell className="text-right">
												Excessive API usage detected, potential breach.
											</TableCell>
										</TableRow>
									</TableBody>
								</Table>
							</CardContent>
						</Card>
					</TabsContent>
					<TabsContent value="medium">
						<Card x-chunk="dashboard-05-chunk-3">
							<CardHeader className="px-7">
								<div className="flex flex-row justify-between items-center mb-2">
									<CardTitle className="flex-grow">Medium Priority Alerts</CardTitle>
									<label className="bg-yellow-500 text-white h-11 rounded-md px-8 flex items-center justify-center">Response Recommended</label>
								</div>
								<CardDescription>
									Recent conversations which require a human response.
								</CardDescription>
							</CardHeader>
							<CardContent>
								<Table>
									<TableHeader>
										<TableRow>
											<TableHead>Customer</TableHead>
											<TableHead className="hidden sm:table-cell">
												Escalation Type
											</TableHead>

											<TableHead className="hidden md:table-cell">
												Date
											</TableHead>
											<TableHead className="text-right">Problem Summary</TableHead>
										</TableRow>
									</TableHeader>
									{/* Please update the table body data to better represent AI customer service bot.*/}
									<TableBody>
										<TableRow>
											<TableCell>
												<div className="font-medium">Sophia Turner</div>
												<div className="text-sm text-gray-500">
													sophia.turner@example.com
												</div>
											</TableCell>
											<TableCell className="hidden sm:table-cell">
												Account Issues
											</TableCell>
											<TableCell className="hidden md:table-cell">
												2024-05-26
											</TableCell>
											<TableCell className="text-right">
												Difficulty accessing account features, requires verification.
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>
												<div className="font-medium">Mason Ray</div>
												<div className="text-sm text-gray-500">
													mason.ray@example.com
												</div>
											</TableCell>
											<TableCell className="hidden sm:table-cell">
												Billing Inquiry
											</TableCell>
											<TableCell className="hidden md:table-cell">
												2024-05-25
											</TableCell>
											<TableCell className="text-right">
												Questions about recent invoice discrepancies.
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>
												<div className="font-medium">Lucas Grey</div>
												<div className="text-sm text-gray-500">
													lucas.grey@example.com
												</div>
											</TableCell>
											<TableCell className="hidden sm:table-cell">
												Service Delay
											</TableCell>
											<TableCell className="hidden md:table-cell">
												2024-05-24
											</TableCell>
											<TableCell className="text-right">
												Delayed response from legal team on ongoing case.
											</TableCell>
										</TableRow>
									</TableBody>

								</Table>
							</CardContent>
						</Card>
					</TabsContent>
					<TabsContent value="low">
						<Card x-chunk="dashboard-05-chunk-3">
							<CardHeader className="px-7">
								<div className="flex flex-row justify-between items-center mb-2">
									<CardTitle className="flex-grow">Low Priority Alerts</CardTitle>
									<label className="bg-green-500 text-white h-11 rounded-md px-8 flex items-center justify-center">Response Optional</label>
								</div>
								<CardDescription>
									Recent conversations which might require a response.
								</CardDescription>
							</CardHeader>
							<CardContent>
								<Table>
									<TableHeader>
										<TableRow>
											<TableHead>Customer</TableHead>
											<TableHead className="hidden sm:table-cell">
												Escalation Type
											</TableHead>

											<TableHead className="hidden md:table-cell">
												Date
											</TableHead>
											<TableHead className="text-right">Problem Summary</TableHead>
										</TableRow>
									</TableHeader>
									{/* Please update the table body data to better represent AI customer service bot.*/}
									<TableBody>
										<TableRow>
											<TableCell>
												<div className="font-medium">Eva Long</div>
												<div className="text-sm text-gray-500">
													eva.long@example.com
												</div>
											</TableCell>
											<TableCell className="hidden sm:table-cell">
												General Inquiry
											</TableCell>
											<TableCell className="hidden md:table-cell">
												2024-05-23
											</TableCell>
											<TableCell className="text-right">
												Request for information on additional services.
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>
												<div className="font-medium">Jack Kline</div>
												<div className="text-sm text-gray-500">
													jack.kline@example.com
												</div>
											</TableCell>
											<TableCell className="hidden sm:table-cell">
												Feedback
											</TableCell>
											<TableCell className="hidden md:table-cell">
												2024-05-22
											</TableCell>
											<TableCell className="text-right">
												Submitted feedback on the user interface of the platform.
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>
												<div className="font-medium">Amelia Pond</div>
												<div className="text-sm text-gray-500">
													amelia.pond@example.com
												</div>
											</TableCell>
											<TableCell className="hidden sm:table-cell">
												Documentation Request
											</TableCell>
											<TableCell className="hidden md:table-cell">
												2024-05-21
											</TableCell>
											<TableCell className="text-right">
												Asked for additional documentation on data security practices.
											</TableCell>
										</TableRow>
									</TableBody>

								</Table>
							</CardContent>
						</Card>
					</TabsContent>
				</Tabs>
			</div>
			<div className="py-6">
				<Card
					className="overflow-hidden"
				>
					<CardHeader className="flex flex-row items-start bg-muted/50">
						<div className="grid gap-0.5">
							<CardTitle className="group flex items-center gap-2">
								Executive Overview

							</CardTitle>
							<CardDescription><time dateTime="2024-05-25">May 25, 2024</time></CardDescription>
						</div>
						<div className="ml-auto flex items-center gap-1">

							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button size="icon" variant="outline" className="h-8 w-8">
										<MoreVertical className="h-3.5 w-3.5" />
										<span className="sr-only">More</span>
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent align="end">
									<DropdownMenuItem>Print</DropdownMenuItem>
									<DropdownMenuItem>Export</DropdownMenuItem>
									<DropdownMenuSeparator />
									<DropdownMenuItem>Close</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						</div>
					</CardHeader>
					<CardContent className="p-6">
						<div className="grid gap-3">
							<div className="flex flex-row justify-between">
								<div className="font-semibold">Usage Details</div>
								<Button className="h-8 gap-1">
									<BanknotesIcon className="h-3.5 w-3.5" />
									<span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
										Go To Billing
									</span>
								</Button>
							</div>

							<ul className="grid gap-3">
								<li className="flex items-center justify-between">
									<span className="text-muted-foreground">
										Conversations x <span>21</span>
									</span>
									<span>$25.00</span>
								</li>
								<li className="flex items-center justify-between">
									<span className="text-muted-foreground">
										API Overrage x <span>1</span>
									</span>
									<span>$49.00</span>
								</li>
							</ul>
						</div>
						<Separator className="my-2" />
						<div>

							<div className="flex flex-col items-center justify-center">
								{/* <div className="font-semibold">Key Analytics</div> */}
								<Carousel className="w-full flex flex-col items-center justify-center">
									<CarouselContent className="w-full">
										<CarouselItem className="flex justify-center items-center">

											<CustomLineChart
												data={dailyConversationData}
												title="Daily Conversation Volume"
												dataKeyX="day"
												dataKeyY="conversations"
											/>

										</CarouselItem>
										<CarouselItem className="flex justify-center items-center">
											<CustomPieChart
												data={customerSatisfactionData}
												title="Customer Satisfaction by Category"
												dataKey="value"
												nameKey="category"
											/>
										</CarouselItem>
										<CarouselItem className="flex justify-center items-center">
											<CustomBarChart
												data={responseTimesData}
												title="Average Query Response Times"
												dataKeyX="category"
												dataKeyY="time"
											/>
										</CarouselItem>

									</CarouselContent>
									<CarouselPrevious></CarouselPrevious>
									<CarouselNext></CarouselNext>


								</Carousel>


							</div>





						</div>
						<Separator className="my-2" />
						<div className="grid gap-3">
							<div className="font-semibold">Key Metrics</div>
							<div>Fake Metric 1: 20</div>
							<div>Fake Metric 1: 20</div>
							<div>Fake Metric 1: 20</div>
							<div>Fake Metric 1: 20</div>


						</div>

					</CardContent>
					<CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
						<div className="text-xs text-muted-foreground">
							Updated <time dateTime="2024-05-25">May 25, 2024</time>
						</div>

					</CardFooter>
				</Card>
			</div>
		</main>
	);
}
