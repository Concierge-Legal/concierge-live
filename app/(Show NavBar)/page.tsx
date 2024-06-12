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
              Your AI-Powered DAO Navigator
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex overflow-hidden relative flex-col justify-center items-center p-20 w-full text-white min-h-[900px] max-md:px-5 max-md:max-w-full">
            <Image
              src="/homepage/clouds.jpg"
              alt="Background"
              layout="fill"
              objectFit="cover"
            />

            <div className="relative mt-56 text-6xl font-bold text-center leading-[67px] w-[800px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
              Experience Concierge Live
            </div>
            <div className="relative mt-6 text-lg leading-7 text-center w-[768px] max-md:max-w-full">
              Our advanced AI concierge service simplifies, streamlines, and
              enhances user experiences, ensuring that every interaction with
              your organization is seamless and productive.
            </div>
            <div className="flex relative gap-4 items-start pt-4 mt-6 mb-36 text-base leading-6 whitespace-nowrap max-md:mb-10">
              <Button className="bg-accent text-accent-foreground px-8 py-3 rounded-full hover:bg-accent-hover">
                Demo Concierge
              </Button>
            </div>
          </div>
          <div className="flex flex-col justify-center py-12 w-full bg-white max-md:max-w-full">
            <div className="w-full max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col pl-12 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow justify-center self-stretch px-8 py-20 max-md:px-5 max-md:max-w-full">
                    <div className=" text-6xl font-bold text-black leading-[67px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                      Navigate Complexity
                    </div>
                    <div className="mt-6 text-lg leading-7 text-black max-md:max-w-full">
                      DAOs are inherently complex and often inaccessible.
                      Concierge simplifies the user experience, making it easy
                      for everyone to participate.
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow self-stretch w-full max-md:max-w-full">
                    <Image
                      src="/homepage/navigate.jpg"
                      alt="Section Image"
                      width={500}
                      height={477}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex overflow-hidden relative flex-col justify-center px-16 py-20 min-h-[900px] max-md:px-5">
            <Image
              loading="lazy"
              src="/homepage/knowledge2.jpg"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0"
              alt="Background image"
            />
            <div className="relative mt-8 max-md:mr-1 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex relative flex-col grow justify-end self-stretch pt-20 text-white max-md:mt-10 max-md:max-w-full">
                    <div className="mt-96 text-5xl font-bold leading-[67px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                      with
                    </div>
                    <div className="mt-2 text-6xl font-bold leading-[67px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                      Dynamic Knowledge Extension
                    </div>
                    <div className="flex gap-4 items-start self-start pt-4 mt-4 text-base leading-6 whitespace-nowrap">
                      <div className="justify-center px-6 py-3 border border-white border-solid max-md:px-5">
                        Learn More
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="relative text-xl leading-7 text-white max-md:mt-10 max-md:max-w-full">
                    Extend your entire organizational knowledge to each user
                    dynamically, ensuring they have access to the information
                    they need, when they need it.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex overflow-hidden relative flex-col justify-center items-center p-20 w-full text-white min-h-[900px] max-md:px-5 max-md:max-w-full">
            <Image
              src="/homepage/clouds.jpg"
              alt="Background"
              layout="fill"
              objectFit="cover"
            />
            <div className="relative mt-52 text-6xl font-bold text-center leading-[67px] w-[768px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
              Seamless Integration
            </div>
            <div className="relative mt-6 text-lg leading-7 text-center w-[768px] max-md:max-w-full">
              Our AI integrates directly into your existing infrastructure,
              providing immediate and profound benefits without disruption.
            </div>
            <div className="flex relative gap-4 items-start pt-4 mt-6 mb-36 text-base leading-6 whitespace-nowrap max-md:mb-10">
              <div className="justify-center px-6 py-3 border border-white border-solid max-md:px-5">
                Learn How
              </div>
            </div>
          </div>
        </div>
		<div className="flex flex-col justify-center w-full bg-white max-md:max-w-full">
  <div className="w-full max-md:max-w-full">
    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
      <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
        <div className="flex flex-col grow justify-center self-stretch px-16 py-20 max-md:px-5 max-md:max-w-full">
          <div className="mt-52 text-6xl font-bold text-black leading-[67px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
		  Empower Your DAO Community
          </div>
          <div className="mt-6 text-lg leading-7 text-black max-md:max-w-full">
            Placeholder
          </div>
          <div className="flex gap-4 items-start self-start pt-4 mt-6 text-base leading-6 whitespace-nowrap">
           
            <div className="justify-center px-6 py-3 text-black border border-black border-solid max-md:px-5">
              Placeholder Button
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
        <div className="flex flex-col grow self-stretch w-full  max-md:max-w-full">
          <Carousel>
            <h2 className="text-4xl text-center font-bold mb-6">
              
            </h2>
            <CarouselContent>
              <CarouselItem className="flex-shrink-0 w-full md:w-1/3">
                <Card className="bg-card text-card-foreground shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                  <CardContent className="flex flex-col md:flex-row items-center justify-between">
                    <div className="w-full md:w-1/2 flex justify-center overflow-hidden mb-4 md:mb-0">
                      <Image
                        src="/homepage/organization.jpg"
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
						For Organizations
                        </h4>
                        <p className="text-md">
						Provide efficient, comprehensive access to organizational information and streamline user connections with network members.
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
                    <div className="w-full md:w-1/2 flex justify-center overflow-hidden mb-4 md:mb-0">
                      <Image
                        src="/homepage/network.jpg"
                        alt="Money Picture"
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
						For Network Members
                        </h4>
                        <p className="text-md">
						Increase visibility and exposure, helping members to connect with and convert end-users effectively.
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
                    <div className="w-full md:w-1/2 flex justify-center overflow-hidden mb-4 md:mb-0">
                      <Image
                        src="/homepage/users.jpg"
                        alt="Money Picture"
                        width={300}
                        height={300}
                        layout="intrinsic"
                        objectFit="cover"
                        className="rounded-lg"
                      />
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col justify-around">
                      <div className="bg-card p-4 rounded-lg shadow flex-1 mx-2">
                        <h4 className="text-2xl font-bold mb-2">
						For Users
                        </h4>
                        <p className="text-md">
						Guide, assist, and educate users to enhance their engagement and participation
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
    </div>
  </div>
