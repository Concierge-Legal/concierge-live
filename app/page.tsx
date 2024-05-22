import Image from "next/image";
import Link from "next/link";
import { Nunito_Sans } from "next/font/google";

import Footer from "../components/footer";
import NavBar from "@/components/navBar";
export default function Home() {
  const features = [
    {
      title: "Unparalleled Customer Support",
      description:
        "Concierge understands and interacts with your business framework to provide dynamic solutions, significantly enhancing customer interaction and operational efficiency.",
      benefits: [
        {
          title: "Increased Efficiency",
          description:
            "Automates responses to common inquiries, allowing your staff to focus on more complex and higher-value interactions.",
        },
        {
          title: "Enhanced Customer Satisfaction",
          description:
            "Provides accurate and quick responses, enhancing user experience and boosting customer retention and loyalty.",
        },
        {
          title: "Revenue Growth",
          description:
            "Intelligently suggesting relevant services and products, effectively increasing cross-selling and upselling opportunities.",
        },
      ],
    },
    {
      title: "Ask Abe - Your Legal Guide",
      description:
        "Ask Abe complements Concierge by providing precise, legally verified information sourced directly from legislation.",
      benefits: [
        {
          title: "Trusted Legal Resource",
          description:
            "Empowers users with accurate legal information, enhancing your firm’s credibility and trustworthiness.",
        },
        {
          title: "Deep Legal Understanding",
          description:
            "Offers detailed insights with direct citations, making it an indispensable tool for users requiring thorough legal explanations.",
        },
        {
          title: "Integrated Support",
          description:
            "Works seamlessly with Concierge to handle specialized queries, providing a holistic customer service experience.",
        },
      ],
    },
    {
      title: "Extensive Professional Network",
      description:
        "Concierge leverages a comprehensive network of legal professionals to connect users with the most appropriate expertise, enhancing the delivery of specialized legal services.",
      benefits: [
        {
          title: "Optimized Client Matching",
          description:
            "Uses sophisticated algorithms to match client needs with the appropriate legal expertise within your network.",
        },
        {
          title: "Enhanced Service Delivery",
          description:
            "Streamlines the process of finding the right expert, saving time and improving client satisfaction.",
        },
        {
          title: "Scalable Business Opportunities",
          description:
            "Opens new avenues for collaboration and service offerings within the legal ecosystem.",
        },
      ],
    },
  ];
  return (
    <main>
      <NavBar />
      <div className="flex flex-col">
        <div className="flex overflow-hidden relative flex-col items-start px-16 py-20 w-full text-white min-h-[900px] max-md:px-5 max-md:max-w-full">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            src="/CONCIERGE.mp4"
          >
            Your browser does not support the video tag.
          </video>
          <div className="relative mt-52 text-2xl sm:text-5xl md:text-7xl lg:text-9xl  text-white font-bold leading-[67px] w-[560px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
            CONCIERGE
          </div>
          <div className="relative mt-6 text-lg leading-7 w-[560px] max-md:max-w-full">
            Tailored Guidance, Seamless Connections
          </div>
        </div>

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
      <h1 className="text-6xl font-nunitosans text-center text-black leading-[67px] max-md:text-4xl max-md:leading-[54px]">
        More than just a chatbot, the future of legal customer service
      </h1>
      <p className="mt-6 font-opensans text-center text-2xl leading-7 text-black">
      Your Concierge acts as your users first point of contact, welcoming and guiding them through your website, products, services, and anything else you would like your customers to know about your business. 
      </p>
      <p className="mt-6 font-opensans text-center text-2xl leading-7 text-black">
        Discover how our technology can transform your practice.
      </p>
    </div>

    <div className="flex flex-col items-center px-16 py-10 w-9/12 max-md:px-5 mt-10">
      <video
        className="rounded-lg shadow-lg"
        autoPlay
        loop
        muted
        playsInline
        src="/demoplaceholder.mp4"
      >
        Your browser does not support the video tag.
      </video>
    </div>

    <div className="flex flex-col items-center w-full px-16 py-20 max-md:px-5 mt-10 bg-white bg-opacity-80 rounded-lg shadow-lg">
      <div className="text-6xl font-bold leading-10 text-[#32CD32]">
        ADVANCED LEGAL AI TECHNOLOGY
      </div>
      
      <div className="flex flex-col justify-center px-16 py-20 w-full  max-md:px-5 max-md:max-w-full">
            <div className="mt-8 mb-2.5 max-md:mr-1 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow text-base text-black max-md:mt-10 max-md:max-w-full">
                    <div className="text-4xl font-bold leading-10 text-center max-md:max-w-full">
                    Boost your Revenue
                    </div>
                    <div className="mt-6 leading-6 text-center max-md:max-w-full">
                    Help your customers find exactly what they need with precision and efficiency.
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow text-base text-black max-md:mt-10 max-md:max-w-full">
                    <div className="text-4xl font-bold leading-10 text-center max-md:max-w-full">
                      Modernize Your UX
                    </div>
                    <div className="mt-6 leading-6 text-center max-md:max-w-full">
                    Transform your user experience with cutting-edge AI technology.
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow text-base text-black max-md:mt-10 max-md:max-w-full">
                    <div className="text-4xl font-bold leading-10 text-center max-md:max-w-full">
                      Automated Data Analytics
                    </div>
                    <div className="mt-6 leading-6 text-center max-md:max-w-full">
                    Leverage real-time insights through an intuitive business dashboard.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
      
    </div>
  </div>
</section>

      
        <div className="flex flex-col">
         
          
        </div>
      </div>
      <Footer />
    </main>
  );
}
