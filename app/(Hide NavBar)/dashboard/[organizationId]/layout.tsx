import DashboardTemplate from '@/components/dashboard/DashboardTemplate';
import { createClient } from '@/lib/utils/supabase/server';

async function getOrganizationData(organizationId: string) {
	const supabase = await createClient();
	const {data, error}= await supabase.from('organizations').select('fullname').eq('id', organizationId).limit(1)
	if(error) {
		throw new Error("Could not fetch organization data in dashboard layout!")
	}
	console.log(JSON.stringify(data, null, 2))
	return data[0].fullname;	
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
