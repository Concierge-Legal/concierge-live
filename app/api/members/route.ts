// pages/api/members/[userId].ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';
import { Member } from '@/utils/types';

export async function POST(req: NextApiRequest, res: NextApiResponse) {
    console.log(`POST request received`)
    const { userId } = req.body;

    if (!userId || typeof userId !== 'string') {
        res.status(400).json({ error: 'UserId is required and must be a string' });
        return;
    }

    try {
        const tableName = `${userId}_products`;
        const supabase = createClient(process.env.supabaseUrl!, process.env.supabaseKey!);
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

        res.status(200).json(data);
    } catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ error: 'Failed to fetch data', details: err.message });
        } else {
            // If it's not an Error instance, just return a generic error message
            res.status(500).json({ error: 'Failed to fetch data', details: "An unknown error occurred" });
        }
    }

}
