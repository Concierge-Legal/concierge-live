"use client";
// /app/explore/page.tsx
import React, { useEffect, useState, useRef } from 'react';
import { NetworkNode, Link, getColor } from '@/lib/threejs/types';
import NodeHUD from '@/components/threejs/nodeHud';
import { fetchNetworkNodes } from '@/lib/threejs/dynamicGraph';
import dynamic from 'next/dynamic';


const NoSSRForceGraph3D = dynamic(() => import('@/components/threejs/forceGraph'), {
	ssr: false,
});
// https://github.com/d3/d3-force
// https://github.com/vasturiano/3d-force-graph/tree/master




const GraphPage: React.FC = () => {
	const [performanceNodeData, setPerformanceNodeData] = useState<NetworkNode[]>([]);
	// Make this a Dictionary/set lmao
	const [linkData, setLinkData] = useState<Link[]>([]);
	const [selectedNode, setSelectedNode] = useState<NetworkNode | null>(null);
	const hasFetched = useRef(false);

	useEffect(() => {
		if (!hasFetched.current) {
			hasFetched.current = true;
			
			fetchNetworkNodes(setPerformanceNodeData, setLinkData);
			
		}
		
	}, []);

	const handleNodeClick = async (node: NetworkNode, event: MouseEvent) => {
		
		setSelectedNode(node)
		
		
		

	};
	return (
		<>
			{/* https://github.com/vasturiano/react-force-graph */}
			<NoSSRForceGraph3D
				graphData={{ nodes: performanceNodeData, links: linkData }}
				nodeRelSize={4}
				//nodeVal="value"
				nodeLabel="node_name"
				nodeOpacity={0.8}
				// nodeThreeObject={node => {
				// 	const sprite = new SpriteText(node.node_name);
				// 	sprite.color = getColor(node);
				// 	sprite.textHeight = 8;
				// 	return sprite;
				//   }}
				//dagNodeFilter={dagIgnore}
				nodeColor={getColor}
				onNodeClick={handleNodeClick}
				nodeResolution={10}
				//dagMode="radialout"
				linkColor="color"
				linkDirectionalParticles={2}
				linkDirectionalParticleSpeed={0.001}
				linkWidth="width"
				//linkDirectionalParticleColor={getColor}
				showNavInfo={true}
				controlType='orbit'


			/>
			
			<NodeHUD
				node={selectedNode}
			/>
			{/* <NodeHUD
				node={selectedNode}
			/>
			<NodeTextHUD
				node_text={selectedNode ? selectedNode.node_text as unknown as NodeText : null}
			/> */}
		</>








	);
};

export default GraphPage;
