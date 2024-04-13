import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-right justify-between min-h-screen bg-gradient-to-b from-white to-blue-100 p-10">
      {/* Logo Section */}
      <div className="w-full flex justify-center py-10">
        <div className="text-4xl font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-[#1C036B] via-[#2B38BA] to-[#1E76C8]">
          Concierge
        </div>
      </div>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center w-full mb-20">
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1E76C8] via-[#34BCE4] to-[#E4FEF4]">
          Your Web3 Legal Guide
        </h1>
        <p className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-blue-400 mb-8">
          Explore legal information and connect with professionals easily.
        </p>
        <Link href="/chat" className="mt-4 px-8 py-4 bg-gradient-to-r from-purple-600 to-[#1E76C8] text-white rounded-lg shadow-lg hover:bg-gradient-to-r from-purple-700 to-blue-600 transition-colors">
            Start Chatting
        
        </Link>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full text-center">
        <div className="flex flex-col items-center p-6 shadow-lg rounded-lg bg-gradient-to-b from-purple-300 to-blue-200">
          <Image src="/assets/legal-info.svg" alt="Legal Information" width={100} height={100} />
          <h2 className="text-lg font-semibold mt-2 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-pink-600">
            Instant Legal Info
          </h2>
          <p className="text-sm mt-1">
            Get quick answers to your Web3 legal questions.
          </p>
        </div>
        <div className="flex flex-col items-center p-6 shadow-lg rounded-lg bg-gradient-to-b from-purple-300 to-blue-200">
          <Image src="/network.jpg" alt="Professional Network" width={300} height={100} className="rounded-lg"/>
          <h2 className="text-lg font-semibold mt-2 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-pink-600">
            Professional Network
          </h2>
          <p className="text-sm mt-1">
            Access a network of qualified legal professionals.
          </p>
        </div>
        <div className="flex flex-col items-center p-6 shadow-lg rounded-lg bg-gradient-to-b from-purple-300 to-blue-200">
          <Image src="/assets/ai-chat.svg" alt="AI Chat" width={100} height={100} />
          <h2 className="text-lg font-semibold mt-2 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-pink-600">
            AI-Powered Assistance
          </h2>
          <p className="text-sm mt-1">
            Our AI helps guide you to the right information.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full text-center p-4 mt-20 border-t border-blue-300">
        <p className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-400">
          © 2024 Concierge. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
