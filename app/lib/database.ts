import { createClient } from '@supabase/supabase-js';
import { APIUsage } from "./types";
import { match } from 'assert';



export async function insertApiUsage(
  api_usage: APIUsage
): Promise<void> {
  const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_KEY!);
  const { error } = await supabase
    .from('api_usage')
    .insert(api_usage);
  if (error) {
    console.error("Error inserting api usage into database!" + error);
    throw error;
  }
}
