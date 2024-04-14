"use client";
import React, { useState, useEffect, FormEvent, ChangeEvent, useCallback } from 'react';
import { ChatContextProvider } from '../../components/chatContext';
import ContentQueue from '../../components/contentQueue'; // Adjust path as necessary
import { ContentBlock, ContentType, StreamingType, SpeakerType, PipelineModel } from '../../lib/types'; // Assume types are exported from a types file
import { checkForLegalRequestHelper, submitTool } from '../../lib/helpers';
import { OpenAI } from "openai";

export default function Chat() {

	const [contentBlocks, setContentBlocks] = useState<ContentBlock[]>([{
		blockId: `id_${new Date().getTime()}_${Math.random()
			.toString(36)
			.substr(2, 9)}`, // Generate a unique ID for the new block
		type: ContentType.ConciergeSpeaker,
		content: "",
		streamingType: StreamingType.noStream
	}, {
		blockId: `id_${new Date().getTime()}_${Math.random()
			.toString(36)
			.substr(2, 9)}`, // Generate a unique ID for the new block
		type: ContentType.Welcome,
		content: "Hello, my name is Concierge. How can I assist you today?",
		streamingType: StreamingType.fake
	}
]);
	const [showLoadingIcon, setShowLoadingIcon] = useState<boolean>(false);
	const [inputText, setInputText] = useState('');
	const [threadId, setThreadId] = useState<string>("");
	const [runId, setRunId] = useState<string>("");

	const onStreamEnd = (concurrentStreaming: boolean) => console.log("Stream ended:", concurrentStreaming);
	const setActiveCitationId = (citationId: string) => console.log("Citation ID:", citationId);

	// UI Helper Functions
	const addContentBlock = (type: ContentType, streamingType: StreamingType, content: string | AsyncIterable<string>, speaker: SpeakerType) => {
		// Add a Speaker Block beforehand
		let speakerBlockType = ContentType.UserSpeaker;
		if (speaker === SpeakerType.concierge) {
			speakerBlockType = ContentType.ConciergeSpeaker;
		} else if (speaker === SpeakerType.abe) {
			speakerBlockType = ContentType.AbeSpeaker;
		}
		const speakerBlock: ContentBlock = {
			blockId: `id_${new Date().getTime()}_${Math.random()
				.toString(36)
				.substr(2, 9)}`, // Generate a unique ID for the new block
			type: speakerBlockType,
			content: "",
			streamingType: streamingType
		};
		setContentBlocks([...contentBlocks, speakerBlock]);

		const newBlock: ContentBlock = {
			blockId: `id_${new Date().getTime()}_${Math.random()
				.toString(36)
				.substr(2, 9)}`, // Generate a unique ID for the new block
			type: type,
			content: content,
			streamingType: streamingType
		};
		setContentBlocks([...contentBlocks, newBlock]);
	};

	
	

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setInputText(e.target.value);
	};

	const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault(); // Prevent the default form submission behavior
		if (!inputText.trim()) return; // Avoid processing empty inputs

		await handleUserInput(inputText); // Call your input handler function
		setInputText(''); // Clear the input field after submission
	};

	const askAbeNewQuestion = async (question: string) => {
		const questionText = question.trim();
		if (!questionText) return;

		// Show the user's question
		addContentBlock(ContentType.Question, StreamingType.noStream, questionText, SpeakerType.user);
		// Let Concierge tell the user it's asking Abe about the legal question
		addContentBlock(ContentType.Answer, StreamingType.fake, "Great question. I can't provide legal information or education, so I'll my friend Abe to answer this for you", SpeakerType.concierge);

		const abe_api_key: string = "conciergeTestKey";
		const request = {
			abe_api_key: abe_api_key,
			question: questionText,  // Ensure to trim and use the cleaned text
			jurisdiction: 'ca',  // A list of questions that have already been answered
		};

		console.log("Sending request to AskAbeAI API");
		const response = await fetch("https://www.askabeai.com/api/externalAPI/privateQA", {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				// Add any additional headers your API might require
			},
			body: JSON.stringify(request)
		});

		if (!response.ok) {
			console.error("Failed to fetch answer from Abe API:", response.status);
			return; // Handle errors or unsuccessful requests appropriately
		}

		console.log("Received response from Abe API");
		const response_json = await response.json();

		let answer = response_json.answer || "Sorry, no answer available."; // Default message if no answer

		// Processing answer to replace "<" and ">" if still needed

		addContentBlock(ContentType.Answer, StreamingType.fake, answer, SpeakerType.abe);
	};


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


	const handleUserInput = async (userInput: string) => {
		const inputText = userInput.trim();
		if (!inputText) return;

		addContentBlock(ContentType.Question, StreamingType.noStream, inputText, SpeakerType.user);
		const generator = checkForLegalRequestHelper({
			"vendor": "openai",
			"model": "gpt-4-turbo-preview",
			"pipelineModel": new PipelineModel({ "history": [], "session_id": "test20" }),
			"callingFunction": "handleNewInput"
		}, inputText);

		for await (let result of generator) {
			if (result.type === 'thread.created') {
				setThreadId(result.threadId!);
			} else if (result.type === 'thread.run.created') {
				setThreadId(result.threadId!);
				setRunId(result.runId!);
			} else if (result.type === 'thread.run.required_action') {
				// You can process any function call here
				callFunction(result.tool_call!, threadId, runId);
			}
		}
	};



	return (
		<ChatContextProvider value={{ onStreamEnd, setActiveCitationId, showLoadingIcon }}>
    <div className="App">
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="bg-neutral-800 shadow-lg rounded-lg p-6 w-full max-w-2xl">
                <div className="flex flex-col h-[80vh]"> 
                    <div className="flex-1 overflow-y-auto my-4 bg-white p-4 rounded-lg">
                        
                        <ContentQueue items={contentBlocks} />
                    </div>
                    <form className="flex gap-2" onSubmit={handleFormSubmit}>
                        <input
                            type="text"
                            className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                            placeholder="Type your message..."
                            value={inputText}
                            onChange={handleInputChange}
                        />
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</ChatContextProvider>


	);
}



