'use server';

import { MOCK_ORGANIZATIONS } from '@/lib/utils/mock/data';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

// Mock authentication function - replaces Supabase authentication
export async function login(formData: FormData) {
	// For demo purposes, we'll accept any credentials and redirect to the demo organization
	// You could add simple validation here if needed
	const email = formData.get('email') as string;
	const password = formData.get('password') as string;

	// Simple validation to make it seem real
	if (!email || !password || password.length < 6) {
		redirect("/login?message=Invalid email or password format");
	}

	// In a real app, we would validate credentials against a database
	// For the demo, we'll just redirect to the demo organization
	const demoOrganization = MOCK_ORGANIZATIONS.find(org => org.id === 'demo-organization');

	if (!demoOrganization) {
		redirect("/login?message=Organization not found");
	}

	revalidatePath('/dashboard/[organizationId]', 'page');
	redirect(`/dashboard/${demoOrganization.id}`);
}

// Simplified demo login that goes directly to the demo organization
export async function loginDemo() {
	const demoOrganization = MOCK_ORGANIZATIONS.find(org => org.id === 'demo-organization');

	if (!demoOrganization) {
		redirect("/login?message=Demo organization not found");
	}

	revalidatePath('/dashboard/[organizationId]', 'page');
	redirect(`/dashboard/${demoOrganization.id}`);
}

// Mock signup function
export async function signup(formData: FormData) {
	const email = formData.get('email') as string;
	const password = formData.get('password') as string;

	// Simple validation
	if (!email || !password || password.length < 6) {
		redirect("/login?message=Invalid signup information");
	}

	// In a real app, we would create a new user in the database
	// For the demo, we'll just show a success message
	revalidatePath('/', 'layout');
	redirect("/login?message=Account created successfully! You can now log in.");
}