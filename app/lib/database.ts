import { createClient } from '@supabase/supabase-js';
import { APIUsage } from "./lib/types";
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


export async function insert_api_debug_log(
  api_phase: string,
  execution_time: number,
  input_json_str: string,
  output_json_str: string,
  did_error: boolean,
  error_message: string,
  supabaseUrl: string,
  supabaseKey: string,
  session_id: string
): Promise<void> {
  const supabase = createClient(supabaseUrl!, supabaseKey!);
  let input_json;
  let output_json;
  try {
    input_json = JSON.parse(input_json_str);
    output_json = JSON.parse(output_json_str);
  } catch (error) {
    console.error("Error parsing input or output JSON in insert_api_debug_log!");
    throw error;
  }
  const { error } = await supabase
    .from('production_api_debug')
    .insert({ api_phase, execution_time, input_json, output_json, did_error, error_message, session_id });
  if (error) {
    console.error("Error inserting api_debug_log into database!" + error);
    throw error;
  }
}

export async function insert_testing_suite_question_results(
  question: string,
  quality_score: number,
  specific_questions: string,
  direct_answer: string,
  supabaseUrl: string,
  supabaseKey: string,
): Promise<void> {
  const supabase = createClient(supabaseUrl!, supabaseKey!);
  const { error } = await supabase
    .from('testing_suite_question_results')
    .insert({ question, quality_score, specific_questions, direct_answer});
  if (error) {
    console.error("Error inserting testing_suite_question_results into database!" + error);
    throw error;
  }
}