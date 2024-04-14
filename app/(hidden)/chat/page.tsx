"use client";
import React, { useState, useEffect, useRef, FormEvent, ChangeEvent, useCallback } from 'react';
import { ChatContextProvider } from '../../components/chatContext';
import ContentQueue from '../../components/contentQueue'; // Adjust path as necessary
import { ContentBlock, ContentType, StreamingType, SpeakerType, PipelineModel } from '../../lib/types'; // Assume types are exported from a types file
import { Message, useAssistant as useAssistant } from 'ai/react';


const roleToColorMap: Record<Message['role'], string> = {
	system: 'red',
	user: 'black',
	function: 'blue',
	tool: 'purple',
	assistant: 'green',
	data: 'orange',
};

const roleToSpeakerTypeMap: Record<string, SpeakerType> = {
    user: SpeakerType.user,
    assistant: SpeakerType.concierge,
};

export default function Chat() {

	const [contentBlocks, setContentBlocks] = useState<ContentBlock[]>([{
		blockId: `concierge_logo_welcome`, // Generate a unique ID for the new block
		type: ContentType.ConciergeSpeaker,
		content: "",
		streamingType: StreamingType.noStream
	}, {
		blockId: `concierge_welcome}`, // Generate a unique ID for the new block
		type: ContentType.Welcome,
		content: "Hello, my name is Concierge. How can I assist you today?",
		streamingType: StreamingType.fake
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

	const onStreamEnd = (concurrentStreaming: boolean) => console.log("Stream ended:", concurrentStreaming);
	const setActiveCitationId = (citationId: string) => console.log("Citation ID:", citationId);

	// UI Helper Functions
	const addContentBlock = (blockId: string, type: ContentType, streamingType: StreamingType, content: string | AsyncIterable<string>, speaker: SpeakerType) => {
		// Add a Speaker Block beforehand
		let speakerBlockType = ContentType.UserSpeaker;
		if (speaker === SpeakerType.concierge) {
			speakerBlockType = ContentType.ConciergeSpeaker;
		} else if (speaker === SpeakerType.abe) {
			speakerBlockType = ContentType.AbeSpeaker;
		}
		const speakerBlock: ContentBlock = {
			blockId: `icon_${blockId}`, 
			type: speakerBlockType,
			content: "",
			streamingType: streamingType
		};
		setContentBlocks([...contentBlocks, speakerBlock]);

		const newBlock: ContentBlock = {
			blockId: blockId,
			type: type,
			content: content,
			streamingType: streamingType
		};
		setContentBlocks([...contentBlocks, newBlock]);
		if (streamingType === StreamingType.real) {
			setConciergeStreamBlockId(blockId)
		}
	};

	const isUniqueBlockId = (blockId: string) => {
		console.log(`Checking uniqueness of (${blockId}) in isUniqueBlockId.`)
		for (let block of contentBlocks) {
			console.log(`Block.blockId: ${block.blockId}`)
			if (block.blockId === blockId) {
				console.log(`Returning false!`)
				return false;
			}
		}
		console.log(`Returning true.`)
		return true;
	}
	const updateBlockContent = (blockId: string, content: string) => {
		for (let block of contentBlocks) {
			if (block.blockId === blockId) {
				block.content = content;
				break
			}
		}
	}

	const processChatMessage = (message: Message) => {
		const { id, role, content } = message;
		console.log(`== processChatMessage ==`)
		console.log(message)
		if (role == "user") {	
			// Only call this function if there's not a block with in ContentBlocks with a blockId equal to id
			if (isUniqueBlockId(id)) {
				
				addContentBlock(id, ContentType.Question, StreamingType.noStream, content, SpeakerType.user)
			}
		} else {
			// If this is the block that's currently streaming, update it.
			if(id === conciergeStreamBlockId) {
				updateBlockContent(id, content);
			// If this is a completely new Id, not seen in contentBlocks
			} else if (isUniqueBlockId(id)) {
				addContentBlock(id, ContentType.Answer, StreamingType.real, content, SpeakerType.concierge)
			// ALready handled block, ignore
			} else {
				console.log(`Ignoring block with ID: ${id}`)
			}
			
		}

	}
	const processFunctionMessage = async (message: Message) => {
		
		console.log(`Function call received! ${message}`)

	}
	const processDataMessage = async (message: Message) => {
		console.log(`Data received! ${message}`)
	}

	useEffect(() => {
        console.log(`Status changed to: ${status}`);
		if (status == "awaiting_message") {
			setConciergeStreamBlockId("NULL")
		}
    }, [status]);

    // useEffect to log changes to messages
    useEffect(() => {
		console.log(messages)
        messages.forEach(message => {
			
            const { id, role, content } = message;
			if (id === "") {
				console.log(`Ignored message with no ID!`)
			} else if (role === "assistant" || role === "user") {
				processChatMessage(message)
			} else if (role === "function") {
				processFunctionMessage(message)
			} else if (role === "data") {
				processDataMessage
			} else {
				console.log(`Ignored message from role: ${role}`)
			}
        });
    }, [messages]);

	const askAbeNewQuestion = async (question: string) => {
		const questionText = question.trim();

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

		
		addContentBlock(`abe${messages.length}`, ContentType.Answer, StreamingType.fake, answer, SpeakerType.abe);
	};

	

	const inputRef = useRef<HTMLInputElement>(null);
	useEffect(() => {
		if (status === 'awaiting_message') {
			inputRef.current?.focus();
		}
	}, [status]);


	return (
		<ChatContextProvider value={{ onStreamEnd, setActiveCitationId, showLoadingIcon }}>
			<div className="App">
				<div className="min-h-screen flex items-center justify-center px-4">
					<div className="bg-neutral-800 shadow-lg rounded-lg p-6 w-full">
						<div className="flex flex-col h-[80vh]">
							<div className="flex-1 overflow-y-auto my-4 bg-white p-4 rounded-lg">

								<ContentQueue items={contentBlocks} />
							</div>


							{status === 'in_progress' && (
								<div className="w-full h-8 max-w-md p-2 mb-8 bg-gray-300 rounded-lg dark:bg-gray-600 animate-pulse" />
							)}

							<form className="flex gap-2" onSubmit={submitMessage}>
								<input
									ref={inputRef}
									disabled={status !== 'awaiting_message'}
									className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
									value={input}
									placeholder="How can I help you today?"
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



