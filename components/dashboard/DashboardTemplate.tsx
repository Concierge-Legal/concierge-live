import Link from 'next/link';
import Image from 'next/image';
import { LogoutButton } from '../ui/authButtons/AuthButton';
import { HomeIcon } from '@heroicons/react/24/solid';
import { Separator } from '../ui/separator';
import { HeartIcon } from '@heroicons/react/24/solid';
import { ChartBarIcon } from '@heroicons/react/24/solid';
import { ScissorsIcon } from '@heroicons/react/24/solid';
import { BanknotesIcon } from '@heroicons/react/24/solid';
import { BuildingLibraryIcon } from '@heroicons/react/24/solid';
import { AcademicCapIcon } from '@heroicons/react/24/solid';
import { CogIcon } from '@heroicons/react/24/solid';
import { UserGroupIcon } from '@heroicons/react/24/solid';


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
						<BehaviorSection organizationId={orgData.id} />
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


				<div className="overflow-y-auto h-full"> {/* Padding top equal to the header height */}
					{children} {/* Main content scrolls */}
				</div>
			</div>
		</div>
	);
};

export default DashboardTemplate;



const OrganizationSection: React.FC<{ organizationId: string; }> = ({ organizationId }) => {

	return (
		<div>
			<button className="flex pl-2 items-center w-full py-2 text-sm hover:bg-accent focus:outline-none">
				<BuildingLibraryIcon className="h-5 w-5 mr-2" />
				<Link href={`/dashboard/${organizationId}/organization`} className="">
					Organization Knowledge
				</Link>
			</button>
		</div>
	);
};
const NetworkSection: React.FC<{ organizationId: string; }> = ({ organizationId }) => {

	return (
		<div>
			<button className="flex pl-2 items-center w-full py-2 text-sm hover:bg-accent focus:outline-none">
				<UserGroupIcon className="h-5 w-5 mr-2" />
				<Link href={`/dashboard/${organizationId}/network`} className="">
					Network Directory
				</Link>
			</button>
		</div>
	);
};


const AnalyticsSection: React.FC<{ organizationId: string; }> = ({ organizationId }) => {

	return (
		<div>
			<button className="flex pl-2 items-center w-full py-2 text-sm hover:bg-accent focus:outline-none">
				<ChartBarIcon className="h-5 w-5 mr-2" />
				<Link href={`/dashboard/${organizationId}/analytics#userEngagement`} className="">
					Analytics
				</Link>
			</button>
		</div>
	);
};




const AppearanceSection: React.FC<{ organizationId: string; }> = ({ organizationId }) => {

	return (
		<div>
			<Link href={`/dashboard/${organizationId}/appearance`} className="flex pl-2 items-center w-full py-2 text-sm hover:bg-accent focus:outline-none">
				<ScissorsIcon className="h-5 w-5 mr-2" /> Appearance
			</Link>
		</div>
	);
};





const BillingSection: React.FC<{ organizationId: string; }> = ({ organizationId }) => {

	return (
		<div>
			<Link href={`/dashboard/${organizationId}/usage`} className="flex pl-2 items-center w-full py-2 text-sm hover:bg-accent focus:outline-none">
				<BanknotesIcon className="h-5 w-5 mr-2" /> Usage and Billing
			</Link>
		</div>
	);
};











const BehaviorSection: React.FC<{ organizationId: string; }> = ({ organizationId }) => {


	return (
		<div>
			<button className="flex pl-2 items-center w-full py-2 text-sm hover:bg-accent focus:outline-none" >
				<AcademicCapIcon className="h-5 w-5 mr-2" /> Behavior Training

			</button>

			<div className="pl-8">
				<Link href={`/dashboard/${organizationId}/behavior#greetings`} className={`flex items-center py-2 text-sm hover:bg-accent `}>
					Greetings
				</Link>
				<Link href={`/dashboard/${organizationId}/behavior#greetings`} className="flex items-center py-2 text-sm hover:bg-accent">
					Tool Use
				</Link>
				<Link href={`/dashboard/${organizationId}/behavior#greetings`} className="flex items-center py-2 text-sm hover:bg-accent">
					Escalation Protocol
				</Link>

			</div>

		</div>
	);
};




const SettingsSection: React.FC<{ organizationId: string; }> = ({ organizationId }) => {


	return (
		<div>
			<Link href={`/dashboard/${organizationId}/settings`} className="flex pl-2 items-center w-full py-2 text-sm hover:bg-accent focus:outline-none">
				<CogIcon className="h-5 w-5 mr-2" /> Settings
			</Link>
		</div>
	);
};

