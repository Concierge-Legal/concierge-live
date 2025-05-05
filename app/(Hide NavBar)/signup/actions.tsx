'use server';

import { MOCK_ORGANIZATIONS } from '@/lib/utils/mock/data';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

// For demo purposes, we don't need to actually set an organization
// This is a stub function that simulates what would happen in a real app
async function simulateUserCreation(firstName: string, lastName: string, email: string, organizationId: string) {
	console.log(`Demo: Creating user ${firstName} ${lastName} (${email}) for organization ${organizationId}`);
	// In a real app, we would create a user in the database and associate them with an organization
	return true;
}

export async function signup(formData: FormData) {
	// Extract form data
	const email = formData.get('email') as string;
	const password = formData.get('password') as string;
	const firstName = formData.get('firstName') as string;
	const lastName = formData.get('lastName') as string;
	const organizationId = formData.get('organizationId') as string;

	// Basic validation
	if (!email || !password || password.length < 6) {
		redirect("/signup?message=Please provide a valid email and password (min 6 characters)");
	}

	if (!firstName || !lastName) {
		redirect("/signup?message=Please provide your name");
	}

	// Validate organization ID
	let targetOrgId = organizationId;
	if (!targetOrgId) {
		// Default to demo organization if none is provided
		const demoOrg = MOCK_ORGANIZATIONS.find(org => org.id === 'demo-organization');
		if (demoOrg) {
			targetOrgId = demoOrg.id;
		} else {
			redirect("/signup?message=Invalid organization");
		}
	}

	// Simulate user creation
	const success = await simulateUserCreation(firstName, lastName, email, targetOrgId);

	if (!success) {
		redirect("/signup?message=Could not complete signup process");
	}

	// For demo purposes, we redirect to a success page
	revalidatePath('/', 'layout');
	redirect("/signup?message=Account created successfully! Check your email to verify your account.");
}

