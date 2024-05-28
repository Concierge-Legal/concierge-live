'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { createClient } from '@/lib/utils/supabase/server';
import { createAdminClient } from '@/lib/utils/supabase/server';


export async function signup(formData: FormData) {
	const supabase = createClient();
	
	const organization_id: string = formData.get('organizationId') as string;
	const { data, error } = await supabase.auth.signUp({
		email: formData.get('email') as string,
		password: formData.get('password') as string,
		options: {
			data: {
				first_name: formData.get('firstName') as string,
				last_name: formData.get('lastName') as string,
			},
			emailRedirectTo: `${process.env.VERCEL_URL}/auth/callback`,
		},
	});

	if (error) {
		console.log(`Error from supabase Signup action: ${error}`);
		redirect("/signup?message=Could not sign up user");
	}
	await setOrganization(data.user!.id, organization_id)
	
	revalidatePath('/', 'layout');
	redirect("/signup?message=Check email to continue sign in process");

}

async function setOrganization(userId: string, organization_id: string) {
	const supabase = createAdminClient()
	const { data } = await supabase.auth.admin.updateUserById(
		userId,
		{ app_metadata: { organization_id: organization_id } }
	  )
}