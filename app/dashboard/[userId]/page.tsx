// Import necessary functions and components
import React from 'react';
import { createClient } from "@/utils/supabase/server";
import NavigationSidebar from '@/app/components/dashboard/NavigationSidebar';
import MainContent from '@/app/components/dashboard/MainContent';
import TopBar from '@/app/components/dashboard/TopBar';
import { redirect } from 'next/navigation'
import { LineChart, PieChart, BarChart } from '@/app/components/charts';  // Assume these are chart components you have or will implement


// http://localhost:3000/dashboard/5ac8405f-9d01-489a-afd7-ca4fe33dd264
export default async function Dashboard({ params }: { params: { userId: string } }) {

  
  const supabase = createClient()

  const { data: { user } } = await supabase.auth.getUser()

  //console.log(supabase)
  
  console.log(user)
  
  const { userId } = params;
  console.log(`Inside Dashboard. UserId = ${userId}`)
  return (
    <div>
        <div className="flex flex-col space-y-4 p-4">
          <h1 className="text-xl font-semibold text-gray-800">Welcome to Your AI Chatbot Dashboard</h1>
          
          <div className="grid grid-rows-1 md:grid-rows-3 gap-4">
            <LineChart />
            <PieChart />
            <BarChart />
          </div>

          <div className="bg-white shadow rounded-lg p-4">
            <h2 className="text-lg font-medium text-gray-700">Recent Alerts and Notifications</h2>
            <ul className="list-disc list-inside">
              <li>High usage alert: 25% increase in conversations last week.</li>
              <li>New feature available: Custom Integrations!</li>
              <li>System maintenance scheduled for next Sunday at 2 AM.</li>
            </ul>
          </div>

          <div className="bg-white shadow rounded-lg p-4">
            <h2 className="text-lg font-medium text-gray-700">Quick Performance Stats</h2>
            <div className="flex justify-around">
              <div className="text-center">
                <p className="text-2xl font-bold">89%</p>
                <p className="text-sm text-gray-600">Customer Satisfaction</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">14,322</p>
                <p className="text-sm text-gray-600">Total Conversations</p>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  );
}