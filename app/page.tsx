import Image from "next/image";
import React from "react";
import Footer from "../components/footer";

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Dialog, DialogTrigger, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {

	return (
		<main>
			<div className="flex flex-col">
				<div className="flex overflow-hidden relative flex-col items-start px-16 py-20 w-full text-white min-h-[900px] max-md:px-5 max-md:max-w-full">
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
					<div className="relative mt-52 text-2xl sm:text-5xl md:text-7xl lg:text-9xl text-white font-bold leading-[67px] w-[560px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
						CONCIERGE
					</div>
					<div className="relative mt-6 text-lg leading-7 w-[560px] max-md:max-w-full">
						The Future of Legal Customer Service
					</div>
				</div>

				<section className="bg-background text-foreground p-10 text-center">
					<h2 className="text-4xl font-bold mb-3">Experience Concierge Live</h2>
					<p className="mb-6">Click the button below to start a live demo and see Concierge in action.</p>
					<Button className="bg-accent text-accent-foreground px-8 py-3 rounded-full hover:bg-accent-hover">
						Demo Concierge
					</Button>
				</section>


				<section className="bg-white text-black py-20">
					<div className="container mx-auto">
						<h2 className="text-3xl font-bold text-center mb-10">Increase Revenue</h2>
						<Carousel>
							<CarouselContent>
								<CarouselItem>

									{/* Card for Direct Product Integration */}
									<Card className="bg-card text-card-foreground shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
										<CardHeader className="flex items-center justify-between">
											<h3>Direct Product Integration</h3>
											<img src="/icons/integration.svg" alt="Integration Icon" className="w-10 h-10" />
										</CardHeader>
										<CardContent>
											<p>Enhance the shopping experience with direct integration of your products and services into Concierge conversations. Here&apos;s how it transforms your sales approach:</p>
											<ul className="list-disc pl-5 mt-2">
												<li><strong>Instant Product Suggestions:</strong> Offer real-time product recommendations based on user interactions and queries.</li>
												<li><strong>Seamless Checkout Processes:</strong> Simplify the checkout process within the chat window, reducing steps and potential drop-offs.</li>
												<li><strong>Integration with E-commerce Platforms:</strong> Concierge easily integrates with popular e-commerce platforms, maintaining a smooth user journey from discovery to purchase.</li>
											</ul>
										</CardContent>
										<CardFooter>
											<Button className="bg-accent text-accent-foreground">Learn More</Button>
										</CardFooter>
									</Card>
								</CarouselItem>
								<CarouselItem>
									{/* Card for Personalized Recommendations */}
									<Card className="bg-card text-card-foreground shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
										<CardHeader className="flex items-center justify-between">
											<h3>Personalized Recommendations</h3>
											<img src="/icons/recommendations.svg" alt="Recommendations Icon" className="w-10 h-10" />
										</CardHeader>
										<CardContent>
											<p>Drive conversions with highly targeted, AI-driven product recommendations that cater to the specific needs and preferences of each user:</p>
											<ul className="list-disc pl-5 mt-2">
												<li><strong>Behavior-Based Targeting:</strong> Algorithms analyze past behaviors to predict and suggest products that align with user interests.</li>
												<li><strong>Dynamic Interaction:</strong> As users interact with the chatbot, it dynamically adjusts its recommendations to refine offerings and enhance relevance.</li>
												<li><strong>Increased Engagement:</strong> Personalized interactions boost user engagement, encouraging longer sessions and deeper exploration of your offerings.</li>
											</ul>
										</CardContent>
										<CardFooter>
											<Button className="bg-accent text-accent-foreground">View Demo</Button>
										</CardFooter>
									</Card>
								</CarouselItem>
								<CarouselItem>
									{/* Card for Optimized Conversion Rates */}
									<Card className="bg-card text-card-foreground shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
										<CardHeader className="flex items-center justify-between">
											<h3>Optimize Conversion Rates</h3>
											<img src="/icons/conversion.svg" alt="Conversion Icon" className="w-10 h-10" />
										</CardHeader>
										<CardContent>
											Discover how Concierge enhances your website&apos;s conversion rates through advanced analytics and targeted interaction strategies:
											<ul className="list-disc pl-5 mt-2">
												<li>Engagement Optimization: Tailor interactions based on user behavior and preferences to increase engagement and likelihood of conversion.</li>
												<li>Reduction in Abandonment: Implement strategies to identify and intervene in potential drop-off points, reducing cart abandonment and increasing completions.</li>
												<li>Dynamic Responses: Use AI to dynamically respond to user queries and guide them towards fulfilling their goals, effectively turning queries into conversions.</li>
											</ul>
										</CardContent>
										<CardFooter>
											<Button className="bg-accent text-accent-foreground">Explore Strategies</Button>
										</CardFooter>
									</Card>
								</CarouselItem>

							</CarouselContent>
							<CarouselPrevious />
							<CarouselNext />
						</Carousel>
					</div>
				</section>


				<section className="bg-background text-foreground py-20">
					<div className="container mx-auto">
						<h2 className="text-3xl font-bold text-center mb-10">Modernize Your User Experience</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
							<Card className="bg-card text-card-foreground shadow-lg rounded-lg p-6">
								<CardHeader>User-Centric Design</CardHeader>
								<CardContent>Enhance the overall user interface and experience, making your website more intuitive and user-friendly.</CardContent>
							</Card>
							<Card className="bg-card text-card-foreground shadow-lg rounded-lg p-6">
								<CardHeader>Accessibility Features</CardHeader>
								<CardContent>Incorporate advanced accessibility features to cater to all users, ensuring inclusivity and compliance.</CardContent>
							</Card>
						</div>
					</div>
				</section>


				<section className="bg-white text-black py-20">
					<div className="container mx-auto">
						<h2 className="text-3xl font-bold text-center mb-10">Designed for Legal Service Providers</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
							<Card className="bg-card text-card-foreground shadow-lg rounded-lg p-6">
								<CardHeader>Ask Abe: Legal AI Assistant</CardHeader>
								<CardContent>Integrate Ask Abe, our advanced legal assistant, to provide authoritative legal guidance directly through your chat interface. This tool helps in clarifying legal queries quickly, enhancing the responsiveness of your service.</CardContent>
							</Card>
							<Card className="bg-card text-card-foreground shadow-lg rounded-lg p-6">
								<CardHeader>Compliance and Security</CardHeader>
								<CardContent>Your trust is paramount. Concierge is designed to comply with the strictest legal standards, ensuring all interactions are secure and private, safeguarding client confidentiality and data integrity.</CardContent>
							</Card>
						</div>
					</div>
				</section>

				<section className="bg-background text-foreground py-20">
					<div className="container mx-auto">
						<h2 className="text-3xl font-bold text-center mb-10">Advanced AI-Driven Data Tracking and Analytics</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
							<Card className="bg-card text-card-foreground shadow-lg rounded-lg p-6">
								<CardHeader>Real-Time Analytics</CardHeader>
								<CardContent>Empower your business decisions with real-time analytics. Monitor user interactions and engagement metrics to adjust your strategies dynamically for maximum effectiveness.</CardContent>
							</Card>
							<Card className="bg-card text-card-foreground shadow-lg rounded-lg p-6">
								<CardHeader>User Behavior Insights</CardHeader>
								<CardContent>Leverage detailed analytics on user behavior to tailor your services. Understanding client needs and behavior patterns allows for a more personalized user experience, increasing satisfaction and retention.</CardContent>
							</Card>
							<Card className="bg-card text-card-foreground shadow-lg rounded-lg p-6">
								<CardHeader>Performance Metrics</CardHeader>
								<CardContent>Track the performance of your legal services with our comprehensive dashboard. Gain insights into service utilization, client engagement, and overall efficiency to continuously improve your offerings.</CardContent>
							</Card>
						</div>
					</div>
				</section>




			</div>
			<Footer />
		</main>
	);
}
