
import { NodeObject as BaseNodeObject } from 'react-force-graph-3d';


export interface NetworkNodeProps {
	node_id?: string,
	parent?: string,
	node_children?: any,
	node_type?: string,
	classifier?: string,
	slug?: string,
	node_name?: string,
	description?: string,
	metadata?: any,
	reverse_hyde?: string[],
	tags?: any,
	traffic?: any,
	settings?: any,
	metrics?: any,
	ownership?: any

}



export type NetworkNode = BaseNodeObject<NetworkNodeProps>;



export interface Link {
	source: string;
	target: string;
}


export function getColor(node: NetworkNode): string{
	
	switch(node.classifier!) {
	case "root":
		return "purple";
	case "voting-member":
		return  "hotpink";
	case "subtitle":
		return "red";
	case "chapter":
		return "orange";
	case "subchapter":
		return "yellow";
	case "service":
		return "green";
	case "form":
		return "blue";
	default:
		return "white";
	}
}
// export function getRadius(node: Node): number {
// 	//console.log(node.level_classifier)
// 	switch(node.level_classifier!) {
// 	case "CORPUS":
// 		return 10;
// 	case "title":
// 		return  5;
// 	case "subtitle":
// 		return 4;
// 	case "chapter":
// 		return 3;
// 	case "subchapter":
// 		return 3;
// 	case "part":
// 		return 2;
// 	case "subpart":
// 		return 1;
// 	default:
// 		return 1;
// 	}
// }
// export function getOpacity(node: Node): number {
// 	if (node.status && node.status != "definitions") {
// 		return 0;
// 	} else {
// 		return 1;
// 	}
// }
// export function dagIgnore(node: Node): boolean {
// 	switch(node.level_classifier!) {
// 		case "CORPUS":
// 			return true;
// 		case "title":
// 			return  false;
// 		case "subtitle":
// 			return false;
// 		case "chapter":
// 			return false;
// 		case "subchapter":
// 			return false;
// 		case "part":
// 			return false;
// 		case "subpart":
// 			return false;
// 		case "hub":
// 			return true;
// 		default:
			
// 			return false;
// 		}
// }