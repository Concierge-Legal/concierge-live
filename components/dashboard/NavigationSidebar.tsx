import Link from 'next/link';
import AuthButton from '../imported/AuthButton';
import { HomeIcon, ChartBarIcon, CogIcon, EyeIcon, AcademicCapIcon, BookOpenIcon, WrenchIcon } from '@heroicons/react/24/solid';

interface NavigationSidebarProps {
  activeMenu: string;
  userId: string;
}

const NavigationSidebar: React.FC<NavigationSidebarProps> = ({ activeMenu, userId }) => {
  return (
    <div className="h-full min-h-screen w-64 bg-card text-foreground flex flex-col">
      <div className="p-4">
        <Link href={`/dashboard/${userId}`} className={`flex items-center py-2 text-sm hover:bg-accent ${activeMenu === 'home' ? 'bg-accent' : ''}`}>
          <HomeIcon className="h-5 w-5 mr-2" /> Home
        </Link>
        <Link href={`/dashboard/${userId}/analytics`} className={`flex items-center py-2 text-sm hover:bg-accent ${activeMenu === 'analytics' ? 'bg-accent' : ''}`}>
          <ChartBarIcon className="h-5 w-5 mr-2" /> Analytics
        </Link>
        <Link href={`/dashboard/${userId}/usage`} className={`flex items-center py-2 text-sm hover:bg-accent ${activeMenu === 'usage' ? 'bg-accent' : ''}`}>
          <CogIcon className="h-5 w-5 mr-2" /> Usage
        </Link>
        <Link href={`/dashboard/${userId}/settings`} className={`flex items-center py-2 text-sm hover:bg-accent ${activeMenu === 'settings' ? 'bg-accent' : ''}`}>
          <EyeIcon className="h-5 w-5 mr-2" /> Settings
        </Link>
        <Link href={`/dashboard/${userId}/appearance`} className={`flex items-center py-2 text-sm hover:bg-accent ${activeMenu === 'appearance' ? 'bg-accent' : ''}`}>
          <AcademicCapIcon className="h-5 w-5 mr-2" /> Appearance
        </Link>
        <Link href={`/dashboard/${userId}/training`} className={`flex items-center py-2 text-sm hover:bg-accent ${activeMenu === 'training' ? 'bg-accent' : ''}`}>
          <BookOpenIcon className="h-5 w-5 mr-2" /> Customer Service Training
        </Link>
        <Link href={`/dashboard/${userId}/knowledge`} className={`flex items-center py-2 text-sm hover:bg-accent ${activeMenu === 'knowledge' ? 'bg-accent' : ''}`}>
          <WrenchIcon className="h-5 w-5 mr-2" /> Content Upload / AI Knowledge
        </Link>
      </div>
      <div className="mt-auto p-4 border-t border-border">
        <AuthButton />
      </div>
    </div>
  );
};

export default NavigationSidebar;
