import Link from 'next/link';
import Image from 'next/image';
import { LogoutButton } from '../ui/authButtons/AuthButton';
import { HomeIcon } from '@heroicons/react/24/solid';
import {
	AnalyticsSection,
	AppearanceSection,
	TrainingSection,
	BillingSection,
	NetworkSection,
	OrganizationSection,
	SettingsSection
} from '@/components/dashboard/sidebarSections';
import { Separator } from '../ui/separator';
import { HeartIcon } from '@heroicons/react/24/solid';



const DashboardTemplate: React.FC<{ orgData: { id: string, fullName: string; }, children: React.ReactNode; }> = ({ orgData, children }) => {
	if (!orgData.id) {
		return <p>Unauthorized...</p>; // or any other fallback UI
	}



	return (
		<div className="flex h-screen w-full overflow-hidden">
			{/* Sidebar navigation */}
			<div className="flex flex-col h-full w-64 bg-card text-foreground p-4 justify-between border-r border-black">
				<div>
					<Link href="/" className="flex items-center justify-center space-x-2 p-2">
						<Image src="/logo/blacklogo.png" alt="Logo" width={40} height={40} className="rounded-full" />
						<span className="font-bold text-lg">Concierge</span>
					</Link>
					<Separator />
					<nav className="overflow-y-auto">
						<Link href={`/dashboard/${orgData.id}`} className="flex items-center py-2 pl-2 text-sm hover:bg-accent">
							<HomeIcon className="h-5 w-5 mr-2" /> Home
						</Link>
						{/* Other section components */}
						<NetworkSection organizationId={orgData.id} />
						<OrganizationSection organizationId={orgData.id} />
						<TrainingSection organizationId={orgData.id} />
						<AnalyticsSection organizationId={orgData.id} />
						<AppearanceSection organizationId={orgData.id} />
						<BillingSection organizationId={orgData.id} />
						<SettingsSection organizationId={orgData.id} />
					</nav>
				</div>
				<div className="flex flex-col justify-center space-x-2 p-2 space-y-4">
					<Separator />
					<LogoutButton />
				</div>
			</div>

			{/* Header and main content */}
			<div className="flex flex-col flex-1"> {/* Margin left equal to the sidebar width */}
				<header className="h-16 bg-card text-foreground flex items-center justify-between px-4 top-0 right-0 border-b border-black"> {/* Ensures header is fixed and items are evenly spaced */}
					<div className="flex items-center space-x-4">
						<div className="text-xl font-semibold">
							{orgData.fullName} {/* Organization's full name */}
						</div>
					</div>
					<div className="flex items-center space-x-4"> {/* Center items */}
						<span className="text-sm font-medium">Welcome, Admin!</span>
						<HeartIcon className="h-5 w-5" /> {/* Ensure proper alignment with text */}
					</div>
					<div className="text-xl font-semibold">
						Admin Dashboard {/* Dashboard label */}
					</div>
				</header>


				<div className="pt-16 overflow-y-auto h-full"> {/* Padding top equal to the header height */}
					{children} {/* Main content scrolls */}
				</div>
			</div>
		</div>
	);
};

export default DashboardTemplate;
