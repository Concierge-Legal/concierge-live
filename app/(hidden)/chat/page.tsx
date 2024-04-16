"use client";
import React, { useState, useEffect, useRef, FormEvent, ChangeEvent, useCallback } from 'react';
import { ChatContextProvider } from '../../components/chatContext';
import ContentQueue from '../../components/contentQueue'; // Adjust path as necessary
import { ContentBlock, ContentType, StreamingType, SpeakerType, PipelineModel } from '../../lib/types'; // Assume types are exported from a types file
import { Message, useAssistant as useAssistant } from 'ai/react';
import { JSONValue } from 'ai';



export default function Chat() {

	const [contentBlocks, setContentBlocks] = useState<ContentBlock[]>([{
		blockId: `concierge_welcome`, // Generate a unique ID for the new block
		type: ContentType.Welcome,
		content: "Hello, my name is Concierge. How can I assist you today?",
		streamingType: StreamingType.fake,
		speaker: SpeakerType.concierge
	}
	]);
	const [conciergeStreamBlockId, setConciergeStreamBlockId] = useState<String>("NULL");
	const [showLoadingIcon, setShowLoadingIcon] = useState<boolean>(false);
	const { status, messages, input, submitMessage, handleInputChange, error } = useAssistant(
		{
			api: '/api/assistants/conciergeInitial',
			body: {
				vendor: "openai",
				model: "gpt-4-turbo-preview",
				callingFunction: "scoreQuestion",
				pipelineModel: new PipelineModel({ "history": [], "session_id": "test20" }),
			}
		});
	const [oldMessageIds, setOldMessageIds] = useState<String[]>([]);




	// UI Helper Functions
	const addContentBlock = (
		blockId: string,
		type: ContentType,
		streamingType: StreamingType,
		content: string,
		speaker: SpeakerType
	) => {
		const newBlock: ContentBlock = {
			blockId: blockId,
			type: type,
			content: content,
			streamingType: streamingType,
			speaker: speaker, // Add speaker information directly in the content block
		};
		setContentBlocks([...contentBlocks, newBlock]);
	};
	const askAbeNewQuestion = async (question: string) => {
		const questionText = question.trim();

		//addContentBlock(`abe_icon_${messages.length}`, ContentType.AbeSpeaker, StreamingType.noStream, "", SpeakerType.abe);

		const abe_api_key: string = "conciergeTestKey";
		const request = {
			abe_api_key: abe_api_key,
			question: questionText,  // Ensure to trim and use the cleaned text
			jurisdiction: 'mhl',  // A list of questions that have already been answered
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


		addContentBlock(`abe${messages.length}`, ContentType.Answer, StreamingType.fake, answer, SpeakerType.abe);
	};

	function updateContentBlocks(blockId: string, newContent: string) {
		for (let block of contentBlocks) {
			if (block.blockId === blockId) {
				block.content = newContent;
				return;
			}
		}
	}


	
	const processChatMessage = (message: Message) => {
		const { id, role, content } = message;
		const speakerType = role === "user" ? SpeakerType.user : SpeakerType.concierge;
		const contentType = role === "user" ? ContentType.Question : ContentType.Answer;
		const streamingType = role === "user" ? StreamingType.noStream : StreamingType.real;

		// Check if this is the currently streaming id
		if (id !== conciergeStreamBlockId) {
			// New message ID, add to tracking and create a block
			setOldMessageIds(prevIds => [...prevIds, id]);
			addContentBlock(id, contentType, streamingType, content, speakerType);
			setConciergeStreamBlockId(id);
		} else {
			// Update existing block with new content
			console.log(`Updating block with ${content}`);
			updateContentBlocks(id, content);
		}
	};

	const processFunctionMessage = async (message: Message) => {

		console.log(`Function call received! ${message}`);

	};

	interface FunctionCallData {
		messageType: 'functionCall';
		functionCalled: string;
		parameters: any;
		description: string;
	}
	const processDataMessage = async (message: Message) => {
		if (!message.data) {
			return;
		}
		const data = message.data as string;
		const functionCallData: FunctionCallData = JSON.parse(data);
		// Check if the message is of type 'functionCall'
		if (functionCallData.messageType! === 'functionCall') {
			if (functionCallData.functionCalled === "ConsultAbeForLegalInformation") {
				askAbeNewQuestion(functionCallData.parameters['query']);
			}
		}

		setOldMessageIds(prevIds => [...prevIds, message.id]);

	};

	useEffect(() => {
		console.log(`Status changed to: ${status}`);
		if (status == "awaiting_message") {
			setOldMessageIds(prevIds => [...prevIds, conciergeStreamBlockId]);
			setConciergeStreamBlockId("NULL");
		}
	}, [status]);

	useEffect(() => {

		if (conciergeStreamBlockId !== "null") {

			setShowLoadingIcon(true);
		} else {
			setShowLoadingIcon(false);
		}
	}, [conciergeStreamBlockId]);

	// useEffect to log changes to messages
	useEffect(() => {
		console.log(messages);
		messages.forEach(message => {

			const { id, role, content } = message;
			if (id === "") {
				console.log(`Ignored message with no ID!`);
			} else if (oldMessageIds.includes(id) && id !== conciergeStreamBlockId) {
				console.log(`Ignoring old message ID!`);
			} else if (role === "assistant" || role === "user") {
				processChatMessage(message);
			} else if (role === "function") {
				processFunctionMessage(message);
			} else if (role === "data") {
				processDataMessage(message);
			} else {
				console.log(`Ignored message from role: ${role}`);
			}
		});
	}, [messages]);


	return (
		<ChatContextProvider value={{ currentlyStreamingBlockId: conciergeStreamBlockId, showLoadingIcon }}>
			<div className="App flex flex-col min-h-screen bg-app">
				<div className="flex flex-col shadow-lg rounded-lg p-6 bg-chat flex-grow">
					<div className="flex flex-col flex-grow">
						<div className="overflow-y-auto flex-grow p-4 rounded-lg">
							<ContentQueue items={contentBlocks} />
						</div>
						
					</div>
					<form className="flex gap-2 mt-4 bg-white" onSubmit={submitMessage}>
						<input
							disabled={status !== 'awaiting_message'}
							className="flex-1 p-2 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 bg-input border-focus"
							value={input}
							placeholder="How can I help you today?"
							onChange={handleInputChange}
						/>
						<button
							type="submit"
							className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-button-hover focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out text-primary"
						>
							Send
						</button>
					</form>
				</div>
			</div>
		</ChatContextProvider>



	);
}



