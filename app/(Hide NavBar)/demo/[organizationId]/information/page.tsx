
export default function DemoInformation({ params }: { params: { organizationId: string } }) {
	return (
		<div className="max-w-4xl mx-auto p-6 text-gray-200 rounded-lg shadow-md">
			<h2 className="text-2xl font-bold mb-4">General Information</h2>
			<p className="mb-4">Demo DAO is an innovative leader in the field of decentralized autonomous organizations. We strive to empower businesses and individuals by providing robust legal frameworks and advanced technological solutions.</p>
			<p className="mb-4">Our services include:</p>
			<ul className="list-disc pl-5 mb-4">
				<li>Blockchain Legal Consulting</li>
				<li>Smart Contract Development and Analysis</li>
				<li>AI-Powered Mediation Services</li>
				<li>Regulatory Compliance and Strategy Development</li>
			</ul>
			<p className="mb-4">Our goal is to make blockchain technology accessible and beneficial for everyone. We are committed to maintaining the highest standards of integrity, transparency, and excellence in all our endeavors.</p>
			<img src="https://via.placeholder.com/800x400" alt="General Information" className="w-full h-auto mt-4 rounded-lg shadow-sm" />
		</div>

	);
}