import Image from "next/image";
import Link from "next/link";

import Footer from "./components/footer";

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
        <div className="relative mt-52 text-2xl sm:text-5xl md:text-7xl lg:text-9xl font-bold text-white font-bold leading-[67px] w-[560px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
          CONCIERGE
        </div>
        <div className="relative mt-6 text-lg leading-7 w-[560px] max-md:max-w-full">
          Placeholder
        </div>
      </div>

      <section className="relative flex justify-center items-center bg-white text-black mt-20">
  <div className="absolute top-0 left-0 w-full h-full">
    <video
      className="w-full h-full object-cover"
      autoPlay
      loop
      muted
      playsInline
      src="/greenarrow.mp4"
    ></video>
  </div>
  
  <div className="z-10 flex w-full justify-center items-center px-16 py-20 max-md:px-5">
    <div className="flex flex-col md:w-6/12 px-20 py-20 bg-white bg-opacity-80 rounded-lg shadow-lg max-md:px-5 max-md:w-full">
      <h1 className="text-6xl font-bold text-black leading-[67px] max-md:text-4xl max-md:leading-[54px]">
        Enhance your legal practice with AI
      </h1>
      <p className="mt-6 text-lg leading-7 text-black">
        Concierge leverages advanced AI to streamline customer interactions and improve service delivery in the legal sector. Discover how our technology can transform your practice.
      </p>
    </div>
  </div>
</section>

      <div className="flex flex-col items-center px-16 py-10 w-full bg-white max-md:px-5 max-md:max-w-full">
        
        <div className="flex justify-center items-center self-stretch px-36 py-10 mt-10 mb-2.5 max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <video
            className=""
            autoPlay
            loop
            muted
            playsInline
            src="/demoplaceholder.mp4"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>

    // <div>
    // <div className="min-h-screen flex flex-col bg-white text-black">

    //   <main className="flex-grow">
    //     <section
    //       className="relative text-center w-full"
    //       style={{ minHeight: "40vh" }}
    //     >
    //       <div className="absoluite inset-0" style={{ paddingTop: "56.25%" }}>
    //         <video
    //           className="absolute top-0 left-0 w-full h-full object-cover"
    //           autoPlay
    //           loop
    //           muted
    //           playsInline
    //           src="/CONCIERGE.mp4"
    //         >
    //           Your browser does not support the video tag.
    //         </video>
    //       </div>

    //       {/* Text overlay on video */}
    //       <div className="absolute inset-0 flex flex-col justify-center items-center">
    //   <h1 className="text-2xl sm:text-5xl md:text-7xl lg:text-9xl font-bold text-white mb-4">
    //     CONCIERGE
    //   </h1>
    //   <h2 className="text-lg sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#32CD32]">
    //     Enhance Your Legal Practice with AI
    //   </h2>
    //   <p className="text-xs sm:text-md md:text-lg lg:text-xl max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-4xl mx-auto text-white mb-8">
    //     Concierge leverages advanced AI to streamline customer interactions and improve service delivery in the legal sector. Discover how our technology can transform your practice.
    //   </p>
    //   <Link href="/chat" className="HomepageButton">
    //     Demo Concierge
    //   </Link>
    //       </div>
    //     </section>

    //   </main>

    // </div>

    //   <Footer />
    // </div>
  );
}
