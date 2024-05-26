import Link from 'next/link';
import NavigationSidebar from '@/components/dashboard/NavigationSidebar';

export default function Layout({ children, params }: {
  children: React.ReactNode,
  params: { userId: string; };
}) {
  return (
    <div className="flex h-screen min-h-screen"> {/* Ensure the container fills the viewport height */}
      <NavigationSidebar userId={params.userId} />
      <div className="flex flex-col flex-1 overflow-y-auto"> {/* Scroll only the main content */}
       
        {children} {/* This is where the scrollable content will be */}
      </div>
    </div>
  );
}
