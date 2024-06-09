// pages/staticnetworks.tsx
import React from 'react';
import { createClient } from '@/lib/utils/supabase/client';
import { StaticNetworkCard, StaticNetworkCardSkeleton } from '@/components/dashboard/fileManagement/staticNetworkCard';
import { NetworkNode } from '@/lib/utils/types';

async function getNetworkNodes() {
	const supabase = createClient()
	const { data, error } = await supabase.from("network_nodes")
	.select("id, parent, node_children, node_type,classifier, slug, node_name, description, metadata, reverse_hyde, tags, traffic, settings, metrics, ownership")
	.eq("node_type", "network")
	if (error) {
        console.error("Error fetching data:", error);
        return []; // or handle the error as needed
    }

    const networkNodes: NetworkNode[] = data?.map(item => ({
        id: item.id,
        parent: item.parent!,
        children: item.node_children, // Assuming this maps to a children property
        node_type: item.node_type!,
        classifier: item.classifier!,
        slug: item.slug || undefined,
        node_name: item.node_name || undefined,
        description: item.description || undefined, 
        metadata: item.metadata,
        reverseHyde: item.reverse_hyde,
        tags: item.tags,
        traffic: item.traffic,
        settings: item.settings,
        metrics: item.metrics,
        ownership: item.ownership,
    })) || [];
	console.log(JSON.stringify(networkNodes, null, 2))
	return networkNodes
}


export default async function DemoNetworkDirectory({ params }: { params: { organizationId: string } }) {
	
	const networkNodes = await getNetworkNodes()

	return (
		<div className="min-h-screen bg-gray-900 text-white px-8 py-12">
			<div className="max-w-4xl mx-auto">
				<div className="bg-gray-800 p-8 rounded-lg shadow-lg mb-12 text-center">
					<h1 className="text-5xl font-bold text-indigo-500">Network Directory</h1>
				</div>
				{networkNodes && networkNodes.length > 0 ? (
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
						{networkNodes.map((networkNode: NetworkNode) => (
							<StaticNetworkCard key={networkNode.id} node={networkNode} />
						))}
					</div>
				) : (
					<div className="flex justify-center items-center h-64">
						<p className="text-gray-400">No networks found.</p>
					</div>
				)}
			</div>
		</div>
	);
};

// export const NetworkDirectorySkeleton: React.FC = () => {
	


// 	return (
// 		<div className="min-h-screen bg-gray-900 text-white px-8 py-12">
// 			<div className="max-w-4xl mx-auto">
// 				<div className="bg-gray-800 p-8 rounded-lg shadow-lg mb-12 text-center">
// 					<h1 className="text-5xl font-bold text-indigo-500">Network Directory</h1>
// 				</div>
// 				<div>
// 					Loading...
// 				</div>
// 			</div>
// 		</div>
// 	);
// };




