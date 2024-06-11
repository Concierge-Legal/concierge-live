"use client";
import React, { createContext, useContext, ReactNode, useState } from 'react';
import ContentQueue from "@/components/chat/contentQueue"; // Adjust path as necessary
import {
	ContentBlock,
	ContentType,
	StreamingType,
	SpeakerType,
	PipelineModel,
} from "@/lib/types"; // Assume types are exported from a types file
import { Message, useAssistant as useAssistant } from "ai/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type ChatContextType = {
	currentlyStreamingBlockId: String;
	// contentBlocks: ContentBlock[];
	showLoadingIcon: boolean;
	// assistantHook: {
	// 	status: AssistantStatus;
	// 	messages: Message[];
	// 	input: string;
	// 	submitMessage: function;
	// 	handleInputChange: function;
	// 	error: unknown
	// }
};

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const useChatContext = () => {
	const context = useContext(ChatContext);
	if (!context) throw new Error('useChatContext must be used within a ChatContextProvider');
	return context;
};

interface ChatContextProviderProps {
	children: ReactNode;
	value: ChatContextType;
}

// export default function ChatProvider({
// 	children,
// }: {
// 	children: React.ReactNode;
// }) {
// 	return (
// 		ChatContextProvider
// 	);
// }
// const [conciergeStreamBlockId, setConciergeStreamBlockId] =
// 	useState<String>("NULL");
// const [showLoadingIcon, setShowLoadingIcon] = useState<boolean>(false);
// const [contentBlocks, setContentBlocks] = useState<ContentBlock[]>([
// 	{
// 		blockId: `concierge_welcome`, // Generate a unique ID for the new block
// 		type: ContentType.Welcome,
// 		content: "Hello, my name is Concierge. How can I assist you today?",
// 		streamingType: StreamingType.fake,
// 		speaker: SpeakerType.concierge,
// 	},
// ]);
// const { status, messages, input, submitMessage, handleInputChange, error } =
// 	useAssistant({
// 		api: "/api/assistants/conciergeInitial",
// 		body: {
// 			vendor: "openai",
// 			model: "gpt-4-turbo-preview",
// 			callingFunction: "scoreQuestion",
// 			pipelineModel: new PipelineModel({ history: [], session_id: "test20" }),
// 		},
// 	});
// const [oldMessageIds, setOldMessageIds] = useState<String[]>([]);

export default function ChatContextProvider(props: ChatContextProviderProps) {
	return (
		<div>
			Nuked
		</div>
		// <ChatContext.Provider value={{
		// 	currentlyStreamingBlockId: conciergeStreamBlockId,
		// 	showLoadingIcon,
		// }}>{props.children}</ChatContext.Provider>
	);
}
