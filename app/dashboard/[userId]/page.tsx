
// Import necessary functions and components
import React from 'react';
import { createClient } from "@/utils/supabase/server";
import { CustomLineChart } from '@/components/charts/lineChart';
import { CustomPieChart } from '@/components/charts/pieChart';
import { CustomBarChart } from '@/components/charts/barChart';
import { AlertComponent } from '@/components/dashboard/alert';

const dailyConversationData = [
  { day: 'Mon', conversations: 120 },
  { day: 'Tue', conversations: 230 },
  { day: 'Wed', conversations: 180 },
  { day: 'Thu', conversations: 210 },
  { day: 'Fri', conversations: 240 },
  { day: 'Sat', conversations: 100 },
  { day: 'Sun', conversations: 90 },
];
const customerSatisfactionData = [
  { category: 'Billing', value: 300, satisfaction: 'High' },
  { category: 'Technical Support', value: 250, satisfaction: 'Medium' },
  { category: 'Product Information', value: 150, satisfaction: 'Low' },
  { category: 'General Queries', value: 200, satisfaction: 'High' },
];
const responseTimesData = [
  { category: 'Billing', time: 2.63 },
  { category: 'Technical Support', time: 5.24 },
  { category: 'Product Information', time: 3.2 },
  { category: 'General Queries', time: 1.9 },
];

export default async function Dashboard({ params }: { params: { userId: string; }; }) {


  const supabase = createClient();

  const { data: { user }, error } = await supabase.auth.getUser();

  const { userId } = params;
  console.log(`Inside Dashboard. UserId = ${userId}`);
  

  return (
    <div className="min-h-screen bg-background px-8 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="bg-card text-foreground p-8 rounded-lg shadow-lg mb-12 text-center">
          <h1 className="text-5xl font-bold">Concierge Dashboard</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
          <div className="bg-card shadow-lg rounded-lg p-8 text-center">
            <h3 className="text-xl font-semibold mb-2">Total Users</h3>
            <p className="text-4xl font-bold">69,420</p>
          </div>
          <div className="bg-card shadow-lg rounded-lg p-8 text-center">
            <h3 className="text-xl font-semibold mb-2">Peak Usage Time</h3>
            <p className="text-4xl font-bold">2 PM - 3 PM</p>
          </div>
          <div className="bg-card shadow-lg rounded-lg p-8 text-center">
            <h3 className="text-xl font-semibold mb-2">Chatbot Health</h3>
            <p className="text-4xl font-bold">Activated AF</p>
          </div>
        </div>

        {/* Dynamic Alert */}
        <AlertComponent message="There has been a 25% increase in conversations last week. Check your resource usage!" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <CustomLineChart
            data={dailyConversationData}
            title="Daily Conversation Volume"
            dataKeyX="day"
            dataKeyY="conversations"
          />
          <CustomPieChart
            data={customerSatisfactionData}
            title="Customer Satisfaction by Category"
            dataKey="value"
            nameKey="category"
          />
          <CustomBarChart
            data={responseTimesData}
            title="Average Query Response Times"
            dataKeyX="category"
            dataKeyY="time"
          />
        </div>

        <div className="bg-card shadow-lg rounded-lg p-8 text-center">
          <h2 className="text-xl font-medium text-foreground mb-4">Feature Utilization</h2>
          <CustomBarChart
            data={[{ feature: 'Billing', usage: 80 }, { feature: 'Support', usage: 50 }]}
            title="Feature Usage"
            dataKeyX="feature"
            dataKeyY="usage"
          />
        </div>
      </div>
    </div>
  );
}
