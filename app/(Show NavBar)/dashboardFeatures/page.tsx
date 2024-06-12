import Image from "next/image";
import Footer from "@/components/footer";
import React from "react";
import { Button } from "@/components/ui/button";
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
    <main>
      <div className="flex flex-col">
        <div className="flex flex-col items-center py-20 w-full text-center text-black bg-background max-md:px-5 max-md:max-w-full">
          <div className="mt-36 text-6xl font-bold leading-[67.2px] max-md:max-w-full max-md:text-4xl">
            Complete Control, Centralized
          </div>
          <div className="mt-6 mb-2.5 text-lg leading-7 max-md:max-w-full">
            Configure, Monitor, and Analyze Directly From The Dashboard
          </div>
        </div>
        <div className="flex flex-row justify-center items-center w-full px-16 py-10 bg-background max-md:flex-col max-md:px-5 max-md:max-w-full">
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
        </div>

        {/* Analytics Major Section*/}
        <div className="flex flex-col justify-center px-16 py-20 bg-white max-md:px-5">
          <div className="max-md:mr-1 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col justify-center mt-4 p-8 h-full w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col text-base text-center leading-6 text-black max-md:mt-10 max-md:max-w-full">
                  <div className="mt-4 text-4xl font-bold leading-8 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                    Data-Driven Analytics
                  </div>
                  <div className="mt-6 text-lg leading-7 max-md:max-w-full">
                    The dashboard provides a comprehensive set of features and
                    tools to streamline your legal information management. From
                    AI-powered chatbot assistance to seamless lawyer
                    connections, it&apos;s all here.
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow text-black max-md:mt-10 max-md:max-w-full">
                  <div className="flex flex-col p-8 border border-solid rounded-md drop-shadow-xl bg-lightBlue shadow-sm max-md:px-5 max-md:max-w-full">
                    <Image
                      loading="lazy"
                      src="/icons/growth.png"
                      alt="Efficient Workflow"
                      width={48}
                      height={48}
                      className=""
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
              <div className="flex flex-col p-8 border border-rounded border-solid drop-shadow-xl rounded-md bg-lightBlue shadow-sm max-md:px-5 max-md:max-w-full">
                <Image
                  loading="lazy"
                  src="/icons/server-administration.png"
                  alt="Expert Guidance"
                  width={48}
                  height={48}
                  className="w-12"
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
              <div className="flex flex-col p-8 border border-rounded border-solid drop-shadow-xl rounded-md bg-lightBlue shadow-sm max-md:px-5 max-md:max-w-full">
                <Image
                  loading="lazy"
                  src="/icons/server.png"
                  alt="Seamless Connections"
                  width={48}
                  height={48}
                  className="w-12"
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
              <div className="flex flex-col p-8 border border-rounded border-solid drop-shadow-xl rounded-md bg-lightBlue shadow-sm max-md:px-5 max-md:max-w-full">
                <Image
                  loading="lazy"
                  src="/icons/solution.png"
                  alt="Expert Guidance"
                  width={48}
                  height={48}
                  className="w-12"
                />
                <div className="mt-4 text-2xl font-bold leading-8 max-md:max-w-full">
                  Satisfaction Scores
                </div>
                <div className="mt-4 text-base leading-6 max-md:max-w-full">
                  Measure user satisfaction through feedback and ratings.
                  Understand user sentiment and the identify key drivers of
                  satisfaction to continuously update and enhance the user
                  experience.
                </div>
              </div>
              <div className="flex flex-col p-8 border border-rounded border-solid drop-shadow-xl rounded-md bg-lightBlue shadow-sm max-md:px-5 max-md:max-w-full">
                <Image
                  loading="lazy"
                  src="/icons/server.png"
                  alt="Seamless Connections"
                  width={48}
                  height={48}
                  className="w-12"
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
          </div>
        </div>

        {/* Knowledge Library Major Section*/}
        <div className="flex flex-col py-20 px-12 bg-white max-md:px-5">
          <div className="mt-4 text-5xl font-bold text-center text-black leading-[57.6px] max-md:max-w-full max-md:text-4xl">
            Versatile Knowledge Hub
          </div>
          <div className="mt-6 text-lg leading-7 text-black text-center max-md:max-w-full">
            An adaptable and comprehensive repository that centralizes all your
            essential information. Ensure easy access and up-to-date resources
            for your Concierge, with the flexibility to update, add, or remove
            information at any time. From industry knowledge to company policies
            and service details, Concierge will have all the information it
            needs to provide accurate and relevant support to users.
          </div>
          <div className="self-stretch mt-20 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col justify-center w-full text-base leading-6 text-black bg-white drop-shadow-xl rounded-md max-md:mt-8">
                  <div className="flex flex-col justify-center items-center p-8 max-md:px-5">
                    <Image
                      loading="lazy"
                      src="/icons/solution.png"
                      alt="Expert Guidance"
                      width={200}
                      height={100}
                      className=""
                    />
                    <div className="mt-6 text-2xl font-bold leading-10">
                      Organizational Knowledge
                    </div>
                    <div className="mt-4 text-center leading-6">
                      Stay ahead of the curve with curated industry knowledge.
                      Access the latest trends, research, and developments in
                      the legal sector to make informed decisions and stay
                      competitive.
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col justify-center w-full text-base leading-6 text-black bg-white drop-shadow-xl rounded-md max-md:mt-8">
                  <div className="flex flex-col justify-center items-center p-8 max-md:px-5">
                    <Image
                      loading="lazy"
                      src="/icons/library.png"
                      alt="Expert Guidance"
                      width={200}
                      height={100}
                      className=""
                    />
                    <div className="mt-6 text-2xl font-bold leading-10">
                      Network Knowledge Base
                    </div>
                    <div className="mt-4 text-center leading-6">
                      Consolidate all your internal knowledge in one place. From
                      company policies to best practices, ensure your team has
                      easy access to the information they need to perform at
                      their best.
                    </div>
                  </div>
                </div>
              </div>
             
            </div>
          </div>

          {/* Appearance Major Section*/}
          <div className="flex flex-col items-center px-12 py-2 bg-white max-md:px-5">
            <div className="self-stretch mt-16 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow w-full text-base leading-6 text-black bg-white drop-shadow-xl rounded-lg max-md:mt-8 max-md:max-w-full">
                    <div className="flex flex-col justify-center p-12 max-md:px-5 max-md:max-w-full">
                      <div className="mt-4 text-5xl font-bold text-center text-black leading-[57.6px] max-md:max-w-full max-md:text-4xl">
                        Customized Visual Experience
                      </div>
                      <div className="mt-6 text-lg leading-7 text-center text-black max-md:max-w-full">
                        Create a unique and engaging visual experience with
                        customizable appearance settings. Tailor the look and
                        feel of your Concierge and seamlessly integrate it with
                        your website to match your brand identity.
                      </div>
                    </div>
                    <div className="flex justify-center pb-12 ">
                      <Image
                        loading="lazy"
                        src="/features/colorchart.jpg"
                        alt="Expert Guidance"
                        width={5472}
                        height={3648}
                        className="w-3/4 aspect-[1.79] max-md:max-w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center px-16  bg-white max-md:px-5">
            {/* Behavior Major Section*/}

            <div className="flex flex-col py-20 bg-white max-md:px-5">
              <div className="flex flex-row  w-full max-md:flex-col">
                <div className="flex flex-col w-2/4 max-md:w-full">
                  <div className="self-stretch mt-20 max-md:mt-10 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                      <div className="flex flex-col w-1/2 max-md:w-full">
                        <div className="flex flex-col grow justify-center self-stretch w-full text-base text-black bg-white drop-shadow-xl rounded-md max-md:mt-8">
                          <div className="flex flex-col p-6 max-md:px-5">
                            <div className="mt-4 text-2xl font-bold leading-8">
                              Train on Interactions
                            </div>
                            <div className="mt-2 leading-6">
                              Develop and refine the Concierge&apos;s ability to
                              interact with users through continuous training.
                              Improve response accuracy and user satisfaction by
                              teaching the AI to understand and respond to
                              various user inputs effectively.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col w-1/2 max-md:w-full">
                        <div className="flex flex-col grow justify-center self-stretch w-full text-base text-black bg-white drop-shadow-xl rounded-md max-md:mt-8">
                          <div className="flex flex-col p-6 max-md:px-5">
                            <div className="mt-4 text-2xl font-bold leading-8">
                              Enhance Tool Utilization
                            </div>
                            <div className="mt-2 leading-6">
                              Maximize the efficiency of your tools by
                              monitoring and adjusting their usage patterns.
                              Ensure that your AI Concierge leverages the right
                              tools at the right time for optimal performance.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-2 mr-2 max-md:ml-0 max-md:w-full">
                      <div className="grow w-full bg-white drop-shadow-xl rounded-md max-md:mt-8 max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                          <div className="flex flex-col max-md:ml-0 max-md:w-full">
                            <Image
                              loading="lazy"
                              src="/icons/algorithm.png"
                              alt="Proactive Escalation Management"
                              width={300}
                              height={300}
                              className="grow self-stretch p-6 rounded-md w-full aspect-square"
                            />
                          </div>
                          <div className="flex flex-col ml-2 w-6/12 max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow justify-center self-stretch p-6 text-base leading-6 text-black max-md:px-5">
                              <div className="mt-2 text-2xl font-bold leading-8">
                                Proactive Escalation Management
                              </div>
                              <div className="mt-2 leading-6">
                                Prepare for potential issues by setting clear
                                protocols and training your Concierge to
                                anticipate and manage escalations effectively.
                                Ensure that complex interactions are recognized
                                early and handled appropriately, minimizing
                                disruption and maintaining user satisfaction.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-1/2 pr-6 self-center max-md:w-full max-md:mt-10">
                  <div className="mt-4 text-5xl font-bold text-end text-black leading-[57.6px] max-md:max-w-full max-md:text-4xl">
                    Optimized User Engagement
                  </div>
                  <div className="mt-6 text-lg w-3/4 ml-auto leading-7 text-end text-black max-md:max-w-full">
                    Enhance the efficiency and effectiveness of user
                    interactions with advanced behavior settings. Train your AI
                    Concierge to adapt to user behaviors, optimize tool usage,
                    and manage escalation processes seamlessly.
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center pt-20 px-20 w-full text-6xl font-bold bg-white leading-[67.2px] max-md:px-5 max-md:max-w-full max-md:text-4xl">
              <div className="mt-8 text-center text-black max-md:max-w-full max-md:text-4xl">
                Discover the Dashboard
              </div>
              <div className="text-center text-black max-md:max-w-full max-md:text-4xl">
                Unlock Your Potential
              </div>
              <div className="mt-6 text-lg leading-7 text-center text-black max-md:max-w-full">
                Explore the power of our dashboard and gain valuable insights
                for your business.
              </div>
              <div className="flex gap-4 items-start pt-4 mt-6 mb-2.5 text-base leading-6">
                <div className="justify-center max-md:px-5">
                  <Button variant="default" size="lg">
                    <Link href="/demo">Demo</Link>
                  </Button>
                </div>
                <div className="justify-center max-md:px-5">
                  <Button variant="default" size="lg">
                    <Link href="/pricing">Sign Up</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
