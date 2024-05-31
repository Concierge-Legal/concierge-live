import React from 'react';
import { createClient } from '@/lib/utils/supabase/client';
import { redirect } from 'next/navigation'
import CompanyTable from '@/components/dashboard/fileManagement/companyTable'

// Initialize Supabase client (configure your Supabase details)
export default async function IndustryKnowledgeDashboardSubpage({ params }: { params: { organizationId: string; }; }) {
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
		<div className="min-h-screen bg-white px-8 py-12">
			<div className="max-w-7xl mx-auto">
				<CompanyTable></CompanyTable>
			</div>
		</div>
	);
};