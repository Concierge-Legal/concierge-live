import Image from "next/image";
import NavBar from "@/components/navBar";
interface SectionHeadingProps {
  text: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ text }) => {
  return <div>{text}</div>;
};

export default function ChatbotFeatures() {
  const sectionHeadings = [
    "Knows Your Industry",
    "Knows Your Products/Services (Network)",
    "Knows Primary Source Legislation",
    "Knows your Website/UX",
  ];


  return (
    <main>
      

      <div className="flex flex-col items-stretch">

        <div className="flex-col items-center overflow-hidden relative flex min-h-[300px] px-20 max-md:px-5">
          {/* <Image
          src="/bluebackground.jpg"
          alt="Empowering Image"
          width={1500}
          height={299}
          className="absolute inset-0 w-full h-full object-cover"
        /> */}

          <div className="relative top-5/6 text-darkestBlue text-center text-5xl font-raleway font-bold leading-[80px] max-w-screen-md mt-28 max-md:max-w-full max-md:mt-10">
            FEATURES
          </div>

        </div>

        <div className="flex flex-col">
          <div className="flex flex-col px-16 py-20 w-full bg-white max-md:px-5 max-md:max-w-full">
            <div className="mt-8 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col text-black max-md:mt-10 max-md:max-w-full">

                    <div id="industryKnowledge" className="mt-4 text-5xl font-bold leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                      Concierge Knows Your Industry
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
                    <div className="text-lg leading-7 text-black max-md:max-w-full">
                      Concierge&apos;s conversational AI is equipped with industry-specific legal knowledge search capabilities,
                      allowing it to provide accurate answers to your legal inquiries.
                    </div>
                    <div className="py-2 mt-8 max-md:max-w-full">
                      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                          <div className="flex flex-col text-black max-md:mt-8">

                            <div className="mt-4 text-xl font-bold leading-7">Search</div>
                            <div className="mt-4 text-base leading-6">
                              Find answers to your legal questions quickly and accurately with Concierge&apos;s industry
                              knowledge search.
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                          <div className="flex flex-col grow text-black max-md:mt-8">

                            <div className="mt-4 text-xl font-bold leading-7">Connect</div>
                            <div className="mt-4 text-base leading-6">
                              Connect with industry-specific legal information and resources through Concierge&apos;s intelligent
                              search capabilities.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <Image src="/features/infobooth2.jpg" alt="AI Graphic" width={1920} height={1080} className="mt-20 mb-2.5 w-full aspect-[1.79] max-md:mt-10 max-md:max-w-full" />
          </div>
          <div className="flex flex-col justify-center px-16 py-20 w-full bg-white max-md:px-5 max-md:max-w-full">
            <div className="mt-8 mb-2.5 max-md:mr-1 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col self-stretch pb-2 my-auto text-base leading-6 text-black max-md:mt-10 max-md:max-w-full">
                    <div id="productKnowledge" className="text-4xl font-bold leading-10 max-md:max-w-full">
                      Concierge Knows Your Products & Services
                    </div>
                    <div className="mt-6 text-lg leading-7 max-md:max-w-full">
                      Our Intelligent Product/Service Search feature ensures your users find the exact products or services they need based on their questions. Concierge directs users to the most relevant and accurate options, saving you time and effort.
                    </div>
                    <div className="flex gap-4 mt-10 max-md:flex-wrap">
                      <Image src="/icons/bulb.png" alt="Accurate Results" width={16} height={16} className="shrink-0 my-auto w-4 aspect-square" />
                      <div className="flex-1 max-md:max-w-full">Search and weight products/services according to customer prompts.</div>
                    </div>
                    <div className="flex gap-4 mt-4 max-md:flex-wrap">
                      <Image src="/icons/bulb.png" alt="Algorithms" width={16} height={16} className="shrink-0 my-auto w-4 aspect-square" />
                      <div className="flex-1 max-md:max-w-full">Utilize advanced algorithms to match customer needs with the best options available.</div>
                    </div>
                    <div className="flex gap-4 mt-4 max-md:flex-wrap">
                      <Image src="/icons/bulb.png" alt="Save Time" width={16} height={16} className="shrink-0 my-auto w-4 aspect-square" />
                      <div className="flex-1 max-md:max-w-full">Save Time and Effort in Helping Users Find Legal Solutions</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <Image src="/features/services.jpg" alt="Search Illustration" width={480} height={500} className="grow w-full aspect-[0.96] max-md:mt-10 max-md:max-w-full" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center px-16 py-20 w-full bg-white max-md:px-5 max-md:max-w-full">
            <div className="mt-8 mb-2.5 max-md:mr-1 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <Image src="/features/legalTech.jpg" alt="Enhance Graphic" width={480} height={500} className="grow w-full aspect-[0.96] max-md:mt-10 max-md:max-w-full" />
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col self-stretch my-auto text-base leading-6 text-black max-md:mt-10 max-md:max-w-full">
                    <div className="font-semibold text-center max-md:max-w-full">Enhance</div>
                    <div id="companyKnowledge" className="mt-4 text-5xl font-bold leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                      Concierge Knows Your Company
                    </div>
                    <div className="mt-6 text-lg leading-7 max-md:max-w-full">
                      Our chatbot leverages metadata to deliver highly relevant search results, ensuring a seamless user
                      experience. By analyzing user behavior and preferences, we are able to provide personalized
                      recommendations and streamline the search process.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col justify-center px-16 py-20 w-full bg-white max-md:px-5 max-md:max-w-full">
            <div className="mt-8 mb-2.5 max-md:mr-1 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <Image loading="lazy" src="/features/books.jpg" alt="Legal Information" width={1000} height={960} className="grow w-full aspect-[0.96] max-md:mt-10 max-md:max-w-full" />
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col self-stretch my-auto text-black max-md:mt-10 max-md:max-w-full">
                    <div className="flex flex-col justify-center pl-8 border-l-2 border-solid border-l-black max-md:pl-5 max-md:max-w-full">
                      <div id="legalInformation" className="text-3xl font-bold leading-10 max-md:max-w-full">Legal Information Feature</div>
                      <div className="mt-4 text-base leading-6 max-md:max-w-full">Concierge utilizes AI to provide legal information to users, ensuring they have access to accurate and up-to-date legal knowledge. With Ask Abe, users can ask questions and receive reliable legal information instantly.</div>
                    </div>
                    <div className="flex flex-col justify-center pl-8 mt-10 max-md:pl-5 max-md:max-w-full">
                      <div className="text-3xl font-bold leading-10 max-md:max-w-full">Conversation Archiving</div>
                      <div className="mt-4 text-base leading-6 max-md:max-w-full">Concierge&apos;s conversation archiving feature allows users to easily store and retrieve past conversations for future reference. This ensures that important information and discussions are never lost.</div>
                    </div>
                    <div className="flex flex-col justify-center pl-8 mt-10 max-md:pl-5 max-md:max-w-full">
                      <div className="text-3xl font-bold leading-10 max-md:max-w-full">Dynamic Website Routing</div>
                      <div className="mt-4 text-base leading-6 max-md:max-w-full">With dynamic website routing, Concierge intelligently guides users to relevant sections of the website based on their specific needs and queries. This enhances user experience and ensures they find the information they are looking for quickly and efficiently.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center px-16 py-20 w-full bg-white max-md:px-5 max-md:max-w-full">
            <div className="mt-8 mb-2.5 max-md:mr-1 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col self-stretch my-auto text-black max-md:mt-10 max-md:max-w-full">
                    <div id="privacy" className="text-4xl font-bold leading-10 max-md:max-w-full">Protecting Your Privacy: Ensuring the Security of Your Personal Data</div>
                    <div className="mt-6 text-lg leading-7 max-md:max-w-full">At Concierge, we understand the importance of user data privacy. Our chatbot utilizes advanced encryption and data protection measures to safeguard your personal information. Rest assured that your data is secure with us.</div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <Image loading="lazy" src="/features/datasecurity.jpg" alt="Data Security" width={1000} height={960} className="grow w-full aspect-[0.96] max-md:mt-10 max-md:max-w-full" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center px-16 py-20 w-full bg-white max-md:px-5 max-md:max-w-full">
            <div className="mt-8 mb-2.5 max-md:mr-1 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col self-stretch my-auto text-black max-md:mt-10 max-md:max-w-full">

                    <div id="directIntegration" className="mt-6 text-4xl font-bold leading-10 max-md:max-w-full">Seamless Integration: Enhance your workflow with our easily integrated chatbot.</div>
                    <div className="mt-6 text-lg leading-7 max-md:max-w-full">Our chatbot seamlessly integrates into your existing systems and workflows, providing a smooth and efficient user experience.</div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <Image loading="lazy" src="/features/integration.jpg" alt="Seamless Workflow" width={1000} height={960} className="grow w-full aspect-[0.96] max-md:mt-10 max-md:max-w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};