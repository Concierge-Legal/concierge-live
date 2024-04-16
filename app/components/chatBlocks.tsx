import React from 'react';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

import { useChatContext } from './chatContext';
import { useStreaming } from '../lib/hooks/useStreaming';
import { StreamingType, SpeakerType } from '../lib/types';
import ReactMarkdown from 'react-markdown';


interface ChatBlockProps {
	content: string;
	streamingType: StreamingType;
	speaker: SpeakerType;
	blockId: string;
}
export const ChatBlock: React.FC<ChatBlockProps> = ({ content, streamingType, speaker, blockId }) => {
	const { currentlyStreamingBlockId } = useChatContext();
	const displayContent = useStreaming(content, streamingType);

	const loadingComponent = currentlyStreamingBlockId === blockId ? <Bouncy /> : null;

	const backgroundColors = {
        [SpeakerType.user]: "bg-[#D6E6F2]", // Light blue for user
        [SpeakerType.concierge]: "bg-[#E0E8F9]", // Light indigo for concierge
        [SpeakerType.abe]: "bg-[#E9D8FD]", // Light purple for Abe
    };

    const textColors = {
        [SpeakerType.user]: "text-black",
        [SpeakerType.concierge]: "text-black",
        [SpeakerType.abe]: "text-black",
    };

	const iconSrc = {
		//[SpeakerType.assistant]: "/path/to/userIcon.png", // Replace with actual path
		[SpeakerType.concierge]: "/home/Concierge.png",   // Replace with actual path
		[SpeakerType.abe]: "/home/ASKABELOGO.png",        // Replace with actual path
		[SpeakerType.user]: "/fake.png"
	};


	const placeholderIcons = {
		[SpeakerType.concierge]: <ConciergeIconPlaceholder />,
		[SpeakerType.abe]: <AbeIconPlaceholder />,
		[SpeakerType.user]: <UserIconPlaceholder />
	};

	return (
		<div className={`flex items-center ${backgroundColors[speaker]} p-4 rounded-md shadow mb-2`}>
            <div className="mr-2">
                {placeholderIcons[speaker]}
            </div>
            <div className={`flex-1 ${textColors[speaker]} text-sm font-semibold`}>
                <ReactMarkdown>
                    {displayContent}
                </ReactMarkdown>
            </div>
            {loadingComponent}
        </div>
	);
};


// This is dumb and needs to be nuked
export const Bouncy = () => {
	return (
		<div className="flex justify-left items-left">
			<div className="container items-left justify-left">
				<div className="cube"><div className="cube__inner"></div></div>
				<div className="cube"><div className="cube__inner"></div></div>
				<div className="cube"><div className="cube__inner"></div></div>
			</div>

			<style>
				{`
			.container {
			  --uib-size: 20px;
			  --uib-color: blue;
			  --uib-speed: 1.25s;
			  display: flex;
			  align-items: flex-start;
			  padding-bottom: 0%;
			  justify-content: space-evenly;
			  width: var(--uib-size);
			  height: calc(var(--uib-size) * 0.6);
			}
			
			.cube {
			  flex-shrink: 0;
			  width: calc(var(--uib-size) * 0.2);
			  height: calc(var(--uib-size) * 0.2);
			  animation: jump var(--uib-speed) ease-in-out infinite;
			  margin: 3px;
			}
			
			.cube__inner {
			  display: block;
			  height: 100%;
			  width: 100%;
			  border-radius: 25%;
			  background-color: var(--uib-color);
			  transform-origin: center bottom;
			  animation: morph var(--uib-speed) ease-in-out infinite;
			  transition: background-color 0.3s ease;
			}
			
			.cube:nth-child(2) {
			  animation-delay: calc(var(--uib-speed) * -0.36);
			
			  .cube__inner {
				animation-delay: calc(var(--uib-speed) * -0.36);
			  }
			}
			.cube:nth-child(3) {
			  animation-delay: calc(var(--uib-speed) * -0.2);
			
			  .cube__inner {
				animation-delay: calc(var(--uib-speed) * -0.2);
			  }
			}
			
			@keyframes jump {
			  0% {
				transform: translateY(0px);
			  }
		  
			  30% {
				transform: translateY(0px);
				animation-timing-function: ease-out;
			  }
		  
			  50% {
				transform: translateY(-200%);
				animation-timing-function: ease-in;
			  }
		  
			  75% {
				transform: translateY(0px);
				animation-timing-function: ease-in;
			  }
			}
			
			@keyframes morph {
			  0% {
				transform: scaleY(1);
			  }
		  
			  10% {
				transform: scaleY(1);
			  }
		  
			  20%,
			  25% {
				transform: scaleY(0.6) scaleX(1.3);
				animation-timing-function: ease-in-out;
			  }
		  
			  30% {
				transform: scaleY(1.15) scaleX(0.9);
				animation-timing-function: ease-in-out;
			  }
		  
			  40% {
				transform: scaleY(1);
			  }
		  
			  70%,
			  85%,
			  100% {
				transform: scaleY(1);
			  }
		  
			  75% {
				transform: scaleY(0.8) scaleX(1.2);
			  }
			}
		  `}
			</style>
		</div>
	);
};
export const ConciergeIconPlaceholder: React.FC = () => {
	return (
		<div className="flex items-center justify-center h-8 w-8 bg-purple-500 text-white text-sm font-semibold rounded-full">
			C
		</div>
	);
};

export const AbeIconPlaceholder: React.FC = () => {
	return (
		<div className="flex items-center justify-center h-8 w-8 bg-teal-500 text-white text-sm font-semibold rounded-full">
			A
		</div>
	);
};
export const UserIconPlaceholder: React.FC = () => {
	return (
		<div className="flex items-center justify-center h-8 w-8 bg-blue-500 text-white text-sm font-semibold rounded-full">
			U
		</div>
	);
};
