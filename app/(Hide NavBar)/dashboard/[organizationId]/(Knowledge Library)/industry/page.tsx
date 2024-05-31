import React from 'react';
import { redirect } from 'next/navigation';
import { createClient } from '@/lib/utils/supabase/server';
import IndustryTable from '@/components/dashboard/fileManagement/industryTable';


export default async function IndustryKnowledgeDashboardSubpage({ params }: { params: { organizationId: string; }; }) {
	const supabase = createClient()
	const { data, error } = await supabase.auth.getUser()
	// Check the user is authenticated
	if (error || !data?.user) {
		console.log(`Authentication failed on industry/page.tsx`)
		console.log(error)
		redirect('/login')
	}
	console.log(JSON.stringify(error, null, 2))
	// Check the user is authorized
	if (data.user.app_metadata.organization_id !== params.organizationId) {
		console.log(`Authorization failed on industry/page.tsx`)
		redirect('/login')
	}
	return (
		<div className="min-h-screen bg-white px-8 py-12">
			<div className="max-w-7xl mx-auto">
				<IndustryTable></IndustryTable>

			</div>
		</div>
	);
};


