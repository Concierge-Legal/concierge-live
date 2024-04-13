
import { NextResponse } from 'next/server';

const API_ROUTE = "api/search"

export async function POST(req: Request) {

	
	console.log("=== Search API ENDPOINT ===");
	

	const supabaseUrl = process.env.SUPABASE_URL;
	const supabaseKey = process.env.SUPABASE_KEY;

	if (supabaseUrl === undefined) { throw new Error("process.env.SUPABUSE_URL is undefined!"); }
	if (supabaseKey === undefined) { throw new Error("process.env.SUPABASE_KEY is undefined!"); }

	const request = await req.json();
	
	return NextResponse.json({"success": true})
}



async function callWithRetries<T>(
	fn: () => Promise<T>, 
	maxRetries: number
  ): Promise<T> {
	let attempts = 0;
	while (true) {
	  try {
		return await fn();
	  } catch (error) {
		attempts++;
		if (attempts > maxRetries) {
		  throw error;
		}
		console.log(`Attempt ${attempts} failed, retrying...`);
	  }
	}
  }