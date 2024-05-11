import Image from "next/image";
import Link from "next/link";
import Footer from "./components/footer";



export default function Home() {
  const features = [
    {
      title: "Unparalleled Customer Support",
      description: "Concierge understands and interacts with your business framework to provide dynamic solutions, significantly enhancing customer interaction and operational efficiency.",
      benefits: [
        { title: "Increased Efficiency", description: "Automates responses to common inquiries, allowing your staff to focus on more complex and higher-value interactions." },
        { title: "Enhanced Customer Satisfaction", description: "Provides accurate and quick responses, enhancing user experience and boosting customer retention and loyalty." },
        { title: "Revenue Growth", description: "Intelligently suggesting relevant services and products, effectively increasing cross-selling and upselling opportunities." }
      ]
    },
    {
      title: "Ask Abe - Your Legal Guide",
      description: "Ask Abe complements Concierge by providing precise, legally verified information sourced directly from legislation.",
      benefits: [
        { title: "Trusted Legal Resource", description: "Empowers users with accurate legal information, enhancing your firm’s credibility and trustworthiness." },
        { title: "Deep Legal Understanding", description: "Offers detailed insights with direct citations, making it an indispensable tool for users requiring thorough legal explanations." },
        { title: "Integrated Support", description: "Works seamlessly with Concierge to handle specialized queries, providing a holistic customer service experience." }
      ]
    },
    {
      title: "Extensive Professional Network",
      description: "Concierge leverages a comprehensive network of legal professionals to connect users with the most appropriate expertise, enhancing the delivery of specialized legal services.",
      benefits: [
        { title: "Optimized Client Matching", description: "Uses sophisticated algorithms to match client needs with the appropriate legal expertise within your network." },
        { title: "Enhanced Service Delivery", description: "Streamlines the process of finding the right expert, saving time and improving client satisfaction." },
        { title: "Scalable Business Opportunities", description: "Opens new avenues for collaboration and service offerings within the legal ecosystem." }
      ]
    }
  ];
  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <main className="flex-grow pt-36 p-10">
        {/* Hero Section with Banner Graphic */}
        <section className="relative text-center w-full" style={{ minHeight: '40vh' }}>
          {/* Placeholder for banner graphic */}
          <div className="absolute inset-0">
            <Image 
              src="/path/to/your/banner-image.jpg" // Path to your banner image
              layout="fill" 
              objectFit="cover" 
              alt=""
            />
          </div>
          
          {/* Text overlay on banner */}
          <div className="relative flex flex-col justify-center items-center h-full pt-20">
            <h1 className="text-6xl font-bold text-black mb-6">
              Enhance Your Legal Practice with AI
            </h1>
            <p className="text-xl max-w-4xl mx-auto text-black mb-8">
              Concierge leverages advanced AI to streamline customer interactions and improve service delivery in the legal sector. Discover how our technology can transform your practice.
            </p>
            <Link href="/chat" className="mt-4 px-8 py-4 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition-colors">
                Demo Concierge
            </Link>
          </div>
        </section>

        <div className="min-h-screen flex flex-col text-secondary bg-primary">
          {features.map(feature => (
            <FeatureSection key={feature.title} title={feature.title} description={feature.description} benefits={feature.benefits} />
          ))}
        </div>


        {/* Dashboard Insights Section */}
        <section className="bg-white py-10">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-green-500">Powerful Dashboard for In-Depth Insights</h2>
            <p className="text-lg text-center my-4">
              Gain unparalleled insights into customer interactions with our comprehensive dashboard.
            </p>
            <div className="flex flex-wrap justify-center gap-10 mt-6">
              {dashboardFeatures.map(({ title, description }) => (
                <div key={title} className="max-w-md bg-gray-100 p-6 shadow-lg rounded-lg">
                  <h3 className="text-xl font-semibold text-green-500">{title}</h3>
                  <p>{description}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/dashboard" className="px-8 py-4 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition-colors">
                Explore Your Dashboard
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

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