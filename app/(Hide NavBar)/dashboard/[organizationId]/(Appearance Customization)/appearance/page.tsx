import { createClient } from "@/lib/utils/supabase/server";
import { redirect } from "next/navigation";
export default async function DashboardSubpage({ params }: { params: { organizationId: string; }; }) {
	//   User Engagement Analytics
	//   Response Metrics
	//   Customer Insights
	//   Resolution Metrics
	//   User Satisfaction
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
			<h1>Appearance Subpage</h1>
			<p>Add content here!</p>
			<div id="theme">
				<p>
					Theme Here
				</p>

			</div>
			<div id="color">
				<p> Color Here</p>
			</div>
			<div id="profilePicture">
				<p> Profile Picture Here</p>
			</div>


		</div>

	);
}    