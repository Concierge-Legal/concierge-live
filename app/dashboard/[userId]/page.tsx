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

  const { data: { user } } = await supabase.auth.getUser()

  //console.log(supabase)
  
  console.log(user)
  
  const { userId } = params;
  console.log(`Inside Dashboard. UserId = ${userId}`)
  return (
    <h1>Dashboard home</h1>
  );
}

