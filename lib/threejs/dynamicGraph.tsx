// /lib/api.ts
import { createClient } from '@supabase/supabase-js';
import { NetworkNode, Link } from '@/lib/threejs/types'; // Adjust the import as per your file structure


export const fetchNetworkNodes = async (
	setNodeData: React.Dispatch<React.SetStateAction<NetworkNode[]>>,
	setLinkData: React.Dispatch<React.SetStateAction<Link[]>>
): Promise<void> => {
	

	console.log(`=== Entering fetchNetworkNodes ===`);
	
	const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
	const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
	const supabase = createClient(supabaseUrl, supabaseKey);

	const { data, error } = await supabase
		.from('network_nodes')
		.select(`
            id,
			parent,
			node_children,
			node_type,
			classifier,
			slug,
			node_name,
			description,
			metadata,
			reverse_hyde,
			tags,
			traffic,
			settings,
			metrics,
			ownership
        `);

	if (error) {
		console.error(`Error fetching nodes`, error);
		return;
	}
	// Get all new nodes for this parentId
	const newNodes = data?.map(node => ({ ...node, node_id: node.id }));
	const newLinks = newNodes?.map(node => ({
		source: node.parent,
		target: node.node_id,
		key: `${node.parent}-${node.node_id}`
	}));
	console.log(`NewNodes: ${JSON.stringify(newNodes)}`);
	console.log(`NewLinks: ${JSON.stringify(newLinks)}`);

	setNodeData(prev => [...prev, ...newNodes]);
	setLinkData(prev => [...prev, ...newLinks]);

	
	return;
};



