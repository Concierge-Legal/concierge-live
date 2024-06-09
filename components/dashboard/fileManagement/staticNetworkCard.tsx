"use client";
import React, { useState } from 'react';
import { NetworkNode } from '@/lib/utils/types';

interface StaticNetworkCardProps {
	node: NetworkNode;
}

export const StaticNetworkCard: React.FC<StaticNetworkCardProps> = ({ node }) => {
	const [isExpanded, setIsExpanded] = useState(false);

	const toggleExpand = () => {
		setIsExpanded(!isExpanded);
	};

	return (
		<div className="bg-gray-800 p-6 rounded-lg shadow-lg cursor-pointer" onClick={toggleExpand}>
			<div className="flex items-center justify-between mb-2">
				<h3 className="text-lg font-semibold">{node.node_name}</h3>
				{/* this will be replaced with a dynamic badge based on the network's classifier (ie. service, member, product) */}
				<span className="px-2 py-1 bg-gray-700 rounded text-xs">{node.classifier}</span>

			</div>
			{!isExpanded && (
				<div className="mt-4">
					<div className="w-full h-32 bg-gray-700 rounded-lg flex items-center justify-center">
						<span className="text-gray-400">Image Placeholder</span>
					</div>
				</div>
			)}
			{isExpanded && (
				<>
					<p className="mt-4">{node.description}</p>
				</>
			)}
		</div>
	);
};

export const StaticNetworkCardSkeleton: React.FC<{}> = () => {
	const [isExpanded, setIsExpanded] = useState(false);

	const toggleExpand = () => {
		setIsExpanded(!isExpanded);
	};

	return (
		<div className="bg-gray-800 p-6 rounded-lg shadow-lg cursor-pointer" onClick={toggleExpand}>
			<div className="flex items-center justify-between mb-2">
				<h3 className="text-lg font-semibold">Loading</h3>
				{/* this will be replaced with a dynamic badge based on the network's classifier (ie. service, member, product) */}
				<span className="px-2 py-1 bg-gray-700 rounded text-xs">Tag</span>

			</div>
		</div>
	);
};


