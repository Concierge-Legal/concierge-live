import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/footer";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent
} from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
	return (
		<main className="min-h-screen bg-background">
			{/* Hero Section */}
			<section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden">
				<video
					className="absolute top-0 left-0 w-full h-full object-cover"
					autoPlay
					loop
					muted
					playsInline
					src="/homepage/landing.mp4"
				>
					Your browser does not support the video tag.
				</video>
				<div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto">
					<h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6">
						CONCIERGE
					</h1>
					<p className="text-xl md:text-2xl text-white/90 font-light mb-10">
						Your AI-Powered DAO Navigator
					</p>
					<Link
						href="/dashboard/demo-organization"
						className="bg-white text-black hover:bg-white/90 px-8 py-3 rounded-full font-medium transition-all transform hover:scale-105 duration-200 shadow-lg"
					>
						Try Demo Dashboard
					</Link>
				</div>
			</section>

			{/* Experience Section */}
			<section className="relative w-full py-24 md:py-32 overflow-hidden bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6]">
				<div className="absolute inset-0 opacity-20">
					<Image
						src="/homepage/clouds.jpg"
						alt="Background"
						layout="fill"
						objectFit="cover"
						className="mix-blend-overlay"
						priority
					/>
				</div>
				<div className="relative container mx-auto px-4 flex flex-col items-center">
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center max-w-4xl mb-8">
						Experience Concierge Live
					</h2>
					<p className="text-lg md:text-xl text-white/90 text-center max-w-3xl mb-10">
						Our advanced AI concierge service simplifies, streamlines, and
						enhances user experiences, ensuring that every interaction with
						your organization is seamless and productive.
					</p>
					<Button className="bg-white text-[#1e3a8a] hover:bg-white/90 px-8 py-6 rounded-full text-lg font-semibold shadow-xl transition-all transform hover:scale-105 duration-200">
						Demo Concierge
					</Button>
				</div>
			</section>

			{/* Navigate Complexity Section */}
			<section className="py-20 md:py-32 bg-white">
				<div className="container mx-auto px-4">
					<div className="flex flex-col md:flex-row items-center gap-12">
						<div className="w-full md:w-1/2 max-w-2xl">
							<h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
								Navigate Complexity
							</h2>
							<p className="text-lg text-gray-700 leading-relaxed">
								DAOs are inherently complex and often inaccessible.
								Concierge simplifies the user experience, making it easy
								for everyone to participate.
							</p>
							<Button className="mt-8 bg-[#3b82f6] text-white hover:bg-[#2563eb] rounded-md px-6 py-2 transition-colors">
								Learn More
							</Button>
						</div>
						<div className="w-full md:w-1/2 flex justify-center">
							<div className="relative w-full max-w-md rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition duration-300">
								<Image
									src="/homepage/navigate.jpg"
									alt="Navigate Complexity"
									width={600}
									height={450}
									className="object-cover"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Knowledge Section */}
			<section className="relative py-20 md:py-36 overflow-hidden bg-[#111827]">
				<div className="absolute inset-0 opacity-30">
					<Image
						loading="lazy"
						src="/homepage/knowledge2.jpg"
						layout="fill"
						objectFit="cover"
						alt="Background image"
					/>
				</div>
				<div className="relative container mx-auto px-4">
					<div className="flex flex-col md:flex-row items-center gap-12">
						<div className="w-full md:w-1/2 text-white">
							<p className="text-xl md:text-3xl font-light mb-2">with</p>
							<h2 className="text-3xl md:text-5xl font-bold mb-8">
								Dynamic Knowledge Extension
							</h2>
							<Button className="bg-[#3b82f6] text-white hover:bg-[#2563eb] transition-colors rounded-md px-6 py-2">
								Learn More
							</Button>
						</div>
						<div className="w-full md:w-1/2">
							<p className="text-xl text-white/90 leading-relaxed max-w-xl">
								Extend your entire organizational knowledge to each user
								dynamically, ensuring they have access to the information
								they need, when they need it.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Integration Section */}
			<section className="relative py-24 md:py-36 overflow-hidden bg-gradient-to-tr from-[#1e40af] to-[#3b82f6]">
				<div className="absolute inset-0 opacity-20">
					<Image
						src="/homepage/clouds.jpg"
						alt="Background"
						layout="fill"
						objectFit="cover"
						className="mix-blend-overlay"
					/>
				</div>
				<div className="relative container mx-auto px-4 text-center">
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 max-w-4xl mx-auto">
						Seamless Integration
					</h2>
					<p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto">
						Our AI integrates directly into your existing infrastructure,
						providing immediate and profound benefits without disruption.
					</p>
					<Button className="bg-white text-[#1e40af] hover:bg-white/90 rounded-md transition-colors px-6 py-2 font-medium">
						Learn How
					</Button>
				</div>
			</section>

			{/* Empowerment Section */}
			<section className="py-20 md:py-32 bg-white">
				<div className="container mx-auto px-4">
					<div className="flex flex-col md:flex-row items-center gap-12">
						<div className="w-full md:w-1/2">
							<h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
								Empower Your DAO Community
							</h2>
							<p className="text-lg text-gray-700 mb-8">
								Transform how your community interacts and collaborates with intelligent,
								context-aware assistance available 24/7.
							</p>
							<Button className="bg-[#3b82f6] text-white hover:bg-[#2563eb] rounded-md transition-colors px-6 py-2">
								Learn More
							</Button>
						</div>
						<div className="w-full md:w-1/2">
							<Carousel className="w-full">
								<CarouselContent>
									<CarouselItem className="md:basis-1/2 lg:basis-1/3">
										<Card className="border border-[#e5e7eb] shadow-lg rounded-xl overflow-hidden h-full">
											<CardContent className="p-0">
												<div className="relative h-40 w-full overflow-hidden">
													<Image
														src="/homepage/organization.jpg"
														alt="Organizations"
														layout="fill"
														objectFit="cover"
													/>
												</div>
												<div className="p-6">
													<h3 className="text-xl font-bold mb-2">For Organizations</h3>
													<p className="text-gray-600">
														Provide efficient, comprehensive access to organizational
														information and streamline user connections with network members.
													</p>
												</div>
											</CardContent>
										</Card>
									</CarouselItem>
									<CarouselItem className="md:basis-1/2 lg:basis-1/3">
										<Card className="border border-[#e5e7eb] shadow-lg rounded-xl overflow-hidden h-full">
											<CardContent className="p-0">
												<div className="relative h-40 w-full overflow-hidden">
													<Image
														src="/homepage/network.jpg"
														alt="Network Members"
														layout="fill"
														objectFit="cover"
													/>
												</div>
												<div className="p-6">
													<h3 className="text-xl font-bold mb-2">For Network Members</h3>
													<p className="text-gray-600">
														Increase visibility and exposure, helping members to connect
														with and convert end-users effectively.
													</p>
												</div>
											</CardContent>
										</Card>
									</CarouselItem>
									<CarouselItem className="md:basis-1/2 lg:basis-1/3">
										<Card className="border border-[#e5e7eb] shadow-lg rounded-xl overflow-hidden h-full">
											<CardContent className="p-0">
												<div className="relative h-40 w-full overflow-hidden">
													<Image
														src="/homepage/users.jpg"
														alt="Users"
														layout="fill"
														objectFit="cover"
													/>
												</div>
												<div className="p-6">
													<h3 className="text-xl font-bold mb-2">For Users</h3>
													<p className="text-gray-600">
														Guide, assist, and educate users to enhance their
														engagement and participation.
													</p>
												</div>
											</CardContent>
										</Card>
									</CarouselItem>
								</CarouselContent>
								<div className="flex justify-center gap-2 mt-4">
									<CarouselPrevious className="relative static" />
									<CarouselNext className="relative static" />
								</div>
							</Carousel>
						</div>
					</div>
				</div>
			</section>

			{/* Privacy Section */}
			<section id="privacy" className="py-20 md:py-28 bg-gray-50 border-t border-gray-100">
				<div className="container mx-auto px-4">
					<div className="flex flex-col md:flex-row items-center gap-10">
						<div className="w-full md:w-2/3">
							<h2 className="text-2xl md:text-4xl font-bold mb-6">
								Protecting Your Privacy: Ensuring the Security of Your Personal Data
							</h2>
							<p className="text-lg text-gray-600 leading-relaxed">
								At Concierge, we understand the importance of user data
								privacy. Our chatbot utilizes advanced encryption and data
								protection measures to safeguard your personal information.
								Rest assured that your data is secure with us.
							</p>
							<Button className="mt-8 bg-[#3b82f6] text-white hover:bg-[#2563eb] rounded-md transition-colors px-6 py-2">
								Privacy Policy
							</Button>
						</div>
						<div className="w-full md:w-1/3">
							<div className="relative w-full rounded-2xl overflow-hidden shadow-xl">
								<Image
									src="/features/datasecurity.jpg"
									alt="Data Security"
									width={500}
									height={480}
									className="w-full h-auto"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</main>
	);
}