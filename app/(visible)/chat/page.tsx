
import React, { useState, useEffect } from 'react';
import { ChatContextProvider } from '../../components/chatContext';
import ContentQueue from '../../components/contentQueue'; // Adjust path as necessary
import { ContentBlock, ContentType, StreamingType, SpeakerType } from '../../lib/types'; // Assume types are exported from a types file

export default function Chat() {

	const [contentBlocks, setContentBlocks] = useState<ContentBlock[]>([]);
	const [showLoadingIcon, setShowLoadingIcon] = useState<boolean>(false);
	const onStreamEnd = (concurrentStreaming: boolean) => console.log("Stream ended:", concurrentStreaming);
	const setActiveCitationId = (citationId: string) => console.log("Citation ID:", citationId);

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

	// Add initial Welcome Message from Concierge
	useEffect(() => {
        const welcomeContent = "Hello, my name is Concierge. How can I assist you today?";
        addContentBlock(ContentType.Welcome, StreamingType.fake, welcomeContent, SpeakerType.concierge);
    }, []);

	const handleNewInput = async (input: string) => {
		const inputText = input.trim();
		if (!inputText) return;

		addContentBlock(ContentType.Question, StreamingType.noStream, inputText, SpeakerType.user);

		
	}



	const askAbeNewQuestion = async (question: string) => {
		const questionText = question.trim();
		if (!questionText) return;
		
		// Show the user's question
		addContentBlock(ContentType.Question, StreamingType.noStream, questionText, SpeakerType.user);
		// Let Concierge tell the user it's asking Abe about the legal question
		addContentBlock(ContentType.Answer, StreamingType.fake, "Great question. I can't provide legal information or education, so I'll my friend Abe to answer this for you", SpeakerType.concierge )
	
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
	return (
		<ChatContextProvider value={{ onStreamEnd, setActiveCitationId, showLoadingIcon }}>
			<div className="App">
				<div className="min-h-screen bg-gradient-to-b from-[#0E2F2B] via-[#184E48] to-[#081209] flex items-center justify-center">
					<div className="bg-neutral-800 shadow-md rounded-lg p-6 w-full max-w-md">
						<div className="space-y-4">
							<div className="overflow-y-auto h-96 bg-white p-4 rounded-lg">
								<ContentQueue items={contentBlocks} />
							</div>
							<form className="flex gap-2">
								<input
									type="text"
									className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700"
									placeholder="Type your message..."

								/>
								<button
									type="submit"
									className="bg-[#3E8F86] text-white px-4 py-2 rounded-lg hover:bg-emerald-800"
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

