import Image from "next/image";
import NavBar from "@/components/navBar";
interface SectionHeadingProps {
  text: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ text }) => {
  return <div>{text}</div>;
};

export default function Features() {
  const sectionHeadings = [
    "Knows Your Industry",
    "Knows Your Products/Services (Network)",
    "Knows Primary Source Legislation",
    "Knows your Website/UX",
  ];

  return (
    <main>
        

      <div className="flex flex-col">
        <section className="relative flex justify-center items-center bg-white text-black">
          <div className="absolute top-0 left-0 w-full h-full">
            <Image
              loading="lazy"
              src=""
              className="w-full h-full object-cover"
              width={576}
              height={400}
              alt=""
            />
          </div>

          <div className="relative z-10 flex flex-col items-center w-full px-10 py-20 max-md:px-5">
            <div className="flex flex-col md:w-11/12 px-20 py-20  max-md:px-5 max-md:w-full">
              <h1 className="text-8xl font-nunitosans text-center text-black leading-[67px] max-md:text-4xl max-md:leading-[54px]">
                FEATURES
              </h1>
            </div>

            <div className="flex flex-col  w-full px-16 py-20 max-md:px-5 mt-10 bg-white bg-opacity-80 rounded-lg shadow-lg">
              <div className="text-6xl font-bold font-nunitosans leading-10 text-[#32CD32]">
                State of the Art Customer Service AI
              </div>
            </div>
            <div className="flex flex-col justify-center px-16 py-20 w-full max-md:px-5 max-md:max-w-full">
              <div className="mt-8 mb-2.5 max-md:mr-1 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col self-stretch my-auto text-black max-md:mt-10 max-md:max-w-full">
                      <div className="flex flex-col justify-center pl-8 max-md:pl-5 max-md:max-w-full">
                        <div className="text-3xl font-bold leading-10 max-md:max-w-full">
                          {" "}
                          Industry Expertise{" "}
                        </div>
                        <div className="mt-4 text-base leading-6 max-md:max-w-full">
                          {" "}
                          Understands the nuances and specifics of your industry
                          to provide tailored out-of-the-box solutions. Our
                          engineering team has aggregated leading industrial
                          resources and knowledge for you to ensure your agent
                          is deeply familiar with your industry and the type of
                          users you interact with.{" "}
                        </div>
                      </div>
                      <div className="flex flex-col justify-center pl-8 mt-10 max-md:pl-5 max-md:max-w-full">
                        <div className="text-3xl font-bold leading-10 max-md:max-w-full">
                          {" "}
                          Website & UX Familiarity{" "}
                        </div>
                        <div className="mt-4 text-base leading-6 max-md:max-w-full">
                          {" "}
                          We seamlessly integrate your agent with your existing
                          website and user experience, allowing for frictionless
                          introduction to your users. We also work with your
                          team to ensure your initial agent looks, performs, and
                          behaves the way you want – all while enhancing (but
                          never overshadowing) your existing site.
                        </div>
                      </div>
                      <div className="flex flex-col justify-center pl-8 mt-10 max-md:pl-5 max-md:max-w-full">
                        <div className="text-3xl font-bold leading-10 max-md:max-w-full">
                          {" "}
                          Help Your Users Get to Know You{" "}
                        </div>
                        <div className="mt-4 text-base leading-6 max-md:max-w-full">
                          {" "}
                          Give users access to all of your latest products,
                          services, publications, initiatives and more using our
                          intuitive Dashboard. Concierge will warmly welcome
                          users to your platform, and make sure they get
                          connected to the products and people they need.{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <Image
                      src=""
                      alt="diagram"
                      width={480}
                      height={500}
                      className="grow w-full aspect-[0.96] max-md:mt-10 max-md:max-w-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex flex-col justify-center px-16 py-20 w-full  max-md:px-5 max-md:max-w-full">
                <div className="mt-8 mb-2.5 max-md:mr-1 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
                        <div className="text-base font-semibold leading-6 text-black max-md:max-w-full">
                          {" "}
                          Powered by Ask Abe Technology{" "}
                        </div>
                        <div className="mt-4 text-4xl  font-bold text-black leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                          {" "}
                          Primary Source Legislation{" "}
                </div>
                        <div className="mt-6 text-lg leading-7 text-black max-md:max-w-full">
                          {" "}
                          Provides accurate and up-to-date legal information
                          taken from primary legislative sources, like our
                          partner Ask Abe. Abe allows you to give users
                          unparalleled access to primary source legislation
                          usually reserved solely for legal professionals.{" "}
                        </div>

                        <div className="flex gap-5 justify-between items-start self-start pt-4 mt-6 text-base leading-6 text-black whitespace-nowrap">
                          <div className="justify-center px-6 py-3 border border-black border-solid max-md:px-5">
                            {" "}
                            Button{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                      <Image
                        src=""
                        alt="diagram"
                        width={480}
                        height={500}
                        className="grow w-full aspect-[0.96] max-md:mt-10 max-md:max-w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col  w-full px-16 py-20 max-md:px-5 mt-10 bg-white bg-opacity-80 rounded-lg shadow-lg">
              <div className="text-6xl font-bold font-nunitosans leading-10 text-[#32CD32]">
                Powerful Functionality
              </div>
            </div>
            <div className="flex flex-col  w-full px-16 py-20 max-md:px-5 mt-10 bg-white bg-opacity-80 rounded-lg shadow-lg">
              <div className="text-6xl font-bold font-nunitosans leading-10 text-[#32CD32]">
                Full Customization
              </div>
              <div className="flex flex-col justify-center px-16 max-md:px-5">
                <div className="mt-8 max-md:mr-1 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col self-stretch pb-2 my-auto text-base leading-6 text-black max-md:mt-10 max-md:max-w-full">
                        <div className="text-lg leading-7 max-md:max-w-full">
                          Designed to adapt fully to your specific needs and
                          preferences, Concierge offers a tailored experience,
                          ensuring every user interaction aligns with your
                          company identity and customer service objectives.
                        </div>
                      </div>
                    </div>
                   
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col px-16 max-md:px-5">
                <div className="justify-center mt-20 max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow text-base text-black max-md:mt-8">
                        <div className="mt-6 text-2xl font-bold leading-9 text-center">
                          Appearance
                        </div>
                        <div className="mt-4 leading-6 text-center">
                          Customize your agent to match your brand identity.
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow text-base text-black max-md:mt-8">
                        <div className="mt-6 text-2xl font-bold leading-9 text-center">
                          Personality
                        </div>
                        <div className="mt-4 leading-6 text-center">
                          Tailor the AI’s personality to align with your brand
                          voice and customer expectations.
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow text-base text-black max-md:mt-8">
                        <div className="mt-6 text-2xl font-bold leading-9 text-center">
                          Interactions
                        </div>
                        <div className="mt-4 leading-6 text-center">
                          Define how the AI interacts with customers to ensure a
                          consistent and engaging experience.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              

            <div className="flex flex-col  w-full px-16 py-20 max-md:px-5 mt-10 bg-white bg-opacity-80 rounded-lg shadow-lg">
              <div className="text-6xl font-bold font-nunitosans leading-10 text-[#32CD32]">
                Automated Data Analytics
              </div>
              <div className="flex flex-col px-16 max-md:px-5">
                <div className="mt-8 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col text-black max-md:mt-10 max-md:max-w-full">
                        <div className="mt-4 text-5xl font-bold leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                          with personalized business dashboard
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow text-black max-md:mt-10 max-md:max-w-full">
                        <div className="text-lg leading-7 max-md:max-w-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center px-16  mt-20 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                  <video
                    className="px-20 object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    src="/CONCIERGE.mp4"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
const dashboardFeatures = [
  {
    title: "Real-Time Analytics",
    description:
      "Monitor live data on user interactions to see what your clients are asking in real time. Understand immediate needs and adjust your services dynamically.",
  },
  {
    title: "Behavioral Insights",
    description:
      "Track user behaviors, including question types and engagement levels. Identify patterns to improve user experience and increase client satisfaction.",
  },
  {
    title: "Content Management",
    description:
      "Easily update and manage the knowledge base that powers your Concierge. Upload documents, edit information, and ensure your AI is always informed with the latest data.",
  },
  {
    title: "Cost and Usage Tracking",
    description:
      "Access detailed reports on usage statistics and associated costs. Optimize your resources and budget more effectively with comprehensive cost analysis.",
  },
];

interface Benefit {
  title: string;
  description: string;
}

interface FeatureSectionProps {
  title: string;
  benefits: Benefit[];
  description: string;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  description,
  benefits,
}) => {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-secondary">
          {title}
        </h2>
        <p className="text-lg text-center my-4 text-secondary">{description}</p>
        <ul className="space-y-4 my-6">
          {benefits.map((benefit) => (
            <li key={benefit.title} className="text-secondary">
              <strong>{benefit.title}:</strong> {benefit.description}
            </li>
          ))}
        </ul>
        <div className="text-center mt-8">
          <button className="px-8 py-4 bg-accent text-white rounded-lg shadow hover:bg-green-600 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};
