import { createClient } from "@/lib/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function DashboardSubpage({ params }: { params: { organizationId: string } }) {
	const supabase = createClient()
	const { data, error } = await supabase.auth.getUser()
	// Check the user is authenticated
	if (error || !data?.user) {
		redirect('/login')
	}
	// Check the user is authorized
	if (data.user.app_metadata.organization_id !== params.organizationId) {
		redirect('/login')
	}
    return (
        <div>
            <h1>Dashboard Subpage</h1>
            <p>Add content here!</p>
			<div id="organization"><p>Organization</p></div>
			<div id="profile"><p>Profile</p></div>
			<div id="users"><p>User Management</p></div>
			<div id="security"><p>Security</p></div>
        </div>
        
    )
}    