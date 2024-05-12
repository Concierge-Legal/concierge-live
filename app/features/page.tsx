import Image from "next/image";

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
    <div className="flex overflow-hidden relative flex-col items-start px-16 py-20 text-white leading-[150%] min-h-[382px] max-md:px-5">
    <Image
          src="/greenbackdrop.jpg"
          alt="Empowering Image"
          width={1500}
          height={400}
          className="absolute inset-0 w-full h-full object-cover"
        />
      <div className="relative mt-8 text-base font-semibold max-md:max-w-full">
        Smart
      </div>
      <div className="relative mt-4 text-4xl font-bold leading-[67.2px] max-md:max-w-full max-md:text-4xl">
        AI Chatbot Solution for your Legal Practice
      </div>
      <div className="relative mt-6 text-lg max-md:max-w-full">
      Enhanced features using AI technologies to streamline customer interactions and improve service delivery in the legal sector. Discover how our technology can transform your practice.
      </div>
    </div>
   

    <section className="flex flex-col px-16 py-20 font-bold text-center text-6xl text-black bg-white max-md:px-5">
      State of the Art Customer Service AI
      <div className="flex gap-5 justify-center mt-20 text-2xl leading-9 max-md:flex-wrap max-md:mt-10">
        {sectionHeadings.map((heading, index) => (
          <SectionHeading key={index} text={heading} />
        ))}
      </div>
    </section>
    <div className="flex flex-col px-16 py-20 bg-white max-md:px-5">
      <div className="mt-8 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col text-black max-md:mt-10 max-md:max-w-full">
              <div className="text-2xl font-semibold leading-6 max-md:max-w-full">
                Advanced Data Analytics
              </div>
              <div className="mt-4 text-5xl font-bold leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                with personalized business dashboard
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-black max-md:mt-10 max-md:max-w-full">
              <div className="text-lg leading-7 max-md:max-w-full">
                Conversion Rate
              </div>
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

    <div className="flex flex-col justify-center px-16 py-20 bg-white max-md:px-5">
      <div className="mt-8 max-md:mr-1 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch pb-2 my-auto text-base leading-6 text-black max-md:mt-10 max-md:max-w-full">
              <div className="text-4xl font-bold leading-10 max-md:max-w-full">
               Full Customization
              </div>
              <div className="mt-6 text-lg leading-7 max-md:max-w-full">
              Designed to adapt fully to your specific needs and preferences, Concierge offers a tailored experience, ensuring every user interaction aligns with your company identity and customer service objectives. 
              </div>
              <div className="flex gap-4 mt-10 max-md:flex-wrap">
              
                <div className="flex-1 max-md:max-w-full">
                  Appearance
                </div>
              </div>
              <div className="flex gap-4 mt-4 max-md:flex-wrap">
                
                <div className="flex-1 max-md:max-w-full">
                  Personality
                </div>
              </div>
              <div className="flex gap-4 mt-4 max-md:flex-wrap">
               
                <div className="flex-1 max-md:max-w-full">
                  Interactions
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <Image
              loading="lazy"
              src=""
              className="grow w-full aspect-[0.96] max-md:mt-10 max-md:max-w-full"
              width={576}
              height={600}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    
  
  </main>
  );
};
const dashboardFeatures = [
    {
      title: "Real-Time Analytics",
      description: "Monitor live data on user interactions to see what your clients are asking in real time. Understand immediate needs and adjust your services dynamically."
    },
    {
      title: "Behavioral Insights",
      description: "Track user behaviors, including question types and engagement levels. Identify patterns to improve user experience and increase client satisfaction."
    },
    {
      title: "Content Management",
      description: "Easily update and manage the knowledge base that powers your Concierge. Upload documents, edit information, and ensure your AI is always informed with the latest data."
    },
    {
      title: "Cost and Usage Tracking",
      description: "Access detailed reports on usage statistics and associated costs. Optimize your resources and budget more effectively with comprehensive cost analysis."
    }
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
  
  const FeatureSection: React.FC<FeatureSectionProps> = ({ title, description, benefits }) => {
    return (
      <section className="bg-white py-10">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-secondary">{title}</h2>
          <p className="text-lg text-center my-4 text-secondary">{description}</p>
          <ul className="space-y-4 my-6">
            {benefits.map(benefit => (
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