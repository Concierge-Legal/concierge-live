import Image from "next/image";
import Link from "next/link";

export default function Home() {
  
  return (
    <main className="flex flex-col justify-between min-h-screen bg-gray-100 p-10">
      {/* Logo Section */}
      <div className="w-full flex justify-center py-10">
        <div className="text-4xl font-bold text-blue-900">
          Concierge
        </div>
      </div>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center w-full mb-20">
        <h1 className="text-5xl font-bold text-blue-800">
          Your Web3 Legal Guide
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          Explore legal information and connect with professionals easily.
        </p>
        <Link href="/chat" className="mt-4 px-8 py-4 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition-colors">
            Start Chatting
        </Link>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full text-center">
        <div className="flex flex-col items-center p-6 shadow-lg rounded-lg bg-white">
          <Image src="/assets/legal-info.svg" alt="Legal Information" width={100} height={100} />
          <h2 className="text-lg font-semibold mt-2 text-gray-800">
            Instant Legal Info
          </h2>
          <p className="text-sm mt-1 text-gray-600">
            Get quick answers to your Web3 legal questions.
          </p>
        </div>
        <div className="flex flex-col items-center p-6 shadow-lg rounded-lg bg-white">
          <Image src="/network.jpg" alt="Professional Network" width={300} height={100} className="rounded-lg"/>
          <h2 className="text-lg font-semibold mt-2 text-gray-800">
            Professional Network
          </h2>
          <p className="text-sm mt-1 text-gray-600">
            Access a network of qualified legal professionals.
          </p>
        </div>
        <div className="flex flex-col items-center p-6 shadow-lg rounded-lg bg-white">
          <Image src="/assets/ai-chat.svg" alt="AI Chat" width={100} height={100} />
          <h2 className="text-lg font-semibold mt-2 text-gray-800">
            AI-Powered Assistance
          </h2>
          <p className="text-sm mt-1 text-gray-600">
            Our AI helps guide you to the right information.
          </p>
        </div>
      </section>
    </main>
  );
}
