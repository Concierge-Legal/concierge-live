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

	const handleUserInput = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault(); // Prevent the default form submission action

		if (!inputText.trim()) return;  // Ensure there's non-whitespace input
		// Call the UseAssistant function to call the API
		submitMessage();
		// Add a new contentBlock
		addContentBlock(ContentType.Question, StreamingType.noStream, inputText, SpeakerType.user);

	};

	const inputRef = useRef<HTMLInputElement>(null);
	useEffect(() => {
		if (status === 'awaiting_message') {
			inputRef.current?.focus();
		}
	}, [status]);


	return (
		<div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
			{error != null && (
				<div className="relative px-6 py-4 text-white bg-red-500 rounded-md">
					<span className="block sm:inline">
						Error: {(error as any).toString()}
					</span>
				</div>
			)}

			{messages.map((m: Message) => (
				<div
					key={m.id}
					className="whitespace-pre-wrap"
					style={{ color: roleToColorMap[m.role] }}
				>
					<strong>{`${m.role}: `}</strong>
					{m.role !== 'data' && m.content}
					{m.role === 'data' && (
						<>
							{(m.data as any).description}
							<br />
							<pre className={'bg-gray-200'}>
								{JSON.stringify(m.data, null, 2)}
							</pre>
						</>
					)}
					<br />
					<br />
				</div>
			))}

			{status === 'in_progress' && (
				<div className="w-full h-8 max-w-md p-2 mb-8 bg-gray-300 rounded-lg dark:bg-gray-600 animate-pulse" />
			)}

			<form onSubmit={handleUserInput}>
				<input
					ref={inputRef}
					disabled={status !== 'awaiting_message'}
					className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
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




		// <ChatContextProvider value={{ onStreamEnd, setActiveCitationId, showLoadingIcon }}>
		// 	<div className="App">
		// 		<div className="min-h-screen flex items-center justify-center px-4">
		// 			<div className="bg-neutral-800 shadow-lg rounded-lg p-6 w-full">
		// 				<div className="flex flex-col h-[80vh]">
		// 					<div className="flex-1 overflow-y-auto my-4 bg-white p-4 rounded-lg">

		// 						<ContentQueue items={contentBlocks} />
		// 					</div>
		// 					<form className="flex gap-2" onSubmit={handleUserInput}>
		// 						<input
		// 							type="text"
		// 							className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
		// 							placeholder="Type your message..."
		// 							value={input}
		// 							onChange={handleInputChange}
		// 						/>
		// 						<button
		// 							type="submit"
		// 							className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
		// 						>
		// 							Send
		// 						</button>
		// 					</form>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>
		// </ChatContextProvider>


	);
}



