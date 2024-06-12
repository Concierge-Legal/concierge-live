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
		 <div className="flex flex-col bg-lightBlue">
      <div className="flex flex-col items-start px-16 py-20 w-full text-black max-md:px-5 max-md:max-w-full">
        <div className="mt-8 text-6xl font-bold leading-[67.2px] max-md:max-w-full max-md:text-4xl">
          Unlock DAO Potential
        </div>
        <div className="mt-6 mb-8 text-lg leading-7 max-md:max-w-full">
          Discover our suite of features designed to optimize DAO performance and reach.
        </div>
      </div>
      <div className="flex flex-col items-center px-16 py-20 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="mt-4 text-5xl font-bold text-center text-black leading-[57.6px] max-md:max-w-full max-md:text-4xl">
          Solutions you are going to love
        </div>
        <div className="mt-6 text-lg leading-7 text-center text-black max-md:max-w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <div className="self-stretch mt-20 mb-2.5 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-8 max-md:max-w-full">
                <div className="bg-white drop-shadow-xl rounded-md border border-solid max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow justify-center self-stretch p-6 text-base leading-6 text-black max-md:px-5">
                        <div className="mt-2 text-2xl font-bold leading-9">
						Network Directory
                        </div>
                        <div className="mt-2 leading-6">
						Utilize our comprehensive organizational mapping and AI
                      tools to connect users with the right network members
                      effortlessly.
                        </div>
                       
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                      <Image src="/homepage/network.jpg" alt="Section image" layout="responsive" width={400} height={400} className="grow self-stretch w-full aspect-[0.87]" />
                    </div>
                  </div>
                </div>
                <div className="mt-8 bg-white drop-shadow-xl rounded-md border border-solid  max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow justify-center self-stretch p-6 text-base leading-6 text-black max-md:px-5">
                        <div className="mt-2 text-2xl font-bold leading-9">
						Comprehensive Management Tools
                        </div>
                        <div className="mt-2 leading-6">
						Utilize our robust dashboard for complete customization of
                      your Concierge instance, offering timely analytics on user
                      interactions.
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                      <Image src="/" alt="Section image" layout="responsive" width={400} height={400} className="grow self-stretch w-full aspect-[0.87]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow self-stretch w-full text-base leading-6 text-black bg-white drop-shadow-xl rounded-md border border-solid max-md:mt-8 max-md:max-w-full">
                <div className="flex flex-col justify-center p-12 max-md:px-5 max-md:max-w-full">
                  <div className="mt-2 text-4xl font-bold leading-10 max-md:max-w-full">
				  Dynamic Knowledge Extension
                  </div>
                  <div className="mt-6 leading-6 max-md:max-w-full">
				  Provide users with direct access to your entire library of
                      organizational information through our AI interface.
                  </div>
                </div>
                <Image src="/homepage/knowledgehub.jpg" alt="Section image large" layout="responsive" width={800} height={900} className="w-full  max-md:max-w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col px-16 py-8 w-full max-md:px-5 max-md:max-w-full">
        <div className="mt-8 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-darkestBlue max-md:mt-10 max-md:max-w-full">
                <div className="mt-4 text-5xl font-bold leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
				Solutions your members are going to love
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-darkestBlue max-md:mt-10">
              <Image src="/homepage/connect.jpg" alt="Icon" width={200} height={200} className="aspect-square" />
                <div className="mt-6 text-3xl font-bold leading-10">
				Enhanced Visibility and Exposure
                </div>
                <div className="mt-6 text-base leading-6">
				Ensure network members are visible and accessible through
                      our organizational network directory.
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-darkestBlue max-md:mt-10">
			  <Image src="/homepage/connection.jpg" alt="Icon" width={200} height={200} className="aspect-square" />
                <div className="mt-6 text-3xl font-bold leading-10">
                User Connections
                </div>
                <div className="mt-6 text-base leading-6">
                Dynamically connect users with the right network members
                      via our AI, facilitating better interactions and
                      conversions.
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-darkestBlue max-md:mt-10">
                <Image src="/homepage/optimization.jpg" alt="Icon" width={200} height={200} className="aspect-square" />
                <div className="mt-6 text-3xl font-bold leading-10">
				Brand Optimization Platform
                </div>
                <div className="mt-6 text-base leading-6">
				Enable network members to intuitively optimize their
                      branding and dynamically present their portfolio of
                      products and services.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
	  <div className="flex flex-col">
	  <div className="relative flex flex-col items-start px-16 py-20 w-full max-md:px-5 max-md:max-w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/homepage/clouds.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-30"
        />
      </div>

      <div className="relative self-stretch max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto text-black max-md:mt-10 max-md:max-w-full">
              <div className="text-4xl font-bold leading-10 max-md:max-w-full">
                Knowledge Extension
              </div>
              <div className="mt-6 text-lg leading-7 max-md:max-w-full">
                Provide users with direct access to your entire library of
                organizational information through our AI interface.
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[57%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-end text-black max-md:mt-10 max-md:max-w-full">
              {/* <Image
                loading="lazy"
                src="/homepage/clouds.jpg"
                width={64}
                height={64}
                className="self-start aspect-square"
                alt="Image Alt Text"
              /> */}
              <div className="text-4xl font-bold leading-10 mt-[806px] w-[480px] max-md:mt-10 max-md:max-w-full">
                Network Directory
              </div>
              <div className="mt-6 text-lg leading-7 w-[480px] max-md:max-w-full">
                Utilize our comprehensive organizational mapping and AI
                tools to connect users with the right network members
                effortlessly.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mt-20 text-4xl font-bold leading-10 text-white w-[480px] max-md:mt-10 max-md:max-w-full">
        Comprehensive Management Tools
      </div>
      <div className="relative mt-6 mb-32 text-lg leading-7 text-white w-[480px] max-md:mb-10 max-md:max-w-full">
        Utilize our robust dashboard for complete customization of
        your Concierge instance, offering timely analytics on user
        interactions.
      </div>
    </div>
      <div className="flex flex-col items-center px-16 py-20 w-full bg-white max-md:px-5 max-md:max-w-full">
       
        <div className="mt-4 text-5xl font-bold text-center text-black leading-[57.6px] max-md:max-w-full max-md:text-4xl">
		Solutions your members are going to love
        </div>
        <div className="mt-6 text-lg leading-7 text-center text-black max-md:max-w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        </div>
        <div className="self-stretch mt-20 mb-2.5 bg-white max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex overflow-hidden relative flex-col grow justify-end p-8 text-base leading-6 text-white aspect-[0.66] max-md:px-5 max-md:mt-8">
                <Image
                  loading="lazy"
                  src="/features/1.png"
                  layout="fill"
                  objectFit="cover"
                  alt="Image Alt Text"
                />
                <div className="relative mt-2 text-3xl font-bold leading-10">
				Enhanced Visibility and Exposure
                </div>
                <div className="relative mt-6 leading-6">
				Ensure network members are visible and accessible through
                      our organizational network directory.
                </div>
              
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex overflow-hidden relative flex-col grow justify-end p-8 text-base leading-6 text-white aspect-[0.66] max-md:px-5 max-md:mt-8">
                <Image
                  loading="lazy"
                  src="/features/7.png"
                  layout="fill"
                  objectFit="cover"
                  alt="Image Alt Text"
                />
                <div className="relative mt-2 text-3xl font-bold leading-10">
				User Connections
                </div>
                <div className="relative mt-6 leading-6">
				Dynamically connect users with the right network members
                      via our AI, facilitating better interactions and
                      conversions.
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex overflow-hidden relative flex-col grow justify-end p-8 text-base leading-6 text-white aspect-[0.66] max-md:px-5 max-md:mt-8">
                <Image
                  loading="lazy"
                  src="/features/4.png"
                  layout="fill"
                  objectFit="cover"
                  alt="Image Alt Text"
                />
                <div className="relative mt-2 text-3xl font-bold leading-10">
				Brand Optimization Platform
                </div>
                <div className="relative mt-6 leading-6">
				Enable network members to intuitively optimize their
                      branding and dynamically present their portfolio of
                      products and services.
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center px-16 py-20 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="justify-between mt-48 mb-36 max-md:my-10 max-md:mr-1 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto text-base leading-6 text-black max-md:mt-10 max-md:max-w-full">
                <div className="font-semibold max-md:max-w-full">Tagline</div>
                <div className="mt-4 text-5xl font-bold leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                  Medium length section heading goes here
                </div>
                <div className="mt-6 text-lg leading-7 max-md:max-w-full">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat.
                </div>
                <div className="flex gap-5 justify-between items-start self-start pt-4 mt-4 whitespace-nowrap">
                  <div className="justify-center px-6 py-3 border border-black border-solid max-md:px-5">
                    Button
                  </div>
                  <div className="flex gap-2 justify-center mt-3">
                    <div>Button</div>
                    <Image
                      loading="lazy"
                      src="/"
                      width={24}
                      height={24}
                      className="shrink-0 w-6 aspect-square"
                      alt="Button Icon"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center px-5 py-11 w-full text-black bg-white max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col p-8 bg-white border border-black border-solid max-md:px-5 max-md:max-w-full">
                  <Image
                    loading="lazy"
                    src="/"
                    width={48}
                    height={48}
                    className="w-12 aspect-square"
                    alt="Image Alt Text"
                  />
                  <div className="mt-8 text-2xl font-bold leading-8 max-md:max-w-full">
                    Subheading one
                  </div>
                  <div className="mt-4 text-base leading-6 max-md:max-w-full">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla,
                    ut commodo diam libero vitae erat.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center px-16 py-20 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="mt-8 text-base font-semibold leading-6 text-center text-black max-md:max-w-full">
          Tagline
        </div>
        <div className="mt-4 text-5xl font-bold text-center text-black leading-[57.6px] max-md:max-w-full max-md:text-4xl">
          Short heading goes here
        </div>
        <div className="mt-6 text-lg leading-7 text-center text-black w-[768px] max-md:max-w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </div>
        <div className="flex flex-col justify-center self-stretch mt-20 mb-2.5 bg-white max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-0 text-xl font-bold leading-7 text-center text-black border-t border-r border-l border-black border-solid max-md:flex-wrap">
            <div className="flex-1 justify-center px-8 py-6 border-r border-solid border-r-black max-md:px-5">
              Tab one
            </div>
            <div className="flex-1 justify-center px-8 py-6 border-r border-b border-solid border-b-black border-r-black max-md:px-5">
              Tab two
            </div>
            <div className="flex-1 justify-center px-8 py-6 border-r border-b border-solid border-b-black border-r-black max-md:px-5">
              Tab three
            </div>
            <div className="flex-1 justify-center px-8 py-6 border-r border-b border-solid border-b-black border-r-black max-md:px-5">
              Tab four
            </div>
            <div className="flex-1 justify-center px-8 py-6 border-r border-b border-solid border-b-black border-r-black max-md:px-5">
              Tab five
            </div>
            <div className="flex-1 justify-center px-8 py-6 border-b border-solid border-b-black max-md:px-5">
              Tab six
            </div>
          </div>
          <div className="p-12 border-r border-b border-l border-solid border-b-black border-x-black max-md:px-5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col justify-center self-stretch my-auto text-base leading-6 text-black max-md:mt-10 max-md:max-w-full">
                  <div className="font-semibold max-md:max-w-full">Tagline</div>
                  <div className="mt-4 text-4xl font-bold leading-10 max-md:max-w-full">
                    Medium length section heading goes here
                  </div>
                  <div className="mt-6 leading-6 max-md:max-w-full">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla,
                    ut commodo diam libero vitae erat.
                  </div>
                  <div className="flex gap-5 pr-20 mt-8 whitespace-nowrap max-md:flex-wrap max-md:pr-5">
                    <div className="justify-center px-6 py-3 border border-black border-solid max-md:px-5">
                      Button
                    </div>
                    <div className="flex gap-2 justify-center my-auto">
                      <div>Button</div>
                      <Image
                        loading="lazy"
                        src="/"
                        width={24}
                        height={24}
                        className="shrink-0 w-6 aspect-square"
                        alt="Button Icon"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <Image
                  loading="lazy"
                  src="/"
                  layout="responsive"
                  width={400}
                  height={384}
                  className="grow w-full aspect-[1.04] max-md:mt-10 max-md:max-w-full"
                  alt="Responsive Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
      <div className="flex flex-col bg-lightBlue items-stretch">
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
          <div className="flex flex-col py-20 px-36 bg-background max-md:px-5">
            <div className="mt-4 text-5xl font-bold text-center text-black leading-[57.6px] max-md:max-w-full max-md:text-4xl">
              Solutions your users are going to love
            </div>
            <div className="self-stretch mt-20 px-10 max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col gap-10 max-md:gap-0">
                <div className="flex gap-5 items-center max-md:flex-col max-md:gap-0 bg-white drop-shadow-xl rounded-md p-8 max-md:px-5">
                  <div className="flex flex-col w-1/2 max-md:w-full">
                    <div className="mt-6 text-3xl font-bold leading-10">
                      Organizational Information Access
                    </div>
                    <div className="mt-4 text-left leading-6">
                      Concierge Chat dynamically provides your users with
                      essential organizational information, guiding then through
                      the intricacies of the DAO.
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
                      Utilize our comprehensive organizational mapping and AI
                      tools to connect users with the right network members
                      effortlessly.
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center px-16 py-12 bg-white drop-shadow-xl rounded-md max-md:px-5">
                  <div className="mt-8 max-md:mr-1 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                      <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                        <Image
                          loading="lazy"
                          src="/homepage/accesibility.jpg"
                          alt="Image 1"
                          width={500}
                          height={525}
                          className="grow w-full aspect-[0.96] max-md:mt-10 max-md:max-w-full"
                        />
                      </div>
                      <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col self-stretch my-auto text-base leading-6 text-black max-md:mt-10 max-md:max-w-full">
                          <div className="mt-4 text-4xl font-bold leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                            Enhance Accessibility
                          </div>
                          <div className="mt-6 text-lg leading-7 max-md:max-w-full">
                            Increase user participation and engagement with DAOs
                            by providing them with personalized assistance,
                            guidance, and education from our AI concierge.
                          </div>
                          <div className="flex gap-5 justify-between items-start self-start pt-4 mt-6">
                            <div className="justify-center px-6 py-3 border border-black border-solid max-md:px-5">
                              Learn More
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-5 items-center max-md:flex-col max-md:gap-0 bg-white drop-shadow-xl rounded-md p-8 max-md:px-5">
                  <div className="flex flex-col w-1/2 max-md:w-full">
                    <div className="mt-6 text-3xl font-bold leading-10">
                      Enhanced Accessibility
                    </div>
                    <div className="mt-4 text-left leading-6">
                      Increase user participation and engagement with DAOs by
                      providing them with personalized assistance, guidance, and
                      education from our AI concierge.
                    </div>
                  </div>
                  <div className="flex justify-center w-1/2 max-md:w-full">
                    <Image
                      loading="lazy"
                      src="/homepage/accesibility.jpg"
                      alt="Expert Guidance"
                      width={300}
                      height={300}
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
