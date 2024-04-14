import React from 'react';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

import { useChatContext } from './chatContext';
import { useStreaming } from '../lib/hooks/useStreaming';
import { StreamingType } from '../lib/types';

interface ChatBlockProps {
	content: string;
	streamingType: StreamingType;
}

export const WelcomeBlock: React.FC<ChatBlockProps> = ({ content, streamingType }) => {
	const displayContent = useStreaming(content, streamingType);
	return (
		<div className="w-full p-4 bg-[#957DAD] text-white rounded-md shadow"> {/* Concierge color */}
			<p className="text-sm font-semibold">{displayContent}</p>
		</div>
	);
};

export const QuestionBlock: React.FC<ChatBlockProps> = ({ content, streamingType }) => {
	const displayContent = useStreaming(content, streamingType);
	return (
		<div className="w-full flex flex-col items-end">
			<div className="p-2 bg-[#4D7C8A] text-white rounded-lg shadow"> {/* User color */}
				<h3 className="text-xl">{displayContent}</h3>
			</div>
		</div>
	);
};

export const AnswerBlock: React.FC<ChatBlockProps> = ({ content, streamingType }) => {
	const displayContent = useStreaming(content, streamingType);
	return (
		<div className="p-2 bg-[#49a6aa] text-white rounded-lg shadow mb-2"> {/* Abe color */}
			{displayContent}
		</div>
	);
};



export const ConciergeIconLabel: React.FC<ChatBlockProps> = ({ content, streamingType }) => {
	const displayContent = useStreaming(content, streamingType);
	const { showLoadingIcon } = useChatContext();
	const [neverLoadAgain, setNeverLoadAgain] = useState(false);

	useEffect(() => {
		if (!showLoadingIcon) {
			setNeverLoadAgain(true);
		}
	}, [showLoadingIcon]);

	return (
		<div className="flex flex-col items-start">
			<div className="flex mb-0">
				<div className="h-8 w-8 rounded-full flex mr-2 bg-[#957DAD]">
					<span>
						{/* <Image
							src="/home/Concierge.png"
							alt="Concierge"
							width={40}
							height={50}
						/> */}
					</span>
				</div>
				<p className="text-xl font-imfell">Concierge {displayContent}</p>
				{(!neverLoadAgain && showLoadingIcon) && (
					<div>Loading...</div>  // Placeholder for an actual loading component or animation
				)}
			</div>
		</div>
	);
};


export const AbeIconLabel: React.FC<ChatBlockProps> = ({ content, streamingType }) => {
	const { showLoadingIcon } = useChatContext();
	const [isLoading, setIsLoading] = useState(showLoadingIcon);

	useEffect(() => {
		// Start loading when component mounts and content is being "streamed"
		if (streamingType !== StreamingType.noStream) {
			setIsLoading(true);
		}

		// Assuming content is streamed or set after some API call or calculation,
		// stop loading once content is received or after a delay
		if (content) {
			setIsLoading(false);
		}

		// Optionally, set a timeout to stop loading if it takes too long
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 5000);  // Stop loading after 5 seconds

		return () => clearTimeout(timer);
	}, [content, streamingType]);

	return (
		<div className="flex flex-col items-start">
			<div className="flex mb-0">
				<div className="h-8 w-8 rounded-full flex mr-2">
					<Image
						src="/home/ASKABELOGO.png"
						alt="Legal Research Image"
						width={40}
						height={50}
					/>
				</div>
				<p className="text-xl font-imfell">Abe</p>
				{isLoading && <Bouncy />}
			</div>
		</div>
	);
};



export const UserIconLabel: React.FC<ChatBlockProps> = ({ content, streamingType }) => {

	return (
		<div className="flex items-center justify-end mb-2">
			<p className="text-sm mr-2">You</p>
			<div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">
				{/* Placeholder for icon */}
				<span>U</span>
			</div>

		</div>
	);
};



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