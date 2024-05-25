import Image from "next/image";
import NavBar from "@/components/navBar";


export default function DashboardFeatures() {
 
  

  return (
    <main>
        <NavBar />
    
    <div className="flex flex-col">
      <div className="flex flex-col items-center px-16 py-20 w-full text-center text-black bg-white max-md:px-5 max-md:max-w-full">
        <div className="mt-8 text-6xl font-bold leading-[67.2px] max-md:max-w-full max-md:text-4xl">
          Enhanced Dashboard Features
        </div>
        <div className="mt-6 mb-2.5 text-lg leading-7 max-md:max-w-full">
          Discover new tools and insights to optimize your workflow on the dashboard.
        </div>
      </div>
      <div className="flex flex-col px-16 py-20 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="mt-8 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="self-stretch text-4xl font-bold leading-10 text-black max-md:mt-10 max-md:max-w-full">
                Experience an Intuitive User Interface on the Dashboard
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="self-stretch text-lg leading-7 text-black max-md:mt-10 max-md:max-w-full">
                Concierge&apos;s dashboard features an intuitive user interface that makes it easy for users to navigate and access the information they need. With a clean and organized layout, users can quickly find the tools and resources they require to manage their legal information. The dashboard is designed to be user-friendly, with clear labels and intuitive icons that guide users through the various features and functionalities. Whether it&apos;s searching for legal documents, connecting with lawyers, or accessing customer support, the dashboard provides a seamless and efficient experience for users.
              </div>
            </div>
          </div>
        </div>
        <Image src="/features/dashboard_features.jpg" alt="Dashboard Interface" layout="responsive" width={1920} height={1080} className="mt-20 mb-2.5 w-full aspect-[1.79] max-md:mt-10 max-md:max-w-full" />
      </div>
      <div className="flex flex-col px-16 py-20 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="self-center mt-8 text-base font-semibold leading-6 text-center text-black">
          Insights
        </div>
        <div className="self-center mt-4 text-5xl font-bold text-center text-black leading-[57.6px] max-md:max-w-full max-md:text-4xl">
          Unlock Powerful Analytics
        </div>
        <div className="self-center mt-6 text-lg leading-7 text-center text-black max-md:max-w-full">
          Track Key Metrics
        </div>
        <div className="mt-20 bg-white border border-black border-solid max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center self-stretch p-12 text-base leading-6 text-black max-md:px-5 max-md:max-w-full">
                <div className="mt-16 font-semibold max-md:mt-10 max-md:max-w-full">
                  Insights
                </div>
                <div className="mt-2 text-4xl font-bold leading-10 max-md:max-w-full">
                  Real-Time Analytics and Reporting for Better Decision Making
                </div>
                <div className="mt-6 leading-6 max-md:max-w-full">
                  Get valuable insights into your Web3 Legal information with Concierge&apos;s real-time analytics and reporting capabilities. Monitor key metrics, track user behavior, and make data-driven decisions to optimize your legal services.
                </div>
                <div className="flex gap-5 pr-20 mt-8 max-md:flex-wrap max-md:pr-5">
                  <div className="justify-center px-6 py-3 border border-black border-solid max-md:px-5">
                    Learn More
                  </div>
                  <div className="flex gap-2 justify-center my-auto">
                    <div>Sign Up</div>
                    <Image loading="lazy" src="/ext_1-" alt="Icon 1" width={24} height={24} className="shrink-0 w-6 aspect-square" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <Image loading="lazy" src="/ext_2-" alt="Image 1" width={500} height={500} className="grow self-stretch w-full aspect-[1.02] max-md:max-w-full" />
            </div>
          </div>
        </div>
        <div className="mt-16 bg-white border border-black border-solid max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <Image loading="lazy" src="/ext_3-" alt="Image 2" width={500} height={500} className="grow self-stretch w-full aspect-[1.02] max-md:max-w-full" />
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center self-stretch p-12 text-base leading-6 text-black max-md:px-5 max-md:max-w-full">
                <div className="mt-16 font-semibold max-md:mt-10 max-md:max-w-full">
                  Insights
                </div>
                <div className="mt-2 text-4xl font-bold leading-10 max-md:max-w-full">
                  Real-Time Analytics and Reporting for Better Decision Making
                </div>
                <div className="mt-6 leading-6 max-md:max-w-full">
                  Gain valuable insights into your Web3 Legal information with Concierge&apos;s real-time analytics and reporting capabilities. Make data-driven decisions to optimize your legal services and improve customer satisfaction.
                </div>
                <div className="flex gap-5 pr-20 mt-8 max-md:flex-wrap max-md:pr-5">
                  <div className="justify-center px-6 py-3 border border-black border-solid max-md:px-5">
                    Learn More
                  </div>
                  <div className="flex gap-2 justify-center my-auto">
                    <div>Sign Up</div>
                    <Image loading="lazy" src="/ext_4-" alt="Icon 2" width={24} height={24} className="shrink-0 w-6 aspect-square" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 mb-2.5 bg-white border border-black border-solid max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center self-stretch p-12 text-base leading-6 text-black max-md:px-5 max-md:max-w-full">
                <div className="mt-16 font-semibold max-md:mt-10 max-md:max-w-full">
                  Insights
                </div>
                <div className="mt-2 text-4xl font-bold leading-10 max-md:max-w-full">
                  Real-Time Analytics and Reporting for Better Decision Making
                </div>
                <div className="mt-6 leading-6 max-md:max-w-full">
                  Access real-time analytics and reporting features to gain valuable insights into your Web3 Legal information. Use data-driven insights to improve your legal services and enhance customer satisfaction.
                </div>
                <div className="flex gap-5 pr-20 mt-8 max-md:flex-wrap max-md:pr-5">
                  <div className="justify-center px-6 py-3 border border-black border-solid max-md:px-5">
                    Learn More
                  </div>
                  <div className="flex gap-2 justify-center my-auto">
                    <div>Sign Up</div>
                    <Image loading="lazy" src="/ext_5-" alt="Icon 3" width={24} height={24} className="shrink-0 w-6 aspect-square" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <Image loading="lazy" src="/ext_6-" alt="Image 3" width={500} height={500} className="grow self-stretch w-full aspect-[1.02] max-md:max-w-full" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center px-16 py-20 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="mt-8 mb-2.5 max-md:mr-1 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-black max-md:mt-10 max-md:max-w-full">
                <div className="text-base font-semibold leading-6 max-md:max-w-full">
                  Tagline
                </div>
                <div className="mt-4 text-5xl font-bold leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                  Medium length section heading goes here
                </div>
                <Image loading="lazy" src="/ext_7-" alt="Image 4" width={500} height={500} className="mt-20 w-full aspect-square max-md:mt-10 max-md:max-w-full" />
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col max-md:mt-10 max-md:max-w-full">
                <div className="justify-end pt-20 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                      <Image loading="lazy" src="/ext_8-" alt="Image 5" width={500} height={500} className="mt-20 w-full aspect-square max-md:mt-10" />
                    </div>
                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                      <Image loading="lazy" src="/ext_9-" alt="Image 6" width={500} height={500} className="w-full aspect-square max-md:mt-10" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col px-8 mt-20 text-black max-md:px-5 max-md:mt-10 max-md:max-w-full">
                  <div className="text-lg leading-7 max-md:max-w-full">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                  </div>
                  <div className="flex gap-5 justify-between items-start self-start pt-4 mt-4 text-base leading-6 whitespace-nowrap">
                    <div className="justify-center px-6 py-3 border border-black border-solid max-md:px-5">
                      Button
                    </div>
                    <div className="flex gap-2 justify-center mt-3">
                      <div>Button</div>
                      <Image loading="lazy" src="/ext_10-" alt="Icon 4" width={24} height={24} className="shrink-0 w-6 aspect-square" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center p-20 w-full text-6xl font-bold bg-white leading-[67.2px] max-md:px-5 max-md:max-w-full max-md:text-4xl">
          <div className="mt-8 text-center text-black max-md:max-w-full max-md:text-4xl">
            Discover the Dashboard
          </div>
          <div className="text-center text-black max-md:max-w-full max-md:text-4xl">
            Unlock Your Potential
          </div>
          <div className="mt-6 text-lg leading-7 text-center text-black max-md:max-w-full">
            Explore the power of our dashboard and gain valuable insights for your business.
          </div>
          <div className="flex gap-4 items-start pt-4 mt-6 mb-2.5 text-base leading-6">
            <div className="justify-center px-6 py-3 text-white whitespace-nowrap bg-black border border-black border-solid max-md:px-5">
              Demo
            </div>
            <div className="justify-center px-6 py-3 text-black border border-black border-solid max-md:px-5">
              Sign Up
            </div>
          </div>
        </div>
      </div>




    </div>
</main>
  );

};