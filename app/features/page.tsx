import Image from "next/image";
export default function Features() {
  
  return (
    <main>
    <section className="flex overflow-hidden relative flex-col items-start px-16 py-20 leading-[150%] min-h-[900px] max-md:px-5">
      <Image
          src="/featuresplaceholder.jpg"
          alt="Empowering Image"
          width={1500}
          height={299}
          className="absolute inset-0 w-full h-full object-cover"
        />

      <h1 className="relative mt-48 text-6xl font-bold text-white leading-[67px] w-[560px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
        Enhance Your Legal Practice with AI
      </h1>
      <p className="relative mt-6 text-lg leading-7 text-white w-[560px] max-md:max-w-full">
        Concierge leverages advanced AI to streamline customer interactions and improve service delivery in the legal sector. Discover how our technology can transform your practice.
      </p>
      
    </section>

    <section className="flex overflow-hidden relative flex-col items-center px-16 py-20 text-white leading-[150%] min-h-[479px] max-md:px-5">
   
      <h2 className="relative mt-8 text-5xl font-bold text-center leading-[58px] w-[768px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
      Real-Time Analytics
      </h2>
      <p className="relative mt-6 text-lg text-center max-md:max-w-full">
      Monitor live data on user interactions to see what your clients are asking in real time. Understand immediate needs and adjust your services dynamically.
      </p>

    </section>
    
  
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