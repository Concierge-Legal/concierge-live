import Link from 'next/link';

interface NavigationSidebarProps {
  activeMenu: string;
  userId: string;
}

const NavigationSidebar: React.FC<NavigationSidebarProps> = ({ activeMenu, userId }) => {
  return (
    <div className="h-full w-64 bg-gray-800 text-white">
      <div className="flex flex-col p-4">
        <Link href={`/dashboard/${userId}`} className={`py-2 text-sm hover:bg-gray-700 ${activeMenu === 'home' ? 'bg-gray-700' : ''}`}>Home</Link>
        <Link href={`/dashboard/${userId}/analytics`} className={`py-2 text-sm hover:bg-gray-700 ${activeMenu === 'analytics' ? 'bg-gray-700' : ''}`}>Analytics</Link>
        <Link href={`/dashboard/${userId}/usage`} className={`py-2 text-sm hover:bg-gray-700 ${activeMenu === 'usage' ? 'bg-gray-700' : ''}`}>Usage</Link>
        <Link href={`/dashboard/${userId}/settings`} className={`py-2 text-sm hover:bg-gray-700 ${activeMenu === 'settings' ? 'bg-gray-700' : ''}`}>Settings</Link>
        <Link href={`/dashboard/${userId}/appearance`} className={`py-2 text-sm hover:bg-gray-700 ${activeMenu === 'appearance' ? 'bg-gray-700' : ''}`}>Appearance</Link>
        <Link href={`/dashboard/${userId}/training`} className={`py-2 text-sm hover:bg-gray-700 ${activeMenu === 'training' ? 'bg-gray-700' : ''}`}>Customer Service Training</Link>
        <Link href={`/dashboard/${userId}/knowledge`} className={`py-2 text-sm hover:bg-gray-700 ${activeMenu === 'knowledge' ? 'bg-gray-700' : ''}`}>Content Upload / AI Knowledge</Link>
        <Link href={`/dashboard/${userId}/maintenance`} className={`py-2 text-sm hover:bg-gray-700 ${activeMenu === 'maintenance' ? 'bg-gray-700' : ''}`}>Maintenance</Link>
      </div>
    </div>
  );
};

export default NavigationSidebar;
