import UploadPicture from '@/components/dashboard/changeProfile';
import ChatWindow from '@/components/dashboard/changestoChat';
import { createClient } from "@/lib/utils/supabase/server";
import { redirect } from "next/navigation";


export default async function Appearance({ params }: { params: { organizationId: string; }; }) {
	const supabase = createClient()
	const { data, error } = await supabase.auth.getUser()
	console.log(JSON.stringify(data, null, 2))
	// Check the user is authenticated
	if (error || !data?.user) {
		redirect('/login')
	}
	// Check the user is authorized
	if (data.user.app_metadata.organization_id !== params.organizationId) {
		redirect('/login')
	}
    return (
		<div className="min-h-screen bg-gray-100">
	
		 
		<main className="container mx-auto p-8">
		  <h1 className="text-3xl font-bold mb-8">Concierge Appearance Settings</h1>
		  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
			<UploadPicture />
			<ChatWindow />
		  </div>
		</main>
	  </div>
        


	);

}    
