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

// TEMPORARILY USING MY KEY


export async function* checkForLegalRequestHelper(base: BaseRequest, userInput: string, existingThreadId?: string) {
    const openAiKey = process.env.OPENAI_API_KEY;
    const client = new OpenAI({
        apiKey: openAiKey,
    });
    const assistant = await client.beta.assistants.retrieve("asst_Vff9LRAqBmxRLQLBaN7jTgve");
    let assistantId = assistant.id;
    let stream;

    if (existingThreadId) {
        // Continue the conversation on an existing thread
        stream = await client.beta.threads.runs.create(
            existingThreadId,
            {
                assistant_id: assistantId,
                stream: true,
                additional_messages: [{ "role": "user", "content": userInput }]
            }
        );
    } else {
        // Create a new thread if none exists
        stream = await client.beta.threads.createAndRun({
            assistant_id: assistantId,
            thread: {
                messages: [{ role: "user", content: userInput }],
            },
            stream: true
        });
    }
    
    for await (const event of stream) {
        // Completely new session, new thread created
        if (event.event === "thread.created") {
            yield { type: 'thread.created', threadId: event.data.id};
        }
        // Could be new session, could be continuation of old thread.
        else if (event.event === "thread.run.created") {
            yield { type: 'thread.run.created', threadId: event.data.thread_id, runId: event.data.id}
        }
        // Indicates a function needs to be called
        else if (event.event === "thread.run.requires_action") {
            if (event.data.required_action?.submit_tool_outputs) {
                const tool_calls = event.data.required_action.submit_tool_outputs.tool_calls;
                for (let tool_call of tool_calls) {
                    yield { type: 'thread.run.required_action', tool_call };
                }
            }
        }
    }
}




export async function submitTool(threadId: string, runId: string, toolCallId: string, toolOutput: string) {
    const openAiKey = process.env.OPENAI_API_KEY;
    const client = new OpenAI()
    const stream = await client.beta.threads.runs.submitToolOutputs(
        threadId,
        runId,
        {
            tool_outputs: [
                {
                    tool_call_id: toolCallId,
                    output: toolOutput,
                },
            ],
        }
    );
    return;

}


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

