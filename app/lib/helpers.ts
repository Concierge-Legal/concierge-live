import * as prompts from "./prompts";
import { createChatCompletion } from "./chatCompletion"
import {APIParameters, PhaseReport, PhaseType} from "./types";
import { OpenAI } from "openai";
import { BaseRequest } from './apiTypes';

// TEMPORARILY USING MY KEY
const openAiKey = process.env.SPARTYPKP_OPENAI_API_KEY;
const openai = new OpenAI({
  apiKey: openAiKey,
});

export const checkForLegalRequestHelper = async (base: BaseRequest, userInput: string) => {
    const [messages, ragTokens] = prompts.checkForLegalRequest(userInput);
    

    const params = new APIParameters({
      vendor: base.vendor,
      model: base.model,
      messages: messages, // Assuming new_messages is an array of Message objects
      temperature: 0.4, // Temperature
      rag_tokens: ragTokens,
      stream: false, // Stream
      calling_function:"checkForLegalRequestHelper" // Calling function
    });
    
    // Create the chat completion
    const [response, api_usage] = await createChatCompletion(params, false, openai);
    // Insert the API Usage
    api_usage.session_id = base.pipelineModel.session_id;
    api_usage.insert()
    // Generate the Phase Report
    generateLlmReport(base, "score_question_helper", api_usage.error_message || undefined)
    
    
    // Get the structured data from the raw response
    const quality_score: number = JSON.parse(response!).quality_score;
    return quality_score;
  };


  export function generateLlmReport(
    base: BaseRequest,
    apiUsageId: string,
    errorMessage?: string
  ): void {
    let phaseReport = new PhaseReport({
      phase_type: PhaseType.LLM_CALL,
      timestamp: new Date(),
      description: `LLM Call for vendor: ${base.vendor}, model: ${base.model}.`,
      ts_function: base.callingFunction,
      api_usage_id: apiUsageId,
      
    });
    if (errorMessage !== undefined) {
      phaseReport.error_message = errorMessage;
      phaseReport.error_code = 400;
    }
    base.pipelineModel.history.push(phaseReport)
    return
  }
  
  