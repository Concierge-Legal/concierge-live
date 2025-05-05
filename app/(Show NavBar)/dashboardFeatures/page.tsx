import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function DashboardFeatures() {
	//   Analytics
	//   User Engagement Analytics
	//   Response Metrics
	//   Customer Insights
	//   Resolution Metrics
	//   User Satisfaction
	//   Knowledge Library
	//   Curate Industry Knowledge
	//   Curate Company Knowledge
	//   Curate Products/Services Knowledge
	//   Behavior
	//   Train User Interaction
	//   Tool Usage
	//   Escalation Behavior
	//   Appearance
	//   Customize Concierge Appearance
	//   Custome Website Integration
	//   Usage and Billing
	//   Cost Tracking

	return (
		<main className="bg-background">
			{/* Hero Section */}
			<section className="flex flex-col items-center py-20 w-full text-center text-black max-md:px-5">
				<div className="mt-36 text-6xl font-bold leading-[67.2px] max-md:max-w-full max-md:text-4xl">
					Complete Control, Centralized
				</div>
				<div className="mt-6 mb-2.5 text-lg leading-7 max-md:max-w-full">
					Configure, Monitor, and Analyze Directly From The Dashboard
				</div>
			</section>

			{/* Dashboard Preview Section */}
			<section className="flex flex-row justify-center items-center w-full px-16 py-10 bg-background max-md:flex-col max-md:px-5">
				<div className="w-9/12 max-md:w-full">
					<Image
						src="/features/dashboardtemp.png"
						alt="Dashboard Interface"
						layout="responsive"
						width={1920}
						height={1080}
						className="mb-2.5 aspect-[1.79] drop-shadow-2xl max-md:mt-10 max-md:max-w-full"
					/>
				</div>
				<div className="flex flex-col w-6/12 max-md:w-full max-md:ml-0 ml-5">
					<div className="text-5xl font-bold leading-10 text-end text-black max-md:mt-10 max-md:max-w-full">
						Effortless Navigation and Access
					</div>
					<div className="mt-6 text-lg leading-7 text-end text-black max-md:mt-10 max-md:max-w-full">
						Concierge&apos;s dashboard transforms your experience with a
						sleek, modern interface that puts control at your fingertips. The
						dashboard design allows you to effortlessly navigate and access
						essential information with unparalleled ease.
					</div>
				</div>
			</section>

			{/* Analytics Section */}
			<section className="flex flex-col justify-center px-16 py-20 bg-white max-md:px-5">
				<div className="max-md:mr-1 max-md:max-w-full">
					<div className="flex gap-5 max-md:flex-col max-md:gap-0">
						<div className="flex flex-col justify-center mt-4 p-8 h-full w-6/12 max-md:ml-0 max-md:w-full">
							<div className="flex flex-col text-base text-center leading-6 text-black max-md:mt-10 max-md:max-w-full">
								<div className="mt-4 text-4xl font-bold leading-8 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
									Data-Driven Analytics
								</div>
								<div className="mt-6 text-lg leading-7 max-md:max-w-full">
									The dashboard provides a comprehensive set of analytics tools to monitor performance and engagement. Track user interactions, measure success rates, and gain insights that help you continuously improve your service quality.
								</div>
								<Button className="mt-8 bg-[#3b82f6] text-white hover:bg-[#2563eb] rounded-md px-6 py-2 transition-colors self-center">
									Learn More
								</Button>
							</div>
						</div>

						<div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
							<div className="flex flex-col grow text-black max-md:mt-10 max-md:max-w-full">
								<div className="flex flex-col p-8 border border-solid rounded-md drop-shadow-xl bg-lightBlue shadow-sm max-md:px-5 max-md:max-w-full">
									<Image
										loading="lazy"
										src="/icons/growth.png"
										alt="Engagement Metrics"
										width={48}
										height={48}
									/>
									<div className="mt-4 text-2xl font-bold leading-8 max-md:max-w-full">
										Engagement Metrics
									</div>
									<div className="mt-4 text-base leading-6 max-md:max-w-full">
										Gain insights into how users interact with your platform,
										allowing you to measure engagement and identify areas for
										improvement. Understand the frequency and duration of user
										sessions to optimize their experience.
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="flex gap-5 mt-8 max-md:flex-col max-md:gap-0">
						<div className="flex flex-col p-8 border border-solid rounded-md drop-shadow-xl bg-lightBlue shadow-sm max-md:px-5 max-md:max-w-full">
							<Image
								loading="lazy"
								src="/icons/server-administration.png"
								alt="Performance Analysis"
								width={48}
								height={48}
							/>
							<div className="mt-4 text-2xl font-bold leading-8 max-md:max-w-full">
								Performance Analysis
							</div>
							<div className="mt-4 text-base leading-6 max-md:max-w-full">
								Track the responsiveness of your services and the efficiency
								of user interactions. Analyze response times and system
								performance to ensure seamless and timely support for all
								users.
							</div>
						</div>
						<div className="flex flex-col p-8 border border-solid rounded-md drop-shadow-xl bg-lightBlue shadow-sm max-md:px-5 max-md:max-w-full">
							<Image
								loading="lazy"
								src="/icons/server.png"
								alt="Resolution Efficiency"
								width={48}
								height={48}
							/>
							<div className="mt-4 text-2xl font-bold leading-8 max-md:max-w-full">
								Resolution Efficiency
							</div>
							<div className="mt-4 text-base leading-6 max-md:max-w-full">
								Monitor the effectiveness of your support and resolution
								processes. Track the time taken to resolve issues and the
								success rate of resolutions to improve service quality and
								user trust.
							</div>
						</div>
					</div>

					<div className="flex gap-5 mt-8 max-md:flex-col max-md:gap-0">
						<div className="flex flex-col p-8 border border-solid rounded-md drop-shadow-xl bg-lightBlue shadow-sm max-md:px-5 max-md:max-w-full">
							<Image
								loading="lazy"
								src="/icons/solution.png"
								alt="Satisfaction Scores"
								width={48}
								height={48}
							/>
							<div className="mt-4 text-2xl font-bold leading-8 max-md:max-w-full">
								Satisfaction Scores
							</div>
							<div className="mt-4 text-base leading-6 max-md:max-w-full">
								Measure user satisfaction through feedback and ratings.
								Understand user sentiment and identify key drivers of
								satisfaction to continuously update and enhance the user
								experience.
							</div>
						</div>
						<div className="flex flex-col p-8 border border-solid rounded-md drop-shadow-xl bg-lightBlue shadow-sm max-md:px-5 max-md:max-w-full">
							<Image
								loading="lazy"
								src="/icons/chart.png"
								alt="Usage Insights"
								width={48}
								height={48}
							/>
							<div className="mt-4 text-2xl font-bold leading-8 max-md:max-w-full">
								Usage Insights
							</div>
							<div className="mt-4 text-base leading-6 max-md:max-w-full">
								Gain a comprehensive view of how your platform is being utilized.
								Identify popular features, peak usage times, and user patterns
								to make informed decisions about future development priorities.
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Knowledge Library Section */}
			<section className="flex flex-col py-20 px-12 bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] text-white max-md:px-5">
				<div className="mt-4 text-5xl font-bold text-center leading-[57.6px] max-md:max-w-full max-md:text-4xl">
					Versatile Knowledge Hub
				</div>
				<div className="mt-6 text-lg leading-7 text-center max-md:max-w-full">
					An adaptable and comprehensive repository that centralizes all your
					essential information. Ensure easy access and up-to-date resources
					for your Concierge, with the flexibility to update, add, or remove
					information at any time.
				</div>
				<div className="self-stretch mt-20 max-md:mt-10 max-md:max-w-full">
					<div className="flex gap-5 max-md:flex-col max-md:gap-0">
						<div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
							<div className="flex flex-col justify-center w-full text-base text-black bg-white drop-shadow-xl rounded-md max-md:mt-8">
								<div className="flex flex-col justify-center items-center p-8 max-md:px-5">
									<Image
										loading="lazy"
										src="/icons/solution.png"
										alt="Organizational Knowledge"
										width={100}
										height={100}
									/>
									<div className="mt-6 text-2xl font-bold leading-10">
										Organizational Knowledge
									</div>
									<div className="mt-4 text-center leading-6">
										Keep your Concierge updated with the latest information about your
										organization, including policies, procedures, and key contacts.
										Ensure consistent and accurate information delivery to users.
									</div>
								</div>
							</div>
						</div>
						<div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
							<div className="flex flex-col justify-center w-full text-base text-black bg-white drop-shadow-xl rounded-md max-md:mt-8">
								<div className="flex flex-col justify-center items-center p-8 max-md:px-5">
									<Image
										loading="lazy"
										src="/icons/library.png"
										alt="Network Knowledge Base"
										width={100}
										height={100}
									/>
									<div className="mt-6 text-2xl font-bold leading-10">
										Network Knowledge Base
									</div>
									<div className="mt-4 text-center leading-6">
										Consolidate all your network information in one place. From
										member profiles to service offerings, ensure your Concierge has
										easy access to the information it needs to connect users effectively.
									</div>
								</div>
							</div>
						</div>
						<div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
							<div className="flex flex-col justify-center w-full text-base text-black bg-white drop-shadow-xl rounded-md max-md:mt-8">
								<div className="flex flex-col justify-center items-center p-8 max-md:px-5">
									<Image
										loading="lazy"
										src="/icons/docs.png"
										alt="Service Documentation"
										width={100}
										height={100}
									/>
									<div className="mt-6 text-2xl font-bold leading-10">
										Service Documentation
									</div>
									<div className="mt-4 text-center leading-6">
										Provide comprehensive details about your products and services,
										ensuring your Concierge can accurately represent your offerings
										and answer user questions with precision and confidence.
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="flex justify-center mt-12">
					<Button className="bg-white text-[#1e3a8a] hover:bg-white/90 px-6 py-2 rounded-md font-medium">
						Explore Knowledge Management
					</Button>
				</div>
			</section>

			{/* Appearance Section */}
			<section className="flex flex-col items-center px-12 py-20 bg-white max-md:px-5">
				<div className="w-full max-md:max-w-full">
					<div className="flex flex-col w-full text-base text-black bg-white drop-shadow-xl rounded-lg max-md:max-w-full">
						<div className="flex flex-col justify-center p-12 max-md:px-5 max-md:max-w-full">
							<div className="text-5xl font-bold text-center leading-[57.6px] max-md:max-w-full max-md:text-4xl">
								Customized Visual Experience
							</div>
							<div className="mt-6 text-lg leading-7 text-center max-md:max-w-full">
								Create a unique and engaging visual experience with
								customizable appearance settings. Tailor the look and
								feel of your Concierge and seamlessly integrate it with
								your website to match your brand identity.
							</div>
						</div>
						<div className="flex justify-center pb-12">
							<Image
								loading="lazy"
								src="/features/colorchart.jpg"
								alt="Color Customization Options"
								width={1200}
								height={800}
								className="w-3/4 aspect-[1.79] max-md:max-w-full rounded-md shadow-md"
							/>
						</div>
						<div className="flex justify-center pb-12">
							<Button className="bg-[#3b82f6] text-white hover:bg-[#2563eb] rounded-md px-6 py-2 transition-colors">
								Customize Your Experience
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Behavior Section */}
			<section className="py-20 bg-gray-50 border-t border-gray-100 max-md:px-5">
				<div className="container mx-auto px-4">
					<div className="flex flex-row w-full max-md:flex-col">
						<div className="flex flex-col w-1/2 max-md:w-full">
							<div className="flex gap-5 max-md:flex-col max-md:gap-0">
								<div className="flex flex-col w-1/2 max-md:w-full">
									<div className="flex flex-col grow justify-center self-stretch w-full text-base text-black bg-white drop-shadow-xl rounded-md max-md:mt-8">
										<div className="flex flex-col p-6 max-md:px-5">
											<Image
												loading="lazy"
												src="/icons/training.png"
												alt="Train on Interactions"
												width={48}
												height={48}
												className="mb-4"
											/>
											<div className="text-2xl font-bold leading-8">
												Train on Interactions
											</div>
											<div className="mt-2 leading-6">
												Develop and refine the Concierge&apos;s ability to
												interact with users through continuous training.
												Improve response accuracy and user satisfaction.
											</div>
										</div>
									</div>
								</div>
								<div className="flex flex-col w-1/2 max-md:w-full">
									<div className="flex flex-col grow justify-center self-stretch w-full text-base text-black bg-white drop-shadow-xl rounded-md max-md:mt-8">
										<div className="flex flex-col p-6 max-md:px-5">
											<Image
												loading="lazy"
												src="/icons/tools.png"
												alt="Enhance Tool Utilization"
												width={48}
												height={48}
												className="mb-4"
											/>
											<div className="text-2xl font-bold leading-8">
												Enhance Tool Utilization
											</div>
											<div className="mt-2 leading-6">
												Maximize the efficiency of your tools by
												monitoring and adjusting their usage patterns.
												Ensure optimal performance in all interactions.
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="mt-5 bg-white drop-shadow-xl rounded-md max-md:mt-8 max-md:max-w-full">
								<div className="flex gap-5 max-md:flex-col max-md:gap-0">
									<div className="flex flex-col max-md:ml-0 max-md:w-full">
										<Image
											loading="lazy"
											src="/icons/algorithm.png"
											alt="Proactive Escalation Management"
											width={300}
											height={300}
											className="p-6 rounded-md w-full aspect-square"
										/>
									</div>
									<div className="flex flex-col ml-2 w-6/12 max-md:ml-0 max-md:w-full">
										<div className="flex flex-col grow justify-center self-stretch p-6 text-base leading-6 text-black max-md:px-5">
											<div className="text-2xl font-bold leading-8">
												Proactive Escalation Management
											</div>
											<div className="mt-2 leading-6">
												Prepare for potential issues by setting clear
												protocols and training your Concierge to
												anticipate and manage escalations effectively.
												Ensure complex interactions are handled appropriately.
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="flex flex-col w-1/2 pl-10 self-center max-md:w-full max-md:mt-10 max-md:pl-0">
							<div className="text-5xl font-bold text-black leading-[57.6px] max-md:max-w-full max-md:text-4xl">
								Optimized User Engagement
							</div>
							<div className="mt-6 text-lg leading-7 text-black max-md:max-w-full">
								Enhance the efficiency and effectiveness of user
								interactions with advanced behavior settings. Train your AI
								Concierge to adapt to user behaviors, optimize tool usage,
								and manage escalation processes seamlessly.
							</div>
							<Button className="mt-8 bg-[#3b82f6] text-white hover:bg-[#2563eb] rounded-md px-6 py-2 transition-colors self-start">
								Explore Behavior Settings
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="flex flex-col items-center pt-20 pb-20 px-20 w-full bg-white max-md:px-5">
				<div className="text-5xl font-bold text-center text-black max-md:max-w-full max-md:text-4xl">
					Discover the Dashboard
				</div>
				<div className="text-5xl font-bold text-center text-black max-md:max-w-full max-md:text-4xl">
					Unlock Your Potential
				</div>
				<div className="mt-6 text-lg leading-7 text-center text-black max-md:max-w-full">
					Explore the power of our dashboard and gain valuable insights
					for your business.
				</div>
				<div className="flex gap-4 mt-8 mb-2.5">
					<Button className="bg-[#3b82f6] text-white hover:bg-[#2563eb] px-8 py-6 rounded-full text-lg font-semibold shadow-xl transition-all transform hover:scale-105 duration-200">
						<Link href="/demo">Try Demo</Link>
					</Button>
					<Button className="bg-white text-[#3b82f6] border border-[#3b82f6] hover:bg-gray-50 px-8 py-6 rounded-full text-lg font-semibold shadow-xl transition-all transform hover:scale-105 duration-200">
						<Link href="/pricing">Sign Up</Link>
					</Button>
				</div>
			</section>

			<Footer />
		</main>
	);
}
