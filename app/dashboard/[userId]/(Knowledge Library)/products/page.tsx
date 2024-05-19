import { ProductFile } from "@/components/dashboard/fileManagement/columns";

export default function ProductsKnowledgeDashboardSubpage({ params }: { params: { userId: string } }) {
	const productFiles: ProductFile[] = [
		{
		  id: "prod001",
		  name: "John Doe Legal Services",
		  type: "Service",
		  size: "N/A", // Not applicable for service entities
		  lastModified: "2023-05-01",
		  fullName: "John Doe",
		  contactInformation: {
			email: "john.doe@example.com",
			discord: "johnDoe#1234",
			website: "www.johndoelaw.com",
			profilePictureUrl: "http://example.com/pfp/johndoe.jpg"
		  },
		  parentOrganization: {
			title: "Doe Legal Group",
			entityType: "LLC",
			purpose: "Legal Services in Tech Industry"
		  },
		  authorizedJurisdictions: ["California", "Marshall Islands"],
		  description: "Experienced legal professional specializing in tech and web3.",
		  servicesOffered: [
			{
			  name: "Contract Review",
			  price: "$200 per hour",
			  pricingMethod: "Hourly",
			  retainer: true
			},
			{
			  name: "Legal Consultation",
			  price: "$150 per hour",
			  pricingMethod: "Hourly",
			  retainer: false
			}
		  ]
		},
		// Additional product files can be similarly defined
	  ];
	  
	return (
		<div className="min-h-screen bg-white px-8 py-12">
			<div className="max-w-7xl mx-auto">
				<div className="bg-gray-100 text-black p-8 rounded-lg shadow-lg mb-12 text-center">
					<h1 className="text-5xl font-bold">Products and Services Knowledge Upload</h1>
				</div>


			</div>
		</div>

	);
};

