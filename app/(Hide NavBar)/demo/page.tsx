import { redirect } from "next/navigation";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function DemoPicker() {


	// List of demo organizations
	const organizations = [
		{
			id: '9c13121b-1a06-4c06-936c-fd5be7b207bf',
			name: 'DemoDAO LLC',
			description: 'Demo DAO is a pioneering organization committed to leveraging blockchain technology and smart contracts to create a decentralized, autonomous future.'
		},
		{
			id: 'fake',
			name: 'Fake Company',
			description: 'More coming soon!'
		},
		// You can add more organizations here as needed
	];



	return (

		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
			<h1 className="text-xl font-bold mb-6">Select a Demo Organization</h1>
			<div className="space-y-4 w-full max-w-md">
				{organizations.map((org) => (
					<Card key={org.id} className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
						<CardHeader>
							<CardTitle className="text-lg font-semibold">
								{org.name}
							</CardTitle>
						</CardHeader>
						<CardContent className="p-4">
							<p className="mb-4">
								{org.description}
							</p>
							<Button
								className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
								asChild
							>
								<Link href={`/demo/${org.id}/home`} className="block text-center" inert={org.id=="fake"}>
									Visit Demo
								</Link>
							</Button>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);

}