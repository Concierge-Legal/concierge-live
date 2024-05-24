import Image from "next/image";
import React from "react";
import Footer from "../components/footer";
import NavBar from "@/components/navBar";


export default function Home() {

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
            src="/landing.mp4"
          >
            Your browser does not support the video tag.
          </video>
          <div className="relative mt-52 text-2xl sm:text-5xl md:text-7xl lg:text-9xl text-white font-bold leading-[67px] w-[560px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
            CONCIERGE
          </div>
          <div className="relative mt-6 text-lg leading-7 w-[560px] max-md:max-w-full">
            Tailored Guidance, Seamless Connections
          </div>
        </div>

        <section className="relative flex justify-center items-center bg-white text-black">
          <div className="relative z-10 flex flex-col w-full px-10 py-20 ">
            <h1 className="text-5xl font-bold text-mediumBlue">
              More Than Just a Chatbot
              <p className="text-6xl text-end font-bold text-mediumBlue mt-2">
                the Future of Legal Customer Service
              </p>
            </h1>

            <p className="mt-4 pt-6 pl-96 text-xl text-middle leading-7 text-black">
              Concierge acts as your users first point of contact,
              welcoming and guiding them through your website, products,
              services, and anything else you would like your customers to know
              about your business.
            </p>

            <div className="flex justify-center w-full mt-10">
              <video
                className="rounded-lg shadow-lg w-full max-w-4xl"
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
        </section>
        <section className="text-black py-16">
          <div className="">
            <div className="text-center mb-8">
              <div className="text-6xl font-bold leading-10 text-mediumBlue">
                ADVANCED LEGAL AI TECHNOLOGY
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-0">

              <div className="flex-1 text-darkestBlue py-36 px-12 border-r border-blue-900 text-center shadow-lg">
                <div className="mb-4">
                  <Image src="/increase.png" alt="Revenue" width={100} height={100} className="mx-auto"></Image>
                </div>
                <h3 className="text-xl font-bold mb-2">Boost your Revenue</h3>
                <p className="mb-4">Help your customers find exactly what they need with precision and efficiency.</p>

              </div>
              <div className="flex-1 text-darkestBlue py-36 px-12 border-r border-black text-center shadow-lg">
                <div className="mb-4">
                  <Image src="/ui.png" alt="Revenue" width={100} height={100} className="mx-auto"></Image>
                </div>
                <h3 className="text-xl font-bold mb-2">Modernize Your UX</h3>
                <p className="mb-4">Transform your user experience with cutting-edge AI technology.</p>

              </div>
              <div className="flex-1 text-darkestBlue py-36 px-12 text-center shadow-lg">
                <div className="mb-4">
                  <Image src="/analytics.png" alt="Revenue" width={100} height={100} className="mx-auto"></Image>
                </div>
                <h3 className="text-xl font-bold mb-2">Automated Data Analytics</h3>
                <p className="mb-4">Leverage real-time insights through an intuitive business dashboard.</p>

              </div>
            </div>
          </div>
        </section>



        <div className="flex flex-col"></div>
      </div>
      <Footer />
    </main>
  );
}
