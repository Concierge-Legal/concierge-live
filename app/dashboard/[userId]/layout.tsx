import Link from 'next/link'
import TopBar from '@/app/components/dashboard/TopBar'
import NavigationSidebar from '@/app/components/dashboard/NavigationSidebar'


export default function Layout({ children, params }: { 
  children: React.ReactNode,
  params: { userId: string }
}) {
  return (
    <>
      <div className="flex h-screen">
      <NavigationSidebar activeMenu={'Home'} userId={params.userId} />
      <div className="flex flex-col flex-1">
        <div>{children}</div>
      </div>
    </div>
      
    </>
  );
}