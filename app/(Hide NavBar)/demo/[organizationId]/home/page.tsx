
export default function DemoHome({ params }: { params: { organizationId: string } }) {
	return (
		<div className="max-w-4xl mx-auto p-6 text-gray-200 rounded-lg shadow-md">
			<h2 className="text-2xl font-bold mb-4">Welcome to Demo DAO</h2>
			<p className="mb-4">Demo DAO is a pioneering organization committed to leveraging blockchain technology and smart contracts to create a decentralized, autonomous future. Our mission is to provide cutting-edge solutions that enhance transparency, security, and efficiency in various industries.</p>
			<p className="mb-4">Our team of experts is dedicated to driving innovation and offering unparalleled services in the realm of cryptolaw and legal engineering. Explore our services and discover how we can assist you in navigating the complexities of the digital world.</p>
			<img src="https://via.placeholder.com/800x400" alt="Demo DAO" className="w-full h-auto mt-4 rounded-lg shadow-sm" />
		</div>

	);

}
