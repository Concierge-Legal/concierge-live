// components/threejs/NodeHUD.tsx
import React from 'react';
import { NetworkNode } from '@/lib/threejs/types';  // Ensure you import your correct type definitions
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

const NodeHUD: React.FC<NetworkNodeHUDProps> = ({ node }) => {
	if (!node) return null;  // Don't render if no node is selected
  
	return (
	  <div className="absolute top-20 right-1 z-50 max-w-sm">
		<Card className="bg-white shadow-lg rounded-lg overflow-hidden">
		  <CardHeader>
			<CardTitle>{node.node_name}</CardTitle>
			<CardDescription>{node.node_type}</CardDescription>
		  </CardHeader>
  
		  <CardContent className="text-gray-700">
			<div><strong>Description:</strong> {node.description}</div>
  
			{/* Example of expanded conditional rendering */}
			{node.classifier === "service" && (
			  <>
				<div><strong>Pricing Method:</strong> {node.metadata.pricingMethod}</div>
				<div><strong>Price:</strong> {node.metadata.price}</div>
			  </>
			)}
  
			{node.classifier === "product" && (
			  <>
				<div><strong>Product ID:</strong> {node.metadata.productId}</div>
				<div><strong>Stock:</strong> {node.metadata.stock}</div>
			  </>
			)}
  
			{/* More conditions can be added here */}
		  </CardContent>
		  
		  <CardFooter>
			<p className="text-sm text-gray-600">Click on other nodes to see more details</p>
		  </CardFooter>
		</Card>
	  </div>
	);
  };
  
export default NodeHUD;
