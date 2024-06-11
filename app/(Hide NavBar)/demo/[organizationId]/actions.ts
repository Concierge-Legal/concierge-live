'use server';

import { createAI, getAIState, getMutableAIState } from 'ai/rsc';
import { openai } from '@ai-sdk/openai';
import { ReactNode } from 'react';
import { z } from 'zod';
import { nanoid } from 'nanoid';


export interface ServerMessage {
  role: 'user' | 'assistant' | 'function';
  content: string;
}

export interface ClientMessage {
  id: string;
  role: 'user' | 'assistant' | 'function';
  display: ReactNode;
}

export type AIState = Array<{
	role: 'user' | 'assistant';
	content: string;
  }>;
  
  export type UIState = Array<{
	id: string;
	role: 'user' | 'assistant';
	display: ReactNode;
  }>;
  
  async function sendMessage(message: string) {
	'use server';
  
	// Handle the message, covered in the following sections.
  }
  
  // Create the AI provider with the initial states and allowed actions
  export const AI = createAI({
	initialAIState: [] as AIState,
	initialUIState: [] as UIState,
	actions: {
	  sendMessage,
	},
  });