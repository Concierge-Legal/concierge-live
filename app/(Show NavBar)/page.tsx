import Image from "next/image";
import React from "react";
import Footer from "../../components/footer";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col">
        <div className="flex overflow-hidden relative flex-col items-center justify-center px-16 py-20 w-full text-white min-h-[900px] max-md:px-5 max-md:max-w-full">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            src="/homepage/landing.mp4"
          >
            Your browser does not support the video tag.
          </video>
          <div className="relative z-10 flex flex-col items-center justify-center text-center">
            <div className="text-2xl sm:text-5xl md:text-7xl lg:text-9xl font-bold leading-[67px] max-md:text-4xl max-md:leading-[54px]">
              CONCIERGE
            </div>
            <div className="mt-6 text-lg leading-7 max-md:max-w-full">
              The Future of Legal Customer Service
            </div>
          </div>
        </div>
		<div className="flex flex-col items-center px-12 py-2 bg-white max-md:px-5">
            <div className="self-stretch mt-16 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow w-full text-base leading-6 text-black bg-white drop-shadow-xl rounded-lg max-md:mt-8 max-md:max-w-full">
                    <div className="flex flex-col justify-center p-12 max-md:px-5 max-md:max-w-full">
                      <div className="mt-4 text-5xl font-bold text-center text-black leading-[57.6px] max-md:max-w-full max-md:text-4xl">
					  Experience Concierge Live
                      </div>
                      <div className="mt-6 text-lg leading-7 text-center text-black max-md:max-w-full">
                      Click the button below to start a live demo and see Concierge in action.
                      </div>
                    </div>
                    <div className="flex justify-center pb-12 ">
					<Button className="bg-accent text-accent-foreground px-8 py-3 rounded-full hover:bg-accent-hover">
            Demo Concierge
          </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        <section className="bg-background text-foreground p-10 text-center">
          <h2 className="text-4xl font-bold mb-3">Experience Concierge Live</h2>
          <p className="mb-6">
            Click the button below to start a live demo and see Concierge in action.
          </p>
          <Button className="bg-accent text-accent-foreground px-8 py-3 rounded-full hover:bg-accent-hover">
            Demo Concierge
          </Button>
        </section>

        <h2 className="text-4xl font-bold text-center mb-10 text-black">
          Increase Revenue
        </h2>

        <section className="py-10 bg-background">
          <div className="container mx-auto px-8">
            <div className="max-w-7xl mx-auto p-8">
              <Carousel>
                <CarouselContent>
                  {/* Carousel Items */}
                  {[...Array(2)].map((_, index) => (
                    <CarouselItem key={index} className="flex-shrink-0 w-full md:w-1/3">
                      <Card className="bg-card text-card-foreground shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                        <CardHeader>
                          <CardTitle className="text-3xl font-bold text-center">
                            {index === 0 ? "Boost Revenue" : "Optimize Conversion Rates"}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col md:flex-row items-center justify-between">
                          {/* Image on the left */}
                          <div className="w-full md:w-1/2 flex justify-center overflow-hidden mb-4 md:mb-0">
                            <Image
                              src="/homepage/stonks.jpg"
                              alt="Stonks Picture"
                              width={500}
                              height={300}
                              layout="intrinsic"
                              objectFit="cover"
                              className="rounded-lg"
                            />
                          </div>
                          {/* Feature boxes on the right */}
                          <div className="w-full md:w-1/2 flex flex-col justify-around">
                            {["Faster Conversions", "Enhanced Customer Satisfaction", "Reducing Drop-offs"].map(
                              (feature, idx) => (
                                <div key={idx} className="bg-card p-4 rounded-lg shadow flex-1 mx-2 mb-4">
                                  <h4 className="text-lg font-bold mb-2">{feature}</h4>
                                  <p className="text-sm">
                                    {`Description for ${feature.toLowerCase()}.`}
                                  </p>
                                </div>
                              )
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </section>

        <section className="bg-background text-foreground py-20">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">Modernize Your User Experience</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {["User-Centric Design", "Accessibility Features"].map((title, index) => (
                <Card key={index} className="bg-card text-card-foreground shadow-lg rounded-lg p-6">
                  <CardHeader>{title}</CardHeader>
                  <CardContent>
                    Description for {title.toLowerCase()}.
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-background text-black py-20">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">Designed for Legal Service Providers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {["Ask Abe: Legal AI Assistant", "Compliance and Security"].map((title, index) => (
                <Card key={index} className="bg-card text-card-foreground shadow-lg rounded-lg p-6">
                  <CardHeader>{title}</CardHeader>
                  <CardContent>
                    Description for {title.toLowerCase()}.
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-background text-foreground py-20">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">Advanced AI-Driven Data Tracking and Analytics</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {["Real-Time Analytics", "User Behavior Insights", "Performance Metrics"].map((title, index) => (
                <Card key={index} className="bg-card text-card-foreground shadow-lg rounded-lg p-6">
                  <CardHeader>{title}</CardHeader>
                  <CardContent>
                    Description for {title.toLowerCase()}.
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <div className="flex flex-col justify-center px-16 py-20 w-full bg-background max-md:px-5 max-md:max-w-full">
          <div className="mt-8 mb-2.5 max-md:mr-1 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col self-stretch my-auto text-black max-md:mt-10 max-md:max-w-full">
                  <div id="privacy" className="text-4xl font-bold leading-10 max-md:max-w-full">
                    Protecting Your Privacy: Ensuring the Security of Your Personal Data
                  </div>
                  <div className="mt-6 text-lg leading-7 max-md:max-w-full">
                    At Concierge, we understand the importance of user data privacy. Our chatbot utilizes advanced encryption and data protection measures to safeguard your personal information. Rest assured that your data is secure with us.
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <Image
                  loading="lazy"
                  src="/features/datasecurity.jpg"
                  alt="Data Security"
                  width={1000}
                  height={960}
                  className="grow w-full aspect-[0.96] max-md:mt-10 max-md:max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
