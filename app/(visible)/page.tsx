import Image from "next/image";
import Link from "next/link";  // Assuming you use Link for routing

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen bg-white p-10">
      {/* Logo Section */}
      <div className="w-full flex justify-center py-10">
        <div className="text-4xl font-bold text-purple-700">Concierge</div>
      </div>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center w-full mb-20">
        <h1 className="text-5xl text-purple-800 font-bold mb-4">Your Web3 Legal Guide</h1>
        <p className="text-xl text-purple-600 mb-8">
          Explore legal information and connect with professionals easily.
        </p>
        <Link href="/chat" className="mt-4 px-8 py-4 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition-colors">
            Start Chatting
        </Link>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full">
        <div className="flex flex-col items-center p-6 shadow-md rounded-lg">
          <Image src="/assets/legal-info.svg" alt="Legal Information" width={100} height={100} />
          <h2 className="text-lg text-purple-800 font-semibold mt-2">Instant Legal Info</h2>
          <p className="text-sm text-purple-600 mt-1">
            Get quick answers to your Web3 legal questions.
          </p>
        </div>
        <div className="flex flex-col items-center p-6 shadow-md rounded-lg">
          <Image src="/assets/network.svg" alt="Professional Network" width={100} height={100} />
          <h2 className="text-lg text-purple-800 font-semibold mt-2">Professional Network</h2>
          <p className="text-sm text-purple-600 mt-1">
            Access a network of qualified legal professionals.
          </p>
        </div>
        <div className="flex flex-col items-center p-6 shadow-md rounded-lg">
          <Image src="/assets/ai-chat.svg" alt="AI Chat" width={100} height={100} />
          <h2 className="text-lg text-purple-800 font-semibold mt-2">AI-Powered Assistance</h2>
          <p className="text-sm text-purple-600 mt-1">
            Our AI helps guide you to the right information.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full text-center p-4 mt-20 border-t border-purple-300">
        <p className="text-purple-600">© 2024 Concierge. All rights reserved.</p>
      </footer>
    </main>
  );
}
