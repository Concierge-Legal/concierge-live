// Import necessary functions and components
import React from 'react';
import { createClient } from "@/utils/supabase/server";
import NavigationSidebar from '@/app/components/dashboard/NavigationSidebar';
import MainContent from '@/app/components/dashboard/MainContent';
import TopBar from '@/app/components/dashboard/TopBar';
import { redirect } from 'next/navigation'

// http://localhost:3000/dashboard/5ac8405f-9d01-489a-afd7-ca4fe33dd264
export default async function Dashboard({ params }: { params: { userId: string } }) {

  const supabase = createClient()
  //console.log(supabase)
  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    console.log(`Error: ${error}, ${data}`)
    redirect('/login')
  }
  const { userId } = params;
  console.log(`Inside Dashboard. UserId = ${userId}`)
  return (
    <div className="flex h-screen">
      <h1>{`User Data for id: ${userId}`}</h1>
      <NavigationSidebar activeMenu={'Home'} />
      <div className="flex flex-col flex-1">
        <TopBar />
        <MainContent />
      </div>
    </div>
  );
}

