// Import necessary functions and components
import React from 'react';
import { createClient } from "@/utils/supabase/server";
import NavigationSidebar from '@/app/components/dashboard/NavigationSidebar';
import MainContent from '@/app/components/dashboard/MainContent';
import TopBar from '@/app/components/dashboard/TopBar';


export default function Dashboard({ params }: { params: { slug: string } }) {

  console.log(`Inside Dashboard. Params.slug = ${params.slug}`)
  return (
    <div className="flex h-screen">
      <h1>{`User Data for id: ${params.slug}`}</h1>
      <NavigationSidebar activeMenu={'Home'} />
      <div className="flex flex-col flex-1">
        <TopBar />
        <MainContent />
      </div>
    </div>
  );
}

