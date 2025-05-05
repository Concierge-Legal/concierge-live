import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function ChatbotFeatures() {
	return (
		<main className="bg-background">
			{/* Hero Section */}
			<section className="bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] text-white py-20 px-6 md:px-16">
				<div className="container mx-auto">
					<div className="max-w-3xl">
						<h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
							Unlock DAO Potential
						</h1>
						<p className="text-xl md:text-2xl text-white/90 font-light mb-10">
							Discover our AI-powered concierge designed to optimize DAO performance and member engagement.
						</p>
						<Button className="bg-white text-[#1e3a8a] hover:bg-white/90 px-8 py-3 rounded-md text-lg font-semibold shadow-xl transition-all transform hover:scale-105 duration-200">
							<Link href="/demo">Experience the Demo</Link>
						</Button>
					</div>
				</div>
			</section>

			{/* Key Features Section */}
			<section className="py-20 px-6 md:px-16 bg-white">
				<div className="container mx-auto">
					<h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
						Key Concierge Features
					</h2>
					<p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-16">
						Our AI concierge combines cutting-edge technology with intuitive design to deliver exceptional value to your organization.
					</p>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="bg-white drop-shadow-xl rounded-md border border-gray-100 overflow-hidden">
							<div className="flex flex-col md:flex-row">
								<div className="p-8 md:w-1/2">
									<h3 className="text-2xl font-bold mb-4">
										Network Directory
									</h3>
									<p className="text-gray-700">
										Utilize our comprehensive organizational mapping and AI
										tools to connect users with the right network members
										effortlessly.
									</p>
								</div>
								<div className="md:w-1/2">
									<Image
										src="/homepage/network.jpg"
										alt="Network Directory"
										width={400}
										height={400}
										className="h-full w-full object-cover"
									/>
								</div>
							</div>
						</div>

						<div className="bg-white drop-shadow-xl rounded-md border border-gray-100 overflow-hidden">
							<div className="flex flex-col md:flex-row">
								<div className="p-8 md:w-1/2">
									<h3 className="text-2xl font-bold mb-4">
										Management Tools
									</h3>
									<p className="text-gray-700">
										Utilize our robust dashboard for complete customization of
										your Concierge instance, offering timely analytics on user
										interactions.
									</p>
								</div>
								<div className="md:w-1/2 bg-gray-100 flex items-center justify-center">
									<Image
										src="/features/dashboardtemp.png"
										alt="Management Tools"
										width={400}
										height={400}
										className="h-full w-full object-cover"
									/>
								</div>
							</div>
						</div>
					</div>

					<div className="mt-8">
						<div className="bg-white drop-shadow-xl rounded-md border border-gray-100 overflow-hidden">
							<div className="flex flex-col md:flex-row">
								<div className="md:w-1/2 p-8">
									<h3 className="text-3xl font-bold mb-4">
										Dynamic Knowledge Extension
									</h3>
									<p className="text-gray-700 mb-6">
										Provide users with direct access to your entire library of
										organizational information through our AI interface. Ensure your
										concierge always has the most up-to-date information.
									</p>
									<Button className="bg-[#3b82f6] text-white hover:bg-[#2563eb] rounded-md px-6 py-2 transition-colors">
										Learn More
									</Button>
								</div>
								<div className="md:w-1/2">
									<Image
										src="/homepage/knowledgehub.jpg"
										alt="Knowledge Extension"
										width={800}
										height={900}
										className="h-full w-full object-cover"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Benefits for Members Section */}
			<section className="py-20 px-6 md:px-16 bg-gray-50">
				<div className="container mx-auto">
					<h2 className="text-4xl md:text-5xl font-bold text-left mb-16">
						Solutions your members will love
					</h2>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
						<div className="flex flex-col">
							<div className="rounded-lg overflow-hidden mb-6 h-64 relative">
								<Image
									src="/homepage/connect.jpg"
									alt="Enhanced Visibility"
									fill
									className="object-cover"
								/>
							</div>
							<h3 className="text-2xl font-bold mb-4">
								Enhanced Visibility and Exposure
							</h3>
							<p className="text-gray-700">
								Ensure network members are visible and accessible through
								our organizational network directory, increasing their reach and discoverability.
							</p>
						</div>

						<div className="flex flex-col">
							<div className="rounded-lg overflow-hidden mb-6 h-64 relative">
								<Image
									src="/homepage/connection.jpg"
									alt="User Connections"
									fill
									className="object-cover"
								/>
							</div>
							<h3 className="text-2xl font-bold mb-4">
								User Connections
							</h3>
							<p className="text-gray-700">
								Dynamically connect users with the right network members
								via our AI, facilitating better interactions and
								conversions.
							</p>
						</div>

						<div className="flex flex-col">
							<div className="rounded-lg overflow-hidden mb-6 h-64 relative">
								<Image
									src="/homepage/optimization.jpg"
									alt="Brand Optimization"
									fill
									className="object-cover"
								/>
							</div>
							<h3 className="text-2xl font-bold mb-4">
								Brand Optimization Platform
							</h3>
							<p className="text-gray-700">
								Enable network members to intuitively optimize their
								branding and dynamically present their portfolio of
								products and services.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Knowledge Extension Section */}
			<section className="relative py-24 md:py-36 overflow-hidden">
				<Image
					src="/homepage/clouds.jpg"
					alt="Background"
					layout="fill"
					objectFit="cover"
					className="absolute inset-0 opacity-20"
				/>
				<div className="relative container mx-auto px-6 md:px-16">
					<div className="flex flex-col md:flex-row items-center gap-12">
						<div className="w-full md:w-1/2 text-black">
							<h2 className="text-3xl md:text-5xl font-bold mb-6">
								Knowledge Extension
							</h2>
							<p className="text-lg leading-relaxed mb-8">
								Provide users with direct access to your entire library of
								organizational information through our AI interface. Make your knowledge
								accessible and actionable.
							</p>
							<Button className="bg-[#3b82f6] text-white hover:bg-[#2563eb] transition-colors rounded-md px-6 py-2">
								Explore Knowledge Features
							</Button>
						</div>
						<div className="w-full md:w-1/2">
							<div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
								<Image
									src="/features/lib3.jpg"
									alt="Knowledge Library"
									layout="fill"
									objectFit="cover"
									className="rounded-lg"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* User Solutions Section */}
			<section className="py-20 px-6 md:px-16 bg-white">
				<div className="container mx-auto">
					<h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
						Solutions your users will love
					</h2>
					<p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-16">
						Make complex DAO interactions simple and accessible for all your users
					</p>

					<div className="space-y-8">
						<div className="bg-white drop-shadow-xl rounded-md p-8 flex flex-col md:flex-row items-center gap-8">
							<div className="md:w-1/2">
								<h3 className="text-2xl font-bold mb-4">
									Organizational Information Access
								</h3>
								<p className="text-gray-700">
									Concierge Chat dynamically provides your users with
									essential organizational information, guiding them through
									the intricacies of the DAO.
								</p>
							</div>
							<div className="md:w-1/2 flex justify-center">
								<Image
									src="/icons/solution.png"
									alt="Organizational Information"
									width={200}
									height={100}
								/>
							</div>
						</div>

						<div className="bg-white drop-shadow-xl rounded-md p-8 flex flex-col md:flex-row items-center gap-8">
							<div className="md:w-1/2 flex justify-center order-1 md:order-none">
								<Image
									src="/icons/library.png"
									alt="Connection Facilitation"
									width={200}
									height={100}
								/>
							</div>
							<div className="md:w-1/2 order-2">
								<h3 className="text-2xl font-bold mb-4">
									Connection Facilitation
								</h3>
								<p className="text-gray-700">
									Utilize our comprehensive organizational mapping and AI
									tools to connect users with the right network members
									effortlessly.
								</p>
							</div>
						</div>

						<div className="bg-white drop-shadow-xl rounded-md p-8">
							<div className="flex flex-col md:flex-row gap-8">
								<div className="md:w-1/2">
									<Image
										src="/homepage/accesibility.jpg"
										alt="Enhanced Accessibility"
										width={500}
										height={500}
										className="rounded-lg w-full h-auto"
									/>
								</div>
								<div className="md:w-1/2 flex flex-col justify-center">
									<h3 className="text-3xl font-bold mb-4">
										Enhanced Accessibility
									</h3>
									<p className="text-gray-700 mb-6">
										Increase user participation and engagement with DAOs by
										providing them with personalized assistance, guidance, and
										education from our AI concierge.
									</p>
									<Button className="self-start bg-[#3b82f6] text-white hover:bg-[#2563eb] rounded-md px-6 py-2 transition-colors">
										Learn More
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Legal Information Section */}
			<section className="py-20 px-6 md:px-16 bg-gray-50">
				<div className="container mx-auto">
					<div className="flex flex-col md:flex-row items-center gap-12">
						<div className="md:w-1/2">
							<h2 className="text-4xl font-bold mb-6">
								Legal Information Access
							</h2>
							<p className="text-lg text-gray-700 mb-8">
								Concierge can utilize Ask Abe AI technology to provide legal
								information to users, ensuring they have access to accurate
								and up-to-date legal knowledge. With Ask Abe, users can ask
								questions and receive reliable legal information instantly.
							</p>
							<Button className="bg-[#3b82f6] text-white hover:bg-[#2563eb] rounded-md px-6 py-2 transition-colors">
								<Link href="">Explore Ask Abe</Link>
							</Button>
						</div>
						<div className="md:w-1/2 relative h-[400px]">
							<div className="absolute right-0 top-0 w-3/4 h-full">
								<Image
									src="/features/lib3.jpg"
									alt="Legal Library"
									layout="fill"
									objectFit="cover"
									className="rounded-lg shadow-lg"
								/>
							</div>
							<div className="absolute bottom-20 left-0 w-1/3 h-1/2">
								<Image
									src="/logo/ASKABELOGO.png"
									alt="Ask Abe Logo"
									layout="fill"
									objectFit="contain"
									className="rounded-lg"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Integration Section */}
			<section className="py-20 px-6 md:px-16 bg-white">
				<div className="container mx-auto">
					<div className="flex flex-col md:flex-row items-center gap-12">
						<div className="md:w-3/5">
							<Image
								src="/features/integration.jpg"
								alt="Seamless Integration"
								width={1000}
								height={600}
								className="rounded-lg shadow-xl w-full h-auto"
							/>
						</div>
						<div className="md:w-2/5">
							<p className="text-gray-600 mb-2">Enhance your website and User Experience with</p>
							<h2 className="text-4xl font-bold mb-6">
								Seamless Integration
							</h2>
							<p className="text-lg text-gray-700">
								Our chatbot seamlessly integrates into your existing systems and
								workflows, providing a smooth and efficient user experience
								without disrupting your current operations.
							</p>
							<Button className="mt-8 bg-[#3b82f6] text-white hover:bg-[#2563eb] rounded-md px-6 py-2 transition-colors">
								Integration Guide
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] text-white py-16 px-6 md:px-16">
				<div className="container mx-auto text-center">
					<h2 className="text-4xl md:text-5xl font-bold mb-6">
						Ready to Transform Your DAO Experience?
					</h2>
					<p className="text-xl md:text-2xl text-white/90 font-light mb-10 max-w-3xl mx-auto">
						Start connecting your users with the information and people they need today.
					</p>
					<div className="flex gap-4 justify-center">
						<Button className="bg-white text-[#1e3a8a] hover:bg-white/90 px-8 py-6 rounded-full text-lg font-semibold shadow-xl transition-all transform hover:scale-105 duration-200">
							<Link href="/demo">Try Demo</Link>
						</Button>
						<Button className="bg-transparent text-white border border-white hover:bg-white/10 px-8 py-6 rounded-full text-lg font-semibold shadow-xl transition-all transform hover:scale-105 duration-200">
							<Link href="/pricing">View Pricing</Link>
						</Button>
					</div>
				</div>
			</section>

			<Footer />
		</main>
	);
}
