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
          <div className="relative mt-36 top-5/6 text-darkestBlue text-center text-5xl font-raleway font-bold leading-[80px] max-w-screen-md mt-28 max-md:max-w-full max-md:mt-10">
            FEATURES
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
              Concierge Knows Your
            </div>
            <div className="self-stretch mt-20 px-10  max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col gap-10 max-md:gap-0">
                <div className="flex gap-5 items-center max-md:flex-col max-md:gap-0 bg-white drop-shadow-xl rounded-md p-8 max-md:px-5">
                  <div className="flex flex-col w-1/2 max-md:w-full">
                    <div className="mt-6 text-3xl font-bold leading-10">
                      Industry
                    </div>
                    <div className="mt-4 text-left leading-6">
                      Concierge understands the nuances and specifics of your
                      industry to provide tailored out-of-the-box solutions. Our
                      engineering team has aggregated leading industrial
                      resources and knowledge for you to ensure your agent is
                      deeply familiar with your industry and the type of users
                      you interact with.
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
                      Company
                    </div>
                    <div className="mt-4 text-left leading-6">
                      Our chatbot leverages metadata to deliver highly relevant
                      search results, ensuring a seamless user experience. By
                      analyzing user behavior and preferences, we are able to
                      provide personalized recommendations and streamline the
                      search process.
                    </div>
                  </div>
                </div>
                <div className="flex gap-5 items-center max-md:flex-col max-md:gap-0 bg-white drop-shadow-xl rounded-md p-8 max-md:px-5">
                  <div className="flex flex-col w-1/2 max-md:w-full">
                    <div className="mt-6 text-3xl font-bold leading-10">
                      Product and Service
                    </div>
                    <div className="mt-4 text-left leading-6">
                      Stay ahead of the curve with curated industry knowledge.
                      Access the latest trends, research, and developments in
                      the legal sector to make informed decisions and stay
                      competitive.
                    </div>
                    <div className="flex gap-4 mt-10 max-md:flex-wrap">
                      <Image
                        src="/icons/bulb.png"
                        alt="Accurate Results"
                        width={16}
                        height={16}
                        className="shrink-0 my-auto w-4 aspect-square"
                      />
                      <div className="flex-1 max-md:max-w-full">
                        Search and weight products/services according to
                        customer prompts.
                      </div>
                    </div>
                    <div className="flex gap-4 mt-4 max-md:flex-wrap">
                      <Image
                        src="/icons/bulb.png"
                        alt="Algorithms"
                        width={16}
                        height={16}
                        className="shrink-0 my-auto w-4 aspect-square"
                      />
                      <div className="flex-1 max-md:max-w-full">
                        Utilize advanced algorithms to match customer needs with
                        the best options available.
                      </div>
                    </div>
                    <div className="flex gap-4 mt-4 max-md:flex-wrap">
                      <Image
                        src="/icons/bulb.png"
                        alt="Save Time"
                        width={16}
                        height={16}
                        className="shrink-0 my-auto w-4 aspect-square"
                      />
                      <div className="flex-1 max-md:max-w-full">
                        Save Time and Effort in Helping Users Find Legal
                        Solutions
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center w-1/2 max-md:w-full">
                    <Image
                      loading="lazy"
                      src="/icons/new-product.png"
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
                  Concierge utilizes Ask Abe AI technology to provide legal
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
