import Link from 'next/link';
import { LogoutButton } from '../imported/AuthButton';
import { useState } from 'react';
import { HomeIcon } from '@heroicons/react/24/solid';
import AnalyticsSection from '@/components/dashboard/sidebar/analyticsSection';
import AppearanceSection from '@/components/dashboard/sidebar/appearanceSection';
import BehaviorSection from '@/components/dashboard/sidebar/behaviorSection';
import BillingSection from '@/components/dashboard/sidebar/billingSection';
import KnowledgeSection from '@/components/dashboard/sidebar/knowledgeSection';
import SettingsSection from '@/components/dashboard/sidebar/settingsSection';
import { Separator } from '../ui/separator';
import Image from 'next/image';


const NavigationSidebar: React.FC<{ userId: string }> = ({ userId }) => {

	return (
		<div className="flex flex-col h-full min-h-screen w-64 bg-card text-foreground p-4 justify-between">
			<div>
				<Link href="/" className="flex items-center justify-center space-x-2 p-2">
					<Image src="/logo/blacklogo.png" alt="Logo" width={40} height={40} className="rounded-full" />
					<span className="font-bold text-lg">Concierge</span>
				</Link>
				<Separator />
				<nav className="overflow-y-auto">
					<Link href={`/dashboard/${userId}`} className={`flex items-center py-2  pl-2 text-sm hover:bg-accent `}>
						<HomeIcon className="h-5 w-5 mr-2" /> Home
					</Link>
					{/* Add other section components here */}
					<KnowledgeSection userId={userId} />
					<BehaviorSection userId={userId} />

					<AnalyticsSection userId={userId} />
					<AppearanceSection userId={userId} />
					
					<BillingSection userId={userId}  />
					<SettingsSection userId={userId} />
				</nav>
			</div>

			<div className="flex flex-col justify-center space-x-2 p-2 space-y-4">
				<Separator />
				<LogoutButton />
			</div>
		</div>

	);
};

export default NavigationSidebar;
