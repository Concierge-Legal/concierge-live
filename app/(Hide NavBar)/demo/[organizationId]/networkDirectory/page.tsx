// pages/staticnetworks.tsx
import React from 'react';
import { createClient } from '@/lib/utils/supabase/client';
import { StaticNetworkCard, StaticNetworkCardSkeleton } from '@/components/dashboard/fileManagement/staticNetworkCard';
import { NetworkNode } from '@/lib/utils/types';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

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
	
	return networkNodes
}


export default async function DemoNetworkDirectory({ params }: { params: { organizationId: string } }) {
	
	const networkNodes = await getNetworkNodes()

	return (
        <div className="flex flex-col min-h-screen px-8 py-12">
            <div className="mx-auto">
                <div className="p-8 rounded-lg shadow-lg mb-6 text-center">
                    <h1 className="text-5xl font-bold mb-4">View DemoDAO's Network Directory</h1>
                    <p className="text-lg mb-6">Explore, Search, and Interact with all of our individual members, all in one place.</p>
                    {/* Placeholder banner graphic */}
                    <div className="h-48 rounded-lg shadow-inner mb-6 bg-purple-400">
                        <p className="flex items-center justify-center h-full">Banner Graphic</p>
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold">Search</h2>
                        <p>Use the search bar below to quickly find network members.</p>
                        <div className="flex gap-4 justify-center">
                            <Input type="text" placeholder="Network Search" className="flex-1" />
                            <Button type="submit" className="font-bold py-2 px-4 rounded">Search</Button>
                        </div>
                    </div>
                </div>
                {networkNodes && networkNodes.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {networkNodes.map((networkNode) => (
                            <div key={networkNode.id} className=" shadow-lg rounded-lg p-4">
                                <StaticNetworkCard node={networkNode} />
                            </div>
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




