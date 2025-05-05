import { NextResponse } from "next/server";

/**
 * Mock authentication callback handler
 * 
 * In a real application, this would exchange an auth code for a session.
 * For our demo, we'll just simulate a successful authentication flow.
 */
export async function GET(request: Request) {
	const requestUrl = new URL(request.url);
	const code = requestUrl.searchParams.get("code");
	const redirectTo = requestUrl.searchParams.get("redirectTo") || "/";

	// Log the authentication callback (for demo purposes)
	if (code) {
		console.log(`Mock Auth: Processing authentication callback with code: ${code}`);
	}

	// In a real app, we would validate the code and create a session
	// For the demo, we'll just redirect to the demo dashboard
	return NextResponse.redirect(`${requestUrl.origin}/dashboard/demo-organization`);
}