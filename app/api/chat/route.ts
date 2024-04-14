import { NextResponse } from 'next/server';
import { BaseRequest } from '../../lib/apiTypes';
import OpenAI from 'openai';
import { AssistantResponse } from 'ai';

interface ChatRequest {
    base: BaseRequest;
    userInput: string;
    threadId?: string;
}

// Create an OpenAI API client (that's edge friendly!)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
});

// IMPORTANT! Set the runtime to edge
export const runtime = 'edge';



export async function POST(req: Request) {
  // Parse the request body
  const request: ChatRequest = await req.json();

  // Create a thread if needed
  const threadId = request.threadId ?? (await openai.beta.threads.create({})).id;

  // Add a message to the thread
  const createdMessage = await openai.beta.threads.messages.create(threadId, {
    role: 'user',
    content: request.userInput
  });

  return AssistantResponse(
    { threadId, messageId: createdMessage.id },
    async ({ forwardStream, sendDataMessage }) => {
      // Run the assistant on the thread
      const runStream = openai.beta.threads.runs.stream(threadId, {
        assistant_id: "asst_Vff9LRAqBmxRLQLBaN7jTgve"
      });

      // forward run status would stream message deltas
      let runResult = await forwardStream(runStream);

      // status can be: queued, in_progress, requires_action, cancelling, cancelled, failed, completed, or expired
      while (
        runResult?.status === 'requires_action' &&
        runResult.required_action?.type === 'submit_tool_outputs'
      ) {
        const tool_outputs =
          runResult.required_action.submit_tool_outputs.tool_calls.map(
            (toolCall: any) => {
              const parameters = JSON.parse(toolCall.function.arguments);

              switch (toolCall.function.name) {
                case 'getRoomTemperature': {
                  const temperature =
                    homeTemperatures[
                      parameters.room as keyof typeof homeTemperatures
                    ];

                  return {
                    tool_call_id: toolCall.id,
                    output: temperature.toString(),
                  };
                }

                case 'setRoomTemperature': {
                  const oldTemperature =
                    homeTemperatures[
                      parameters.room as keyof typeof homeTemperatures
                    ];

                  homeTemperatures[
                    parameters.room as keyof typeof homeTemperatures
                  ] = parameters.temperature;

                  sendDataMessage({
                    role: 'data',
                    data: {
                      oldTemperature,
                      newTemperature: parameters.temperature,
                      description: `Temperature in ${parameters.room} changed from ${oldTemperature} to ${parameters.temperature}`,
                    },
                  });

                  return {
                    tool_call_id: toolCall.id,
                    output: `temperature set successfully`,
                  };
                }

                default:
                  throw new Error(
                    `Unknown tool call function: ${toolCall.function.name}`,
                  );
              }
            },
          );

        runResult = await forwardStream(
          openai.beta.threads.runs.submitToolOutputsStream(
            threadId,
            runResult.id,
            { tool_outputs },
          ),
        );
      }
    },
  );
}

async function callFunction(tool_call: OpenAI.Beta.Threads.Runs.RequiredActionFunctionToolCall, threadId: string, runId: string): Promise<void> {
    if (tool_call.type !== "function") {
        return;
    }

    const args = JSON.parse(tool_call.function.arguments);
    const toolId = tool_call.id;
    let output: string = "Error occured.";

    switch (tool_call.function.name) {
        case 'ConsultAbeForLegalInformation':
            // Call this function asynchronously!
            askAbeNewQuestion(args["query"]);
            output = "Abe here. I received your request, and will individually contact the user with my full response, however I need some more time. Feel free to continue interacting with the user";
            break;

        case 'FetchGeneralInformation':
            // Wait for the result, in order to submit back to the thread.
            //output = await FetchGeneralInformation(args['topic']);
            output = "TODO!";
            break;

        case 'HandleSpecificHelpRequest':
            //output = await HandleSpecificHelpRequest(args['serviceType'], args['details']);
            output = "TODO";
            break;
    }
    await submitTool(threadId, runId, toolId, output);
    return;
}
// export async function POST(req: Request) {
    
//     console.log("=== Chat API EndPoint ===");

//     const request: ChatRequest = await req.json();
//     const base: BaseRequest = request.base;
//     const userInput:string = request.userInput;
//     const existingThreadId: string | undefined = request.existingThreadId;

//     let assistantId = "asst_Vff9LRAqBmxRLQLBaN7jTgve";  // Your assistant ID
//     const assistant = await client.beta.assistants.retrieve(assistantId);

//     try {
//         let stream;
//         if (existingThreadId) {
//             stream = await client.beta.threads.runs.create(
//                 existingThreadId,
//                 {
//                     assistant_id: assistantId,
//                     stream: true,
//                     additional_messages: [{ "role": "user", "content": userInput }]
//                 }
//             );
//         } else {
//             stream = await client.beta.threads.createAndRun({
//                 assistant_id: assistantId,
//                 thread: {
//                     messages: [{ role: "user", content: userInput }],
//                 },
//                 stream: true
//             });
//         }
        
//         const events = [];
//         for await (const event of stream) {
//             if (event.event === "thread.created") {
//                 events.push({
//                     type: event.event,
//                     threadId: event.data.id
//                 });
//             } else if (event.event === "thread.run.created") {
//                 events.push({
//                     type: event.event,
//                     threadId: event.data.thread_id,
//                     runId: event.data.id
//                 });
//             } else if (event.event === "thread.run.requires_action") {
//                 if (event.data.required_action?.submit_tool_outputs) {
//                     const tool_calls = event.data.required_action.submit_tool_outputs.tool_calls;
//                     events.push(...tool_calls.map(tc => ({
//                         type: 'tool_call',
//                         tool_call: tc
//                     })));
//                 }
//             }
//         }
//         return NextResponse.json({ events, status: 200 });
//     } catch (error) {
//         console.error(error);
//         return NextResponse.json({"status": 500})
//     }
// }
