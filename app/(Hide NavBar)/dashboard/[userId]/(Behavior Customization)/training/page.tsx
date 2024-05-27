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
import {
	ToggleGroup,
	ToggleGroupItem,
} from "@/components/ui/toggle-group";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/toolTip";
import DynamicResponseConfig from "@/components/dashboard/training/dynamicResponseConfig";
import BehaviorToggles from "@/components/dashboard/training/behaviorToggles";
import GeneralInstructions from "@/components/dashboard/training/generalInstructions";
import UserBasedCustomization from "@/components/dashboard/training/userBasedCustomization";

export default async function DashboardSubpage({ params }: { params: { userId: string; }; }) {
	return (
		<main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
			<div className="mx-auto grid flex-1 auto-rows-max gap-4">
				<div className="flex items-center gap-4">
					<h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
						Behavioral Training
					</h1>
					<Badge variant="outline" className="ml-auto sm:ml-0">
						Experimental
					</Badge>
					<div className="hidden items-center gap-2 md:ml-auto md:flex">
						<Button variant="outline" size="sm">
							Discard
						</Button>
						<Button size="sm">Save Changes</Button>
					</div>
				</div>
				<div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
					<div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
						<GeneralInstructions></GeneralInstructions>
						<DynamicResponseConfig></DynamicResponseConfig>
						
					</div>
					<div className="grid auto-rows-max items-start gap-4 lg:gap-8">
						<BehaviorToggles></BehaviorToggles>
						<UserBasedCustomization></UserBasedCustomization>
					</div>
				</div>
				<div className="flex items-center justify-center gap-2 md:hidden">
					<Button variant="outline" size="sm">
						Discard
					</Button>
					<Button size="sm">Save</Button>
				</div>
			</div>
		</main>

	);
}

