import * as prompts from "./prompts";
import { createChatCompletion } from "./chatCompletion";
import { APIParameters, PhaseReport, PhaseType } from "./types";
import { OpenAI } from "openai";
import { BaseRequest } from './apiTypes';
import {
    ChatCompletionMessage,
    ChatCompletionChunk,
    ChatCompletionMessageParam,
} from 'openai/resources/chat/completions';








export async function submitTool(threadId: string, runId: string, toolCallId: string, toolOutput: string) {
    
    // const stream = await client.beta.threads.runs.submitToolOutputs(
    //     threadId,
    //     runId,
    //     {
    //         tool_outputs: [
    //             {
    //                 tool_call_id: toolCallId,
    //                 output: toolOutput,
    //             },
    //         ],
    //     }
    // );
    return;

}

// Implementing tools?
async function ConsultAbeForLegalInformation(query: string) {

    return query;
}
async function FetchGeneralInformation(topic: string) {
    return "";
}
async function HandleSpecificHelpRequest(serviceType: string, details: string) {
    return "";
}















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
    base.pipelineModel.history.push(phaseReport);
    return;
}

