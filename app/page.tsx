"use client";
import Image from "next/image";
import Link from "next/link";
import { Nunito_Sans } from "next/font/google";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import Footer from "../components/footer";
import NavBar from "@/components/navBar";
export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <main>
      <NavBar isScrolled={isScrolled} />
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
            <h1 className="text-5xl text-[#082462]">
              More Than Just a Chatbot
              <p className="text-6xl text-end mt-2">
                the Future of Legal Customer Service
              </p>
            </h1>

            <p className="mt-4 py-6 pl-96 font-xl text-end text-3xl leading-7 text-black">
              Your Concierge acts as your users first point of contact,
              welcoming and guiding them through your website, products,
              services, and anything else you would like your customers to know
              about your business.
            </p>

            <div className="flex flex-col items-center justify-center px-16 py-10 w-9/12 max-md:px-5 mt-10">
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
              <div className="text-6xl font-bold leading-10 text-[#2E5181]">
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
                          Help your customers find exactly what they need with
                          precision and efficiency.
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow text-base text-black max-md:mt-10 max-md:max-w-full">
                        <div className="text-4xl font-bold leading-10 text-center max-md:max-w-full">
                          Modernize Your UX
                        </div>
                        <div className="mt-6 leading-6 text-center max-md:max-w-full">
                          Transform your user experience with cutting-edge AI
                          technology.
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow text-base text-black max-md:mt-10 max-md:max-w-full">
                        <div className="text-4xl font-bold leading-10 text-center max-md:max-w-full">
                          Automated Data Analytics
                        </div>
                        <div className="mt-6 leading-6 text-center max-md:max-w-full">
                          Leverage real-time insights through an intuitive
                          business dashboard.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
