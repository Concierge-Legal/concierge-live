import Image from "next/image";
import Footer from "@/components/footer";

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
        <div className="flex flex-col items-center px-16 py-20 w-full text-center text-black bg-white max-md:px-5 max-md:max-w-full">
          <div className="mt-8 text-6xl font-bold leading-[67.2px] max-md:max-w-full max-md:text-4xl">
            Complete Control, Centralized
          </div>
          <div className="mt-6 mb-2.5 text-lg leading-7 max-md:max-w-full">
            Configure, Monitor, and Analyze Directly From The Dashboard
          </div>
        </div>
        <div className="flex flex-col px-16 py-20 w-full bg-white max-md:px-5 max-md:max-w-full">
          <div className="mt-8 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div
                  id="intro"
                  className="self-stretch text-4xl font-bold leading-10 text-black max-md:mt-10 max-md:max-w-full"
                >
                  Dashboard is Sick AF
                </div>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="self-stretch text-lg leading-7 text-black max-md:mt-10 max-md:max-w-full">
                  Concierge&apos;s dashboard features an intuitive user
                  interface that makes it easy for users to navigate and access
                  the information they need. With a clean and organized layout,
                  users can quickly find the tools and resources they require to
                  manage their legal information. The dashboard is designed to
                  be user-friendly, with clear labels and intuitive icons that
                  guide users through the various features and functionalities.
                  Whether it&apos;s searching for legal documents, connecting
                  with lawyers, or accessing customer support, the dashboard
                  provides a seamless and efficient experience for users.
                </div>
              </div>
            </div>
          </div>
          <Image
            src="/features/dashboard_features.jpg"
            alt="Dashboard Interface"
            layout="responsive"
            width={1920}
            height={1080}
            className="mt-20 mb-2.5 w-full aspect-[1.79] max-md:mt-10 max-md:max-w-full"
          />
        </div>
        {/* Analytics Major Section*/}
        <div className="flex flex-col justify-center px-16 py-20 bg-white max-md:px-5">
          <div className="-8 max-md:mr-1 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col text-base leading-6 text-black max-md:mt-10 max-md:max-w-full">
                  <div className="mt-4 text-5xl font-bold leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
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
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow text-black max-md:mt-10 max-md:max-w-full">
                  <div className="flex flex-col p-8 border border-black border-solid max-md:px-5 max-md:max-w-full">
                    <Image
                      loading="lazy"
                      src="/features/analytics.jpg"
                      alt="Efficient Workflow"
                      width={48}
                      height={48}
                      className="w-12"
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
                  <div className="flex flex-col p-8 mt-8 border border-rounded border-black border-solid max-md:px-5 max-md:max-w-full">
                    <Image
                      loading="lazy"
                      src="/features/analytics.jpg"
                      alt="Expert Guidance"
                      width={48}
                      height={48}
                      className="w-12"
                    />
                    <div className="mt-4 text-2xl font-bold leading-8 max-md:max-w-full">
                      Perfromance Analysis
                    </div>
                    <div className="mt-4 text-base leading-6 max-md:max-w-full">
                      Track the responsiveness of your services and the
                      efficiency of user interactions. Analyze response times
                      and system performance to ensure seamless and timely
                      support for all users.
                    </div>
                  </div>
                  <div className="flex flex-col p-8 mt-8 border border-black border-solid max-md:px-5 max-md:max-w-full">
                    <Image
                      loading="lazy"
                      src="/features/analytics.jpg"
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
                  <div className="flex flex-col p-8 mt-8 border border-black border-solid max-md:px-5 max-md:max-w-full">
                    <Image
                      loading="lazy"
                      src="/features/analytics.jpg"
                      alt="Secure Communication"
                      width={48}
                      height={48}
                      className="w-12"
                    />
                    <div className="mt-4 text-2xl font-bold leading-8 max-md:max-w-full">
                      Satisfaction Scores
                    </div>
                    <div className="mt-4 text-base leading-6 max-md:max-w-full">
                      Measure user satisfaction through feedback and ratings.
                      Understand user sentiment and identify key drivers of
                      satisfaction to continuously enhance the overall user
                      experience.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Knowledge Library Major Section*/}
        <div className="flex flex-col  px-16 py-20 bg-white max-md:px-5">
          <div className="mt-4 text-5xl font-bold text-left text-black leading-[57.6px] max-md:max-w-full max-md:text-4xl">
            Versatile Knowledge Hub
          </div>
          <div className="mt-6 text-lg leading-7 text-black max-md:max-w-full">
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
                <div className="flex flex-col justify-center w-full text-base leading-6 text-black bg-white rounded-md border border-black border-solid max-md:mt-8">
                  <div className="flex flex-col justify-center p-8 max-md:px-5">
                    <Image
                      loading="lazy"
                      src="/features/keys.jpg"
                      alt="Expert Guidance"
                      width={200}
                      height={100}
                      className=""
                    />
                    <div className="mt-6 text-2xl font-bold leading-10">
                      Industry Knowledge
                    </div>
                    <div className="mt-4 leading-6">
                      Stay ahead of the curve with curated industry knowledge.
                      Access the latest trends, research, and developments in
                      the legal sector to make informed decisions and stay
                      competitive.
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col justify-center w-full text-base leading-6 text-black bg-white rounded-md border border-black border-solid max-md:mt-8">
                  <div className="flex flex-col justify-center p-8 max-md:px-5">
                    <Image
                      loading="lazy"
                      src="/features/keys.jpg"
                      alt="Expert Guidance"
                      width={200}
                      height={100}
                      className=""
                    />
                    <div className="mt-6 text-2xl font-bold leading-10">
                      Company Knowledge Base
                    </div>
                    <div className="mt-4 leading-6">
                      Consolidate all your internal knowledge in one place. From
                      company policies to best practices, ensure your team has
                      easy access to the information they need to perform at
                      their best.
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col justify-center w-full text-base leading-6 text-black bg-white rounded-md border border-black border-solid max-md:mt-8">
                  <div className="flex flex-col justify-center p-8 max-md:px-5">
                    <Image
                      loading="lazy"
                      src="/features/keys.jpg"
                      alt="Expert Guidance"
                      width={200}
                      height={100}
                      className=""
                    />
                    <div className="mt-6 text-2xl font-bold leading-10">
                      Product and Service Catalog
                    </div>
                    <div className="mt-4">
                      Organize and maintain detailed information about your
                      products and services. Provide your team with
                      comprehensive resources to support sales, marketing, and
                      customer service efforts.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Appearance Major Section*/}
          <div className="flex flex-col justify-center px-16 py-20 bg-white max-md:px-5">
            <div className="mt-8 max-md:mr-1 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[35%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow justify-between self-stretch text-black max-md:mt-10 max-md:max-w-full">
                    <div className="mt-4 text-5xl font-bold leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                      Customized Visual Experience
                    </div>
                    <div className="flex flex-col pl-8 mt-60 max-md:pl-5 max-md:mt-10 max-md:max-w-full">
                      <div className="text-lg leading-7">
                        Create a unique and engaging visual experience with
                        customizable appearance settings. Tailor the look and
                        feel of your Concierge and seamlessly integrate it with
                        your website to match your brand identity.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[65%] max-md:ml-0 max-md:w-full">
                  <div className="grow max-md:mt-10 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                      <div className="flex flex-col w-[57%] max-md:ml-0 max-md:w-full">
                        <Image
                          loading="lazy"
                          src="/features/books.jpg"
                          alt="Efficient Workflow"
                          width={48}
                          height={48}
                          className="grow w-full aspect-[0.67] max-md:mt-8 max-md:max-w-full"
                        />
                      </div>
                      <div className="flex flex-col ml-5 w-[43%] max-md:ml-0 max-md:w-full">
                        <Image
                          loading="lazy"
                          src="/features/dashboard_features.jpg"
                          alt="Efficient Workflow"
                          width={48}
                          height={48}
                          className="w-full aspect-square max-md:mt-8"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Behavior Major Section*/}
            <div className="flex flex-col items-center py-20 w-full text-center text-black">
              <div className="flex flex-col items-center px-16 py-20 max-md:px-5">
                <div className="mt-4 text-5xl font-bold text-center text-black leading-[58px] w-[768px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                  Optimized User Engagement
                </div>
                <div className="mt-6 text-lg leading-7 text-center text-black w-[768px] max-md:max-w-full">
                  Enhance the efficiency and effectiveness of user interactions
                  with advanced behavior settings. Train your AI Concierge to
                  adapt to user behaviors, optimize tool usage, and manage
                  escalation processes seamlessly.
                </div>
                <div className="self-stretch mt-20 max-md:mt-10 max-md:max-w-full">
                  <div className="flex flex-col gap-10 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-row items-center w-full max-md:flex-col max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col text-left text-black w-[33%] max-md:mt-10">
                        <div className="mt-6 text-3xl font-bold leading-10">
                          Train on Interactions
                        </div>
                        <div className="mt-6 text-base leading-6">
                          Develop and refine the Concierge&apos;s ability to interact
                          with users through continuous training. Improve
                          response accuracy and user satisfaction by teaching
                          the AI to understand and respond to various user
                          inputs effectively.
                        </div>
                      </div>
                      <Image
                        loading="lazy"
                        src="/features/walle.jpg"
                        alt="Train on Interactions"
                        width={200}
                        height={300}
                        className="ml-5 aspect-square max-md:mt-6"
                      />
                    </div>

                    <div className="flex flex-row items-center w-full max-md:flex-col max-md:ml-0 max-md:w-full">
                      <Image
                        loading="lazy"
                        src="/features/walle.jpg"
                        alt="Enhance Tool Utilization"
                        width={200}
                        height={300}
                        className="mr-5 aspect-square max-md:mt-6"
                      />
                      <div className="flex flex-col w-[33%] text-left text-black max-md:mt-10">
                        <div className="mt-6 text-3xl font-bold leading-10">
                          Enhance Tool Utilization
                        </div>
                        <div className="mt-6 text-base leading-6">
                          Maximize the efficiency of your tools by monitoring
                          and adjusting their usage patterns. Ensure that your
                          AI Concierge leverages the right tools at the right
                          time for optimal performance.
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-row items-center w-full max-md:flex-col max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col text-left text-black w-[33%] max-md:mt-10">
                        <div className="mt-6 text-3xl font-bold leading-10">
                          Proactive Escalation Management
                        </div>
                        <div className="mt-6 text-base leading-6">
                          Prepare for potential issues by setting clear
                          protocols and training your Concierge to anticipate
                          and manage escalations effectively. Ensure that
                          complex interactions are recognized early and handled
                          appropriately, minimizing disruption and maintaining
                          user satisfaction.
                        </div>
                      </div>
                      <Image
                        loading="lazy"
                        src="/features/walle.jpg"
                        alt="Proactive Escalation Management"
                        width={200}
                        height={300}
                        className="ml-5 aspect-square max-md:mt-6"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center p-20 w-full text-6xl font-bold bg-white leading-[67.2px] max-md:px-5 max-md:max-w-full max-md:text-4xl">
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
                <div className="justify-center px-6 py-3 text-black whitespace-nowrap bg-black border border-black border-solid max-md:px-5">
                  Demo
                </div>
                <div className="justify-center px-6 py-3 text-black border border-black border-solid max-md:px-5">
                  Sign Up
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
