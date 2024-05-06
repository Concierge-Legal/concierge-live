

  import React, { useState } from 'react';
  import { createClient } from "@/utils/supabase/server";
  import NavigationSidebar from '@/app/components/dashboard/NavigationSidebar';
  import MainContent from '@/app/components/dashboard/MainContent';
  import TopBar from '@/app/components/dashboard/TopBar';
  
  export default async function Dashboard({ params }: { params: { user: string } }) {
    console.log(`=== Loading Dashboard Page ===\nParams:${params}`)
    const supabase = createClient();
  
    const [openMenu, setOpenMenu] = useState<string | null>(null);
  
    const {
      data: { user },
    } = await supabase.auth.getUser();
    
    if (!user) {
      //return redirect("/login");
    }
  
    return (
      <div className="flex h-screen">
        <NavigationSidebar openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <div className="flex flex-col flex-1">
          <TopBar />
          <MainContent />
        </div>
      </div >
    );
  };
  