import { NextResponse } from 'next/server';
import { BaseRequest } from '../../lib/apiTypes';
import OpenAI from 'openai';

export const maxDuration = 120;
const openAiKey = process.env.OPENAI_API_KEY;
const client = new OpenAI({
  apiKey: openAiKey,
});

interface ChatRequest {
    base: BaseRequest;
    userInput: string;
    existingThreadId?: string;
}
export async function POST(req: Request) {
    
    console.log("=== Chat API EndPoint ===");

    const request: ChatRequest = await req.json();
    const base: BaseRequest = request.base;
    const userInput:string = request.userInput;
    const existingThreadId: string | undefined = request.existingThreadId;

    let assistantId = "asst_Vff9LRAqBmxRLQLBaN7jTgve";  // Your assistant ID
    const assistant = await client.beta.assistants.retrieve(assistantId);

    try {
        let stream;
        if (existingThreadId) {
            stream = await client.beta.threads.runs.create(
                existingThreadId,
                {
                    assistant_id: assistantId,
                    stream: true,
                    additional_messages: [{ "role": "user", "content": userInput }]
                }
            );
        } else {
            stream = await client.beta.threads.createAndRun({
                assistant_id: assistantId,
                thread: {
                    messages: [{ role: "user", content: userInput }],
                },
                stream: true
            });
        }
        
        const events = [];
        for await (const event of stream) {
            if (event.event === "thread.created") {
                events.push({
                    type: event.event,
                    threadId: event.data.id
                });
            } else if (event.event === "thread.run.created") {
                events.push({
                    type: event.event,
                    threadId: event.data.thread_id,
                    runId: event.data.id
                });
            } else if (event.event === "thread.run.requires_action") {
                if (event.data.required_action?.submit_tool_outputs) {
                    const tool_calls = event.data.required_action.submit_tool_outputs.tool_calls;
                    events.push(...tool_calls.map(tc => ({
                        type: 'tool_call',
                        tool_call: tc
                    })));
                }
            }
        }
        return NextResponse.json({ events, status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({"status": 500})
    }
}
