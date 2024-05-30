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
        <div className="flex flex-col items-center px-36 py-10 bg-white max-md:px-5">
          <div className="self-stretch mt-16 max-md:mt-10 max-md:max-w-full">
            <div className="flex justify-center max-md:flex-col max-md:gap-0">
              <div className="flex flex-col max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow w-full text-base leading-6 text-black bg-white drop-shadow-xl rounded-lg max-md:mt-8 max-md:max-w-full">
                  <div className="flex flex-col justify-center p-12 max-md:px-5 max-md:max-w-full">
                    <div className="mt-4 text-5xl font-bold text-center text-black leading-[57.6px] max-md:max-w-full max-md:text-4xl">
                      Experience Concierge Live
                    </div>
                    <div className="mt-6 text-lg leading-7 text-center text-black max-md:max-w-full">
                      Click the button below to start a live demo and see
                      Concierge in action.
                    </div>
                  </div>
                  <div className="flex justify-center pb-12">
                    <Button className="bg-accent text-accent-foreground px-8 py-3 rounded-full hover:bg-accent-hover">
                      Demo Concierge
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="py-10 bg-background">
          <div className="container mx-auto px-8">
            <div className="max-w-7xl mx-auto p-8">
              <Carousel>
                <h2 className="text-4xl text-center font-bold mb-6">
                  Boost Revenue
                </h2>
                <CarouselContent>
                  <CarouselItem className="flex-shrink-0 w-full md:w-1/3">
                    <Card className="bg-card text-card-foreground shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                      <CardContent className="flex flex-col md:flex-row items-center justify-between">
                        <div className="w-full md:w-1/2 flex justify-center overflow-hidden mb-4 md:mb-0">
                          <Image
                            src="/icons/optimization.png"
                            alt="Optimization Picture"
                            width={300}
                            height={300}
                            layout="intrinsic"
                            objectFit="cover"
                            className="rounded-lg"
                          />
                        </div>

                        <div className="w-full md:w-1/2 flex flex-col justify-around">
                          <div className="bg-card p-4 rounded-lg shadow flex-1 mx-2 mb-4">
                            <h4 className="text-2xl font-bold mb-2">
                              Faster Conversions
                            </h4>
                            <p className="text-md">
                              By providing highly personalized recommendations
                              based on customer behavior and preferences, our
                              system ensures that customers are presented with
                              products or services they are more likely to
                              purchase.
                            </p>
                          </div>

                          <div className="w-full flex justify-center mt-4"></div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                  <CarouselItem className="flex-shrink-0 w-full md:w-1/3">
                    <Card className="bg-card text-card-foreground shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                      <CardContent className="flex flex-col md:flex-row items-center justify-between">
                        {/* Image on the left */}
                        <div className="w-full md:w-1/2 flex justify-center overflow-hidden mb-4 md:mb-0">
                          <Image
                            src="/icons/money.png"
                            alt="Money Picture"
                            width={300}
                            height={300}
                            layout="intrinsic"
                            objectFit="cover"
                            className="rounded-lg"
                          />
                        </div>
                        {/* Feature boxes on the right */}
                        <div className="w-full md:w-1/2 flex flex-col justify-around">
                          <div className="bg-card p-4 rounded-lg shadow flex-1 mx-2 mb-4">
                            <h4 className="text-2xl  font-bold mb-2">
                              Enhanced Customer Satisfaction
                            </h4>
                            <p className="text-md">
                              Concierge ensures smooth and efficient
                              communication with your customers. By providing a
                              seamless experience, customers are likely to
                              return and repeat purchases, increasing customer
                              lifetime value.
                            </p>
                          </div>

                          <div className="w-full flex justify-center mt-4"></div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                  <CarouselItem className="flex-shrink-0 w-full md:w-1/3">
                    <Card className="bg-card text-card-foreground shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                      <CardContent className="flex flex-col md:flex-row items-center justify-between">
                        {/* Image on the left */}
                        <div className="w-full md:w-1/2 flex justify-center overflow-hidden mb-4 md:mb-0">
                          <Image
                            src="/icons/money.png"
                            alt="Money Picture"
                            width={300}
                            height={300}
                            layout="intrinsic"
                            objectFit="cover"
                            className="rounded-lg"
                          />
                        </div>
                        {/* Feature boxes on the right */}
                        <div className="w-full md:w-1/2 flex flex-col justify-around">
                          <div className="bg-card p-4 rounded-lg shadow flex-1 mx-2">
                            <h4 className="text-2xl font-bold mb-2">
                              Reduced Drop-off Rates
                            </h4>
                            <p className="text-md">
                              By guiding customers through their journey with
                              precision and efficiency, our solution minimizes
                              potential drop-off points and ensures that more
                              visitors complete their transactions.
                            </p>
                          </div>
                          <div className="w-full flex justify-center mt-4"></div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious></CarouselPrevious>
                <CarouselNext></CarouselNext>
              </Carousel>
            </div>
          </div>
        </section>

        <div className="flex flex-col py-20 px-12 bg-white max-md:px-5">
          <div className="mt-4 text-4xl font-bold text-center text-black leading-[57.6px] max-md:max-w-full max-md:text-4xl">
            Modernize Your User Experience
          </div>

          <div className="self-stretch mt-20 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col ml-5 w-[50%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col justify-center w-full text-base leading-6 text-black bg-white drop-shadow-xl rounded-md max-md:mt-8">
                  <div className="flex flex-col justify-center items-center p-8 max-md:px-5">
                    <Image
                      loading="lazy"
                      src="/icons/solution.png"
                      alt="Expert Guidance"
                      width={200}
                      height={100}
                      className=""
                    />
                    <div className="mt-6 text-2xl font-bold leading-10">
                      User-Centric Design
                    </div>
                    <div className="mt-4 text-center leading-6">
                      An intuitive interface tailored to your users' needs. Our
                      user-centric design approach ensures that every
                      interaction is meaningful and enhances user satisfaction.
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[50%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col justify-center w-full text-base leading-6 text-black bg-white drop-shadow-xl rounded-md max-md:mt-8">
                  <div className="flex flex-col justify-center items-center p-8 max-md:px-5">
                    <Image
                      loading="lazy"
                      src="/icons/library.png"
                      alt="Expert Guidance"
                      width={200}
                      height={100}
                      className=""
                    />
                    <div className="mt-6 text-2xl font-bold leading-10">
                      Accesibility Features
                    </div>
                    <div className="mt-4 text-center leading-6">
                      Empower all users with inclusive and accessible features.
                      Our solutions prioritize accessibility, making your
                      platform usable for everyone, regardless of their
                      abilities or disabilities.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="py-10 bg-background">
          <div className="container mx-auto">
            <div className=" mx-auto">
              <div className="flex flex-col justify-center bg-white max-md:px-5">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col justify-center items-center mt-4 p-8 h-full w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col text-base text-center leading-6 text-black max-md:mt-10 max-md:max-w-full">
                      <div className="mt-4 text-4xl font-bold leading-8 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                        Advanced AI-Driven Data Tracking and Analytics
                      </div>
                      <div className="mt-6 text-lg leading-7 max-md:max-w-full">
                        The dashboard provides a comprehensive set of features
                        and tools to streamline your legal information
                        management. From AI-powered chatbot assistance to
                        seamless lawyer connections, it&apos;s all here.
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center mt-4 p-8 h-full w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col p-8 border border-solid rounded-md drop-shadow-xl bg-lightBlue shadow-sm max-md:px-5 max-md:max-w-full">
                      {/* <Image
                        loading="lazy"
                        src="/icons/growth.png"
                        alt="Efficient Workflow"
                        width={48}
                        height={48}
                        className=""
                      /> */}
                      <div className="mt-4 text-2xl font-bold leading-8 max-md:max-w-full">
                        Real-Time Analytics
                      </div>
                      <div className="mt-4 text-base leading-6 max-md:max-w-full">
                        descript
                      </div>
                    </div>
                    <div className="flex flex-col p-8 border border-solid rounded-md drop-shadow-xl bg-lightBlue shadow-sm max-md:px-5 max-md:max-w-full">
                      {/* <Image
                        loading="lazy"
                        src="/icons/growth.png"
                        alt="Efficient Workflow"
                        width={48}
                        height={48}
                        className=""
                      /> */}
                      <div className="mt-4 text-2xl font-bold leading-8 max-md:max-w-full">
                        User Behavior Insights
                      </div>
                      <div className="mt-4 text-base leading-6 max-md:max-w-full">
                        descript
                      </div>
                    </div>
                    <div className="flex flex-col p-8 border border-solid rounded-md drop-shadow-xl bg-lightBlue shadow-sm max-md:px-5 max-md:max-w-full">
                      {/* <Image
                        loading="lazy"
                        src="/icons/growth.png"
                        alt="Efficient Workflow"
                        width={48}
                        height={48}
                        className=""
                      /> */}
                      <div className="mt-4 text-2xl font-bold leading-8 max-md:max-w-full">
                        Performance Metrics
                      </div>
                      <div className="mt-4 text-base leading-6 max-md:max-w-full">
                        descript
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="flex flex-col py-20 px-8 bg-white max-md:px-5">
          <div className="flex flex-row  w-full max-md:flex-col">
            <div className="flex flex-col w-2/4 max-md:w-full">
              <div className="self-stretch mt-20 pl-6 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-1/2 max-md:w-full">
                    <div className="flex flex-col grow justify-center self-stretch w-full text-base text-black bg-white drop-shadow-xl rounded-md max-md:mt-8">
                      <div className="flex flex-col p-6 max-md:px-5">
                        <div className="mt-4 text-2xl font-bold leading-8">
                          Ask Abe: Legal AI Assitant
                        </div>
                        <div className="mt-2 leading-6">Descreipty</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-1/2 max-md:w-full">
                    <div className="flex flex-col grow justify-center self-stretch w-full text-base text-black bg-white drop-shadow-xl rounded-md max-md:mt-8">
                      <div className="flex flex-col p-6 max-md:px-5">
                        <div className="mt-4 text-2xl font-bold leading-8">
                          Compliance & Security
                        </div>
                        <div className="mt-2 leading-6">Descript</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-1/2 pr-6 self-center max-md:w-full max-md:mt-10">
              <div className="mt-4 text-4xl font-bold text-end text-black leading-[57.6px] max-md:max-w-full max-md:text-4xl">
                Designed for Legal Service Providers
              </div>
              <div className="mt-6 text-lg w-3/4 ml-auto leading-7 text-end text-black max-md:max-w-full">
                Descript
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center px-16 py-20 w-full bg-background max-md:px-5 max-md:max-w-full">
          <div className="mt-8 mb-2.5 max-md:mr-1 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-2/3 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col self-stretch my-auto text-black max-md:mt-10 max-md:max-w-full">
                  <div
                    id="privacy"
                    className="text-4xl font-bold leading-10 max-md:max-w-full"
                  >
                    Protecting Your Privacy: Ensuring the Security of Your
                    Personal Data
                  </div>
                  <div className="mt-6 text-lg leading-7 max-md:max-w-full">
                    At Concierge, we understand the importance of user data
                    privacy. Our chatbot utilizes advanced encryption and data
                    protection measures to safeguard your personal information.
                    Rest assured that your data is secure with us.
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-1/3 max-md:ml-0 max-md:w-full">
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
