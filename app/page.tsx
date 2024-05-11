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

      </main>

      <Footer />
    </div>
  );
}

