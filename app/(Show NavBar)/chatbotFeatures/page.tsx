import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Footer from "@/components/footer";

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
          <Image
            src="/features/bot.jpg"
            alt="Empowering Image"
            width={1500}
            height={299}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative mt-36 top-5/6 text-darkestBlue text-center text-5xl font-raleway font-bold leading-[80px] max-w-screen-md max-md:max-w-full max-md:mt-10">
		  Simplifying DAO Interactions
          </div>
        </div>
        <div className="flex flex-col">
          {/* <div className="flex flex-col px-16 py-20 w-full bg-background max-md:px-5 max-md:max-w-full">
            <div className="mt-8 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col text-black max-md:mt-10 max-md:max-w-full">
                    <div
                      id="industryKnowledge"
                      className="mt-4 text-5xl font-bold leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]"
                    >
                      Concierge Knows Your Industry
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
                    <div className="text-lg leading-7 text-black max-md:max-w-full">
                      Concierge&apos;s conversational AI is equipped with
                      industry-specific legal knowledge search capabilities,
                      allowing it to provide accurate answers to your legal
                      inquiries.
                    </div>
                    <div className="py-2 mt-8 max-md:max-w-full">
                      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                          <div className="flex flex-col text-black max-md:mt-8">
                            <div className="mt-4 text-xl font-bold leading-7">
                              Search
                            </div>
                            <div className="mt-4 text-base leading-6">
                              Find answers to your legal questions quickly and
                              accurately with Concierge&apos;s industry
                              knowledge search.
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                          <div className="flex flex-col grow text-black max-md:mt-8">
                            <div className="mt-4 text-xl font-bold leading-7">
                              Connect
                            </div>
                            <div className="mt-4 text-base leading-6">
                              Connect with industry-specific legal information
                              and resources through Concierge&apos;s intelligent
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
            <Image
              src="/features/infobooth2.jpg"
              alt="AI Graphic"
              width={1920}
              height={1080}
              className="mt-20 mb-2.5 w-full aspect-[1.79] max-md:mt-10 max-md:max-w-full"
            />
  </div> */}

		  <div className="flex flex-col py-20 px-12 bg-background max-md:px-5">
            <div className="mt-4 text-5xl font-bold text-center text-black leading-[57.6px] max-md:max-w-full max-md:text-4xl">
			Solutions you are going to love
            </div>
            <div className="self-stretch mt-20 px-10  max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col gap-10 max-md:gap-0">
                <div className="flex gap-5 items-center max-md:flex-col max-md:gap-0 bg-white drop-shadow-xl rounded-md p-8 max-md:px-5">
                  <div className="flex flex-col w-1/2 max-md:w-full">
                    <div className="mt-6 text-3xl font-bold leading-10">
					Dynamic Knowledge Extension
                    </div>
                    <div className="mt-4 text-left leading-6">
					Provide users with direct access to your entire library of organizational information through our AI interface.
                    </div>
                  </div>
                  <div className="flex justify-center w-1/2 max-md:w-full">
                    <Image
                      loading="lazy"
                      src="/icons/solution.png"
                      alt="Expert Guidance"
                      width={200}
                      height={100}
                      className=""
                    />
                  </div>
                </div>
                <div className="flex gap-5 items-center max-md:flex-col max-md:gap-0 bg-white drop-shadow-xl rounded-md p-8 max-md:px-5">
                  <div className="flex justify-center w-1/2 max-md:w-full">
                    <Image
                      loading="lazy"
                      src="/icons/library.png"
                      alt="Expert Guidance"
                      width={200}
                      height={100}
                      className=""
                    />
                  </div>
                  <div className="flex flex-col w-1/2 max-md:w-full">
                    <div className="mt-6 text-3xl font-bold leading-10">
					Network Directory
                    </div>
                    <div className="mt-4 text-left leading-6">
					Utilize our comprehensive organizational mapping and AI tools to connect users with the right network members effortlessly.
                    </div>
                  </div>
                </div>
				<div className="flex gap-5 items-center max-md:flex-col max-md:gap-0 bg-white drop-shadow-xl rounded-md p-8 max-md:px-5">
                  <div className="flex flex-col w-1/2 max-md:w-full">
                    <div className="mt-6 text-3xl font-bold leading-10">
					Comprehensive Management Tools
                    </div>
                    <div className="mt-4 text-left leading-6">
					Utilize our robust dashboard for complete customization of your Concierge instance, offering timely analytics on user interactions.
                    </div>
                  </div>
                  <div className="flex justify-center w-1/2 max-md:w-full">
                    <Image
                      loading="lazy"
                      src="/icons/solution.png"
                      alt="Expert Guidance"
                      width={200}
                      height={100}
                      className=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

		  <div className="flex flex-col py-20 px-12 bg-background max-md:px-5">
            <div className="mt-4 text-5xl font-bold text-center text-black leading-[57.6px] max-md:max-w-full max-md:text-4xl">
			Solutions your members are going to love
            </div>
            <div className="self-stretch mt-20 px-10  max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col gap-10 max-md:gap-0">
                <div className="flex gap-5 items-center max-md:flex-col max-md:gap-0 bg-white drop-shadow-xl rounded-md p-8 max-md:px-5">
                  <div className="flex flex-col w-1/2 max-md:w-full">
                    <div className="mt-6 text-3xl font-bold leading-10">
					Enhanced Visibility and Exposure
                    </div>
                    <div className="mt-4 text-left leading-6">
					Ensure network members are visible and accessible through our organizational network directory.
                    </div>
                  </div>
                  <div className="flex justify-center w-1/2 max-md:w-full">
                    <Image
                      loading="lazy"
                      src="/icons/solution.png"
                      alt="Expert Guidance"
                      width={200}
                      height={100}
                      className=""
                    />
                  </div>
                </div>
                <div className="flex gap-5 items-center max-md:flex-col max-md:gap-0 bg-white drop-shadow-xl rounded-md p-8 max-md:px-5">
                  <div className="flex justify-center w-1/2 max-md:w-full">
                    <Image
                      loading="lazy"
                      src="/icons/library.png"
                      alt="Expert Guidance"
                      width={200}
                      height={100}
                      className=""
                    />
                  </div>
                  <div className="flex flex-col w-1/2 max-md:w-full">
                    <div className="mt-6 text-3xl font-bold leading-10">
					User Connections
                    </div>
                    <div className="mt-4 text-left leading-6">
					Dynamically connect users with the right network members via our AI, facilitating better interactions and conversions.
                    </div>
                  </div>
                </div>
				<div className="flex gap-5 items-center max-md:flex-col max-md:gap-0 bg-white drop-shadow-xl rounded-md p-8 max-md:px-5">
                  <div className="flex flex-col w-1/2 max-md:w-full">
                    <div className="mt-6 text-3xl font-bold leading-10">
					Brand Optimization Platform
                    </div>
                    <div className="mt-4 text-left leading-6">
					Enable network members to intuitively optimize their branding and dynamically present their portfolio of products and services.
                    </div>
                  </div>
                  <div className="flex justify-center w-1/2 max-md:w-full">
                    <Image
                      loading="lazy"
                      src="/icons/solution.png"
                      alt="Expert Guidance"
                      width={200}
                      height={100}
                      className=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col py-20 px-12 bg-background max-md:px-5">
            <div className="mt-4 text-5xl font-bold text-center text-black leading-[57.6px] max-md:max-w-full max-md:text-4xl">
			Solutions your users are going to love
            </div>
            <div className="self-stretch mt-20 px-10  max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col gap-10 max-md:gap-0">
                <div className="flex gap-5 items-center max-md:flex-col max-md:gap-0 bg-white drop-shadow-xl rounded-md p-8 max-md:px-5">
                  <div className="flex flex-col w-1/2 max-md:w-full">
                    <div className="mt-6 text-3xl font-bold leading-10">
					Organizational Information Access
                    </div>
                    <div className="mt-4 text-left leading-6">
					Concierge Chat dynamically provides your users with essential organizational information, guiding then through the intricacies of the DAO.
                    </div>
                  </div>
                  <div className="flex justify-center w-1/2 max-md:w-full">
                    <Image
                      loading="lazy"
                      src="/icons/solution.png"
                      alt="Expert Guidance"
                      width={200}
                      height={100}
                      className=""
                    />
                  </div>
                </div>
                <div className="flex gap-5 items-center max-md:flex-col max-md:gap-0 bg-white drop-shadow-xl rounded-md p-8 max-md:px-5">
                  <div className="flex justify-center w-1/2 max-md:w-full">
                    <Image
                      loading="lazy"
                      src="/icons/library.png"
                      alt="Expert Guidance"
                      width={200}
                      height={100}
                      className=""
                    />
                  </div>
                  <div className="flex flex-col w-1/2 max-md:w-full">
                    <div className="mt-6 text-3xl font-bold leading-10">
					Connection Facilitation:
                    </div>
                    <div className="mt-4 text-left leading-6">
					Utilize our comprehensive organizational mapping and AI tools to connect users with the right network members effortlessly.
                    </div>
                  </div>
                </div>
				<div className="flex gap-5 items-center max-md:flex-col max-md:gap-0 bg-white drop-shadow-xl rounded-md p-8 max-md:px-5">
                  <div className="flex flex-col w-1/2 max-md:w-full">
                    <div className="mt-6 text-3xl font-bold leading-10">
					Enhanced Accessibility
                    </div>
                    <div className="mt-4 text-left leading-6">
					Increase user participation and engagement with DAOs by providing them with personalized assistance, guidance, and education from our AI concierge.
                    </div>
                  </div>
                  <div className="flex justify-center w-1/2 max-md:w-full">
                    <Image
                      loading="lazy"
                      src="/icons/solution.png"
                      alt="Expert Guidance"
                      width={200}
                      height={100}
                      className=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col px-20 py-20 max-md:px-5">
          <div className="max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 relative">
              <div className="flex flex-col pl-10 w-1/2 max-md:ml-0 max-md:w-full">
                <div className="absolute mt-10 top-2 text-5xl font-bold text-black leading-[67px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                  Legal Information
                </div>
                <div className="text-lg leading-6 text-black max-md:max-w-full mt-40">
                  Concierge can utilize Ask Abe AI technology to provide legal
                  information to users, ensuring they have access to accurate
                  and up-to-date legal knowledge. With Ask Abe, users can ask
                  questions and receive reliable legal information instantly.
                </div>
                <div className="flex gap-4 items-start self-start pt-4 mt-4 text-base leading-6 whitespace-nowrap">
                  <Button>
                    <Link href="">Ask Abe</Link>
                  </Button>
                </div>
              </div>
              <div className="relative w-full mr-10 h-[500px] max-md:mt-10 max-md:max-w-full">
                <div className="absolute top-10 left-1/4 w-3/4 h-full">
                  <Image
                    src="/features/lib3.jpg"
                    alt="Image 2 description"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <div className="absolute top-1/3 left-1/5 w-1/3 h-3/4">
                  <Image
                    src="/logo/ASKABELOGO.png"
                    alt="Image 3 description"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row justify-center drop-shadow-2xl items-center w-full px-20 py-20 bg-background max-md:flex-col max-md:px-5 max-md:max-w-full">
            <div className="w-9/12 max-md:w-full">
              <Image
                loading="lazy"
                src="/features/integration.jpg"
                alt="Seamless Workflow"
                width={1000}
                height={960}
                className="mb-2.5 aspect-[1.79] drop-shadow-2xl rounded-lg max-md:mt-10 max-md:max-w-full"
              />
            </div>
            <div className="flex flex-col w-6/12 max-md:w-full max-md:ml-0 ml-5">
			<div className="text-base font-semibold leading-6 text-center text-black max-md:max-w-full">
                Enhance your website and User Experience with
              </div>
              <div className="text-5xl font-bold leading-10 text-end text-black max-md:mt-10 max-md:max-w-full">
                Seamless Integration
              </div>
              <div className="mt-6 text-lg leading-6 text-end items-center max-md:mt-10 max-md:max-w-full">
                Our chatbot seamlessly integrates into your existing systems and
                workflows, providing a smooth and efficient user experience.
              </div>
            </div>
          </div>
          
        </div>
      </div>
	  <Footer />
    </main>
  );
}
