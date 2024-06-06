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
import { createClient } from '@/lib/utils/supabase/server';



const DashboardTemplate: React.FC<{ orgData: {id: string, fullName: string}, children: React.ReactNode }> = ({ orgData, children }) => {
  if (!orgData.id) {
    return <p>Unauthorized...</p>; // or any other fallback UI
  }
 


  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* Sidebar navigation */}
      <div className="flex flex-col h-full w-64 bg-card text-foreground p-4 justify-between fixed inset-y-0 border-r border-black">
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
      <div className="flex flex-col flex-1 ml-64"> {/* Margin left equal to the sidebar width */}
        <header className="w-full h-16 bg-card text-foreground flex items-center px-4 fixed top-0 right-0 left-64 z-10 border-b border-black"> {/* Ensures header is fixed */}
          <div className="text-lg font-bold">
            Placeholder Header
          </div>
		  <div>
			{`${orgData.fullName} Admin Dashboard`}
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