</div>

        {/* <div className="flex flex-col py-20 px-8 bg-white max-md:px-5">
          <div className="flex flex-row w-full max-md:flex-col">
            <div className="flex flex-col w-2/4 max-md:w-full">
              <div className="self-stretch mt-20 pl-6 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-1/2 max-md:w-full">
                    <div className="flex flex-col grow justify-center self-stretch w-full text-base text-black bg-white drop-shadow-xl rounded-md max-md:mt-8">
                      <div className="flex flex-col p-6 max-md:px-5">
                        <div className="mt-4 text-2xl font-bold leading-8">
                          Concierge AI: Your Legal Assistant
                        </div>
                        <div className="mt-2 leading-6">
                          Effortlessly connect with the right legal resources
                          and receive personalized guidance through our advanced
                          AI-powered legal assistant.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-1/2 max-md:w-full">
                    <div className="flex flex-col grow justify-center self-stretch w-full text-base text-black bg-white drop-shadow-xl rounded-md max-md:mt-8">
                      <div className="flex flex-col p-6 max-md:px-5">
                        <div className="mt-4 text-2xl font-bold leading-8">
                          Compliance & Security
                        </div>
                        <div className="mt-2 leading-6">
                          Our solutions ensure compliance with legal standards
                          and provide robust security measures to protect your
                          organization&apos;s data.
                        </div>
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
                Our platform is tailored to meet the needs of legal service
                providers, offering comprehensive tools to manage and optimize
                your organization&apos;s operations and user interactions.
              </div>
            </div>
          </div>
        </div> */}
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
