import { NextResponse } from 'next/server';
import { BaseRequest } from '../../../lib/apiTypes';
import OpenAI from 'openai';
import { AssistantResponse } from 'ai';

interface ChatRequest {
  body: BaseRequest;
  message: string;
  threadId?: string;
}

// Create an OpenAI API client (that's edge friendly!)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// IMPORTANT! Set the runtime to edge
export const runtime = 'edge';

export async function POST(req: Request) {
  // Parse the request body
  const request: ChatRequest = await req.json();
  const base: BaseRequest = request.body;
  if (request.message.trim() == "") {
    throw new Error("You must provide some user Input!");
  }
  //console.log(request)
  //console.log(openai)
  // Create a thread if needed
  const threadId = request.threadId ?? (await openai.beta.threads.create({})).id;

  // Add a message to the thread
  const createdMessage = await openai.beta.threads.messages.create(threadId, {
    role: 'user',
    content: request.message
  });
  //console.log(`CreatedMessage: ${createdMessage}`)
  // List all messages in the thread
  // const threadMessages = await openai.beta.threads.messages.list(
  //   threadId
  // );

  //console.log(threadMessages.data);
  

  return AssistantResponse(
    { threadId, messageId: createdMessage.id },
    async ({ forwardStream, sendDataMessage }) => {
      // Run the assistant on the thread
      const runStream = openai.beta.threads.runs.stream(threadId, {
        assistant_id: "asst_JvrVQ1PBErRSyGd7bCLvDxAP"
      });
      
      

      // forward run status would stream message deltas
      let runResult = await forwardStream(runStream);
      

      // status can be: queued, in_progress, requires_action, cancelling, cancelled, failed, completed, or expired
      while (
        runResult?.status === 'requires_action' &&
        runResult.required_action?.type === 'submit_tool_outputs'
      ) {
        //console.log(runResult)
        const tool_outputs = await Promise.all(
          runResult.required_action.submit_tool_outputs.tool_calls.map(
            async (toolCall: OpenAI.Beta.Threads.Runs.RequiredActionFunctionToolCall) => {


              const args = JSON.parse(toolCall.function.arguments);
              console.log(args)
              const toolId = toolCall.id;
              let output: string = "Error occured.";

              switch (toolCall.function.name) {
                case 'ConsultAbeForLegalInformation':
                  // Call this function asynchronously!
                  const researchQuery: string = args["query"];
                  sendDataMessage({
                    role: 'data',
                    data: JSON.stringify({
                      messageType: 'functionCall',
                      functionCalled: 'ConsultAbeForLegalInformation',
                      parameters: { query: researchQuery },
                      description: `Abe received the request to research ${researchQuery}}`,
                    }),
                  });

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







              return { tool_call_id: toolCall.id, output: output } as OpenAI.Beta.Threads.Runs.RunSubmitToolOutputsParams.ToolOutput;
            }
          )
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

