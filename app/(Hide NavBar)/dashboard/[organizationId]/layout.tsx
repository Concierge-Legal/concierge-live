import DashboardTemplate from '@/components/dashboard/DashboardTemplate';
import { createClient } from '@/lib/utils/supabase/server';

async function getOrganizationData(organizationId: string) {
	const supabase = await createClient();
	
	//81c8f2cd-bd82-4089-9edc-0f59c818de65
	//81c8f2cd-bd82-4089-9edc-0f59c818de65
	const {data, error}= await supabase.from('organizations').select('*').eq('id', organizationId.trim()).single()
	if(error) {
		console.log("Could not fetch organization data in dashboard layout!")
		throw error;
	}
	if (!data) {
		console.log("Data is null!")
		throw new Error("data null in getOrganizationData")
	}
	console.log(JSON.stringify(data, null, 2))
	return data.fullname!;	
}

export default async function Layout({ children, params }: {
	children: React.ReactNode,
	params: { organizationId: string; }
}) {
	const orgName: string = await getOrganizationData(params.organizationId)
	const orgData = { "id": params.organizationId, "fullName": orgName}
	return (
		<div className="flex h-screen min-h-screen"> {/* Ensure the container fills the viewport height */}
			<DashboardTemplate orgData={orgData}>

				{children} {/* This is where the scrollable content will be */}
			</DashboardTemplate>
		</div>
	);
}
