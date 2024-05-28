
import type { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';
import { Member } from '@/lib/utils/types';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    
    const request = await req.json();
    console.log(`POST request received.`)
    const organizationId: string = request.organizationId;
   
    if (!organizationId || typeof organizationId !== 'string') {
        return NextResponse.json({ error: 'OrganizationId is required and must be a string', status: 400 });
    }

    try {
        const tableName = `${organizationId}_products`;
        const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);
        const { data, error } = await supabase
            .from(tableName) // Removing the generic parameter to see if it resolves the issue.
            .select(`
                    id,
                    fullName,
                    description,
                    services: services::jsonb,
                    jurisdictions: jurisdictions::jsonb
                `);


        if (error) throw error;

        return NextResponse.json({'members': data, 'status': 200})
    } catch (err) {
        if (err instanceof Error) {
            return NextResponse.json({'error': 'Failed to fetch data', 'details': err.message, 'status': 500})

        } else {
            // If it's not an Error instance, just return a generic error message
            return NextResponse.json({'error': 'Failed to fetch data', 'details': 'An unknown error occurred', 'status': 500})
            
        }
    }

}
