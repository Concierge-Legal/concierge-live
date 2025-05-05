import DashboardTemplate from '@/components/dashboard/DashboardTemplate';
import { MOCK_ORGANIZATIONS } from '@/lib/utils/mock/data';
import { createClient } from '@/lib/utils/supabase/server';

async function getOrganizationData(organizationId: string) {
	try {
		const supabase = await createClient();

		const { data, error } = await supabase.from('organizations').select('*').eq('id', organizationId.trim()).single();
		if (error) {
			console.log("Could not fetch organization data in dashboard layout:", error.message);
			// Fallback to mock data for demo
			const mockOrg = MOCK_ORGANIZATIONS.find(org => org.id === 'demo-organization');
			return mockOrg?.fullname || 'Demo Organization';
		}
		if (!data) {
			console.log("Data is null!");
			// Fallback to mock data for demo
			const mockOrg = MOCK_ORGANIZATIONS.find(org => org.id === 'demo-organization');
			return mockOrg?.fullname || 'Demo Organization';
		}
		return data.fullname!;
	} catch (err) {
		console.error("Error in getOrganizationData:", err);
		// Fallback to mock data for demo
		const mockOrg = MOCK_ORGANIZATIONS.find(org => org.id === 'demo-organization');
		return mockOrg?.fullname || 'Demo Organization';
	}
}

export default async function Layout({ children, params }: {
	children: React.ReactNode,
	params: { organizationId: string; };
}) {
	// Default to demo organization if no ID is provided
	const orgId = params.organizationId || 'demo-organization';
	const orgName: string = await getOrganizationData(orgId);
	const orgData = { "id": orgId, "fullName": orgName };

	return (
		<div className="flex h-screen min-h-screen"> {/* Ensure the container fills the viewport height */}
			<DashboardTemplate orgData={orgData}>
				{children} {/* This is where the scrollable content will be */}
			</DashboardTemplate>
		</div>
	);
}
