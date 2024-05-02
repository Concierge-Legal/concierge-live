import DeployButton from "@/app/components/imported/DeployButton";
import AuthButton from "@/app/components/imported/AuthButton";
import { createClient } from "@/utils/supabase/server";
// import FetchDataSteps from "@/components/tutorial/FetchDataSteps";
// import Header from "@/components/Header";
import { redirect } from "next/navigation";
import NavigationSidebar from '@/app/components/dashboard/NavigationSidebar';
import MainContent from '@/app/components/dashboard/MainContent';
import TopBar from '@/app/components/dashboard/TopBar';
import NavBar from '@/app/components/navBar';

export default async function Dashboard() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  console.log(user);
  if (!user) {
    console.log(`Not user is true!`);
    //return redirect("/login");
  }

  return (
    <div>
      <NavBar></NavBar>

      <div className="flex h-screen">
        <NavigationSidebar />
        <div className="flex flex-col flex-1">
          <TopBar />
          <MainContent />
        </div>
      </div>
    </div >
  );
};
