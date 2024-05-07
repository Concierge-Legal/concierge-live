import Link from 'next/link';

interface NavigationSidebarProps {
  activeMenu: string;
}

const NavigationSidebar: React.FC<NavigationSidebarProps> = ({ activeMenu }) => {
  return (
    <div className="h-full w-64 bg-gray-800 text-white">
      <div className="flex flex-col p-4">
        {/* Links now directly use the className attribute */}
        <Link href="/dashboard?menu=home" className="py-2 text-sm hover:bg-gray-700">Home</Link>
        {activeMenu === 'home' && (
          <div className="pl-4">
            <Link href="#Overview" className="py-2 text-sm hover:bg-gray-700">Overview</Link>
            <Link href="#Stats" className="py-2 text-sm hover:bg-gray-700">Stats</Link>
          </div>
        )}

        <Link href="/dashboard?menu=usage" className="py-2 text-sm hover:bg-gray-700">Usage</Link>
        {activeMenu === 'usage' && (
          <div className="pl-4">
            <Link href="#Traffic Analysis" className="py-2 text-sm hover:bg-gray-700">Traffic Analysis</Link>
            <Link href="#Engagement Metrics" className="py-2 text-sm hover:bg-gray-700">Engagement Metrics</Link>
          </div>
        )}

        <Link href="/dashboard?menu=customization" className="py-2 text-sm hover:bg-gray-700">Customization</Link>
        {activeMenu === 'customization' && (
          <div className="pl-4">
            <Link href="#UI Themes" className="py-2 text-sm hover:bg-gray-700">UI Themes</Link>
          </div>
        )}

        <Link href="/dashboard?menu=fileManagement" className="py-2 text-sm hover:bg-gray-700">File Management</Link>
        {activeMenu === 'fileManagement' && (
          <div className="pl-4">
            <Link href="#Upload Files" className="py-2 text-sm hover:bg-gray-700">Upload Files</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavigationSidebar;
