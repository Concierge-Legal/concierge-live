import { type EmailOtpType } from '@supabase/supabase-js';
import { type NextRequest, NextResponse } from 'next/server';

import { createClient } from '@/lib/utils/supabase/server';

/**
 * Mock email confirmation handler
 * 
 * In a real app, this would verify a one-time password (OTP) sent via email.
 * For our demo version, we'll simulate a successful verification.
 */
export async function GET(request: NextRequest) {
	const { searchParams } = new URL(request.url);
	const token_hash = searchParams.get('token_hash');
	const type = searchParams.get('type') as EmailOtpType | null;
	const next = searchParams.get('next') ?? '/';

	// Prepare a redirect URL
	const redirectTo = request.nextUrl.clone();

	// Log verification attempt (for demo purposes)
	if (token_hash && type) {
		console.log(`Mock Auth: Processing email verification with token hash: ${token_hash}, type: ${type}`);

		const supabase = createClient();

		// Our mock client will handle this without actual verification
		const { error } = await supabase.auth.verifyOtp({
			type,
			token_hash,
		});

		if (!error) {
			// For demo purposes, we'll always redirect to the demo dashboard
			return NextResponse.redirect(`${request.nextUrl.origin}/dashboard/demo-organization`);
		}
	}

	// If something went wrong (shouldn't happen in demo), redirect to the home page
	return NextResponse.redirect(`${request.nextUrl.origin}/`);
}