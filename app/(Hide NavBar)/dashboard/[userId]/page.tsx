
// Import necessary functions and components
import React from 'react';
import { createClient } from "@/lib/utils/supabase/server";
import { CustomLineChart } from '@/components/charts/lineChart';
import { CustomPieChart } from '@/components/charts/pieChart';
import { CustomBarChart } from '@/components/charts/barChart';
import { AlertComponent } from '@/components/dashboard/alert';
import { BanknotesIcon } from '@heroicons/react/24/solid';
import Image from "next/image";
import Link from "next/link";
import {
	ChevronLeft,
	ChevronRight,
	Copy,
	CreditCard,
	File,
	Home,
	LineChart,
	ListFilter,
	MoreVertical,
	Package,
	Package2,
	PanelLeft,
	Search,
	Settings,
	ShoppingCart,
	Truck,
	Users2,
} from "lucide-react";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
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
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";


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
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/toolTip";

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

export default async function Dashboard({ params }: { params: { userId: string; }; }) {


	const supabase = createClient();

	const { data: { user }, error } = await supabase.auth.getUser();

	const { userId } = params;
	console.log(`Inside Dashboard. UserId = ${userId}`);

	return (
		<main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
			<div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
				<div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 py-6">
					<Card
						className="sm:col-span-2"
					>
						<CardHeader className="pb-3">
							<CardTitle>Concierge Health</CardTitle>
							<CardDescription className="max-w-lg text-balance leading-relaxed">
								Check the overall health of your Concierge Instance.
							</CardDescription>
						</CardHeader>
						<CardFooter>
							<Button>Check Outages</Button>
						</CardFooter>
					</Card>
					<Card x-chunk="dashboard-05-chunk-1">
						<CardHeader className="pb-2">
							<CardDescription>Conversations this Week</CardDescription>
							<CardTitle className="text-4xl">67</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="text-xs text-muted-foreground">
								+25% from last week
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
				<Tabs defaultValue="high">
					<div className="flex items-center">
						<TabsList>
							<TabsTrigger value="high">High</TabsTrigger>
							<TabsTrigger value="medium">Medium</TabsTrigger>
							<TabsTrigger value="low">Low</TabsTrigger>
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
										Needs Human
									</DropdownMenuCheckboxItem>
									<DropdownMenuCheckboxItem>
										Option 2
									</DropdownMenuCheckboxItem>
									<DropdownMenuCheckboxItem>
										Option 3
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
							<CardHeader className="px-7">
								<CardTitle>High Priority Alerts</CardTitle>
								<CardDescription>
									Recent conversations which require action.
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
										<TableRow className="bg-red-100">
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
										<TableRow className="bg-red-100">
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
										<TableRow className="bg-red-100">
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
										<TableRow className="bg-red-100">
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
								<CardTitle>Medium Priority Alerts</CardTitle>
								<CardDescription>
									Recent conversations which require action.
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
										<TableRow className="bg-yellow-100">
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
										<TableRow className="bg-yellow-100">
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
										<TableRow className="bg-yellow-100">
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
								<CardTitle>Low Priority Alerts</CardTitle>
								<CardDescription>
									Recent conversations which require action.
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
										<TableRow className="bg-green-100">
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
										<TableRow className="bg-green-100">
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
										<TableRow className="bg-green-100">
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
							<CardTitle className="group flex items-center gap-2 text-lg">
								Executive Overview

							</CardTitle>
							<CardDescription>Date: November 23, 2023</CardDescription>
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
					<CardContent className="p-6 text-sm">
						<div className="grid gap-3">
							<div>
								<div className="font-semibold">Usage Details</div>
								<Button size="sm" variant="outline" className="h-8 gap-1">
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
						<div className="grid gap 3">
							<Separator className="my-2" />
							<div className="grid gap-3">
								<div className="font-semibold">Key Analytics</div>
								<Carousel>
									<CarouselContent>
										<CarouselItem>

											<CustomLineChart
												data={dailyConversationData}
												title="Daily Conversation Volume"
												dataKeyX="day"
												dataKeyY="conversations"
											/>
											



										</CarouselItem>
										<CarouselItem>
											<CustomPieChart
												data={customerSatisfactionData}
												title="Customer Satisfaction by Category"
												dataKey="value"
												nameKey="category"
											/>
										</CarouselItem>
										<CarouselItem>
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

						<div className="grid gap-3">
							<div className="font-semibold">Key Metrics</div>


						</div>

					</CardContent>
					<CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
						<div className="text-xs text-muted-foreground">
							Updated <time dateTime="2023-11-23">November 23, 2023</time>
						</div>

					</CardFooter>
				</Card>
			</div>
		</main>
	);

	return (
		<div className="min-h-screen bg-background px-8 py-12">
			<div className="max-w-7xl mx-auto">
				<div className="bg-card text-foreground p-8 rounded-lg shadow-lg mb-12 text-center">
					<h1 className="text-5xl font-bold">Concierge Dashboard</h1>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
					<div className="bg-card shadow-lg rounded-lg p-8 text-center">
						<h3 className="text-xl font-semibold mb-2">Total Users</h3>
						<p className="text-4xl font-bold">69,420</p>
					</div>
					<div className="bg-card shadow-lg rounded-lg p-8 text-center">
						<h3 className="text-xl font-semibold mb-2">Peak Usage Time</h3>
						<p className="text-4xl font-bold">2 PM - 3 PM</p>
					</div>
					<div className="bg-card shadow-lg rounded-lg p-8 text-center">
						<h3 className="text-xl font-semibold mb-2">Chatbot Health</h3>
						<p className="text-4xl font-bold">Activated AF</p>
					</div>
				</div>

				{/* Dynamic Alert */}
				<AlertComponent message="There has been a 25% increase in conversations last week. Check your resource usage!" />

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
					<CustomLineChart
						data={dailyConversationData}
						title="Daily Conversation Volume"
						dataKeyX="day"
						dataKeyY="conversations"
					/>
					<CustomPieChart
						data={customerSatisfactionData}
						title="Customer Satisfaction by Category"
						dataKey="value"
						nameKey="category"
					/>
					<CustomBarChart
						data={responseTimesData}
						title="Average Query Response Times"
						dataKeyX="category"
						dataKeyY="time"
					/>
				</div>

				<div className="bg-card shadow-lg rounded-lg p-8 text-center">
					<h2 className="text-xl font-medium text-foreground mb-4">Feature Utilization</h2>
					<CustomBarChart
						data={[{ feature: 'Billing', usage: 80 }, { feature: 'Support', usage: 50 }]}
						title="Feature Usage"
						dataKeyX="feature"
						dataKeyY="usage"
					/>
				</div>
			</div>
		</div>
	);
}
