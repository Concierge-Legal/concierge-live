import Image from "next/image";
import React from "react";
import Footer from "../../components/footer";

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Card, CardHeader, CardContent, CardFooter, CardTitle } from '@/components/ui/card';
import { Dialog, DialogTrigger, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";


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
				<h2 className="text-4xl font-bold text-center mb-10 text-black">Increase Revenue</h2>
				<section className="py-10 bg-muted">
					<div className="container  px-8">

						<div className="max-w-7xl p-8">
							<Carousel >
								<CarouselContent>
									<CarouselItem className="flex-shrink-0 w-full md:w-1/3">
										<Card className="bg-card text-card-foreground shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
											<CardHeader>
												<CardTitle className="text-3xl font-bold text-center">Connect Users With Your Products</CardTitle>
											</CardHeader>
											<CardContent className="flex flex-col items-center justify-center flex-grow">
												{/* Image at the top */}
												<div className="w-full flex justify-center overflow-hidden">
													<Image
														src="/homepage/anger.jpg"
														alt="Integration Picture"
														width={500}
														height={300}
														layout="intrinsic"
														objectFit="cover"
														className="rounded-lg"
													/>
												</div>
												{/* Content section */}
												<div className="flex flex-col md:flex-row justify-around mt-4">
													<div className="bg-card p-4 rounded-lg shadow flex-1 mx-2">
														<h4 className="text-lg font-bold mb-2">Instant Product Suggestions</h4>
														<p className="text-sm">Offer real-time product recommendations based on user interactions and queries.</p>
													</div>
													<div className="bg-card p-4 rounded-lg shadow flex-1 mx-2">
														<h4 className="text-lg font-bold mb-2">Seamless Checkout Processes</h4>
														<p className="text-sm">Simplify the checkout process within the chat window, reducing steps and potential drop-offs.</p>
													</div>
													<div className="bg-card p-4 rounded-lg shadow flex-1 mx-2">
														<h4 className="text-lg font-bold mb-2">Integration with E-commerce Platforms</h4>
														<p className="text-sm">Concierge easily integrates with popular e-commerce platforms, maintaining a smooth user journey from discovery to purchase.</p>
													</div>
												</div>
											</CardContent>
											<CardFooter>
												<Button className="bg-accent text-accent-foreground w-full">Learn More</Button>
											</CardFooter>
										</Card>

									</CarouselItem>
									<CarouselItem className="flex-shrink-0 w-full md:w-1/3">
										<Card className="bg-card text-card-foreground shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
											<CardHeader>
												<CardTitle className="text-3xl font-bold text-center">Personalized Recommendations</CardTitle>
											</CardHeader>
											<CardContent className="flex flex-col items-center justify-center flex-grow">
												{/* Image at the top */}
												<div className="w-full flex justify-center overflow-hidden">
													<Image
														src="/homepage/recommendation.jpg"
														alt="Recoomendation Picture"
														width={500}
														height={300}
														layout="intrinsic"
														objectFit="cover"
														className="rounded-lg"
													/>
												</div>
												{/* Content section */}
												<div className="flex flex-col md:flex-row justify-around mt-4">
													<div className="bg-card p-4 rounded-lg shadow flex-1 mx-2">
														<h4 className="text-lg font-bold mb-2">Behavior-Based Targeting</h4>
														<p className="text-sm">Algorithms analyze past behaviors to predict and suggest products that align with user interests.</p>
													</div>
													<div className="bg-card p-4 rounded-lg shadow flex-1 mx-2">
														<h4 className="text-lg font-bold mb-2">Dynamic Interaction</h4>
														<p className="text-sm">As users interact with the chatbot, it dynamically adjusts its recommendations to refine offerings and enhance relevance.</p>
													</div>
													<div className="bg-card p-4 rounded-lg shadow flex-1 mx-2">
														<h4 className="text-lg font-bold mb-2">Increased Engagement</h4>
														<p className="text-sm">Personalized interactions boost user engagement, encouraging longer sessions and deeper exploration of your offerings.</p>
													</div>
												</div>
											</CardContent>
											<CardFooter>
												<Button className="bg-accent text-accent-foreground w-full">View Demo</Button>
											</CardFooter>
										</Card>

									</CarouselItem>
									<CarouselItem className="flex-shrink-0 w-full md:w-1/3">
										<Card className="bg-card text-card-foreground shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
											<CardHeader>
												<CardTitle className="text-3xl font-bold text-center">Optimize Conversion Rates</CardTitle>
											</CardHeader>
											<CardContent className="flex flex-col items-center justify-center flex-grow">
												{/* Image at the top */}
												<div className="w-full flex justify-center overflow-hidden">
													<Image
														src="/homepage/stonks.jpg"
														alt="Stonks Picture"
														width={500}
														height={300}
														layout="intrinsic"
														objectFit="cover"
														className="rounded-lg"
													/>
												</div>
												{/* Content section */}
												<div className="flex flex-col md:flex-row justify-around mt-4">
													<div className="bg-card p-4 rounded-lg shadow flex-1 mx-2">
														<h4 className="text-lg font-bold mb-2">Engagement Optimizationg</h4>
														<p className="text-sm">Tailor interactions based on user behavior and preferences to increase engagement and likelihood of conversion.</p>
													</div>
													<div className="bg-card p-4 rounded-lg shadow flex-1 mx-2">
														<h4 className="text-lg font-bold mb-2">Reduction in Abandonment</h4>
														<p className="text-sm">Implement strategies to identify and intervene in potential drop-off points, reducing cart abandonment and increasing completions.</p>
													</div>
													<div className="bg-card p-4 rounded-lg shadow flex-1 mx-2">
														<h4 className="text-lg font-bold mb-2">Dynamic Responses</h4>
														<p className="text-sm">Use AI to dynamically respond to user queries and guide them towards fulfilling their goals, effectively turning queries into conversions.</p>
													</div>
												</div>
											</CardContent>
											<CardFooter>
												<Button className="bg-accent text-accent-foreground w-full">View Demo</Button>
											</CardFooter>
										</Card>

									</CarouselItem>



								</CarouselContent>
								<CarouselPrevious></CarouselPrevious>
								<CarouselNext></CarouselNext>

							</Carousel>

						</div>
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

								<CardContent>Integrate Ask Abe, our advanced legal information assistant, to provide authoritative legal information and education directly through your chat interface. This tool helps in providing relevant primary source legislation, enhancing the responsiveness of your service.</CardContent>

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
