import { useState } from 'react';
import ChatWindow from './chatWindow'; // Make sure to update the path

import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/20/solid';
import StaticNetworks from './staticNetwork'; // Make sure to update the path

const EmbeddedWebsite: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isChatOpen, setIsChatOpen] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'products':
        return <ProductsPage />;
      case 'info':
        return <InfoPage />;
      default:
        return <HomePage />;
    }
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="relative z-0 flex h-full w-full overflow-hidden">
      <div className={`flex min-h-screen bg-gray-900 transition-all duration-300 ${isChatOpen ? 'w-3/4' : 'w-full'}`}>
        <div className="flex flex-col w-full">
          <header className="text-white p-4 text-center">
            <h1 className="text-3xl font-bold">Demo DAO</h1>
          </header>
          <nav className="text-white p-2 flex justify-center space-x-4">
            <button onClick={() => setCurrentPage('home')} className="hover:underline">Home</button>
            <button onClick={() => setCurrentPage('products')} className="hover:underline">Products & Services</button>
            <button onClick={() => setCurrentPage('info')} className="hover:underline">General Information</button>
          </nav>
          <main className="p-4 flex-grow bg-gray-900 text-gray-200">
            {renderPage()}
          </main>
        </div>
      </div>
      <div className={`fixed top-0 right-0 h-screen shadow-lg transition-transform duration-300 ${isChatOpen ? 'transform translate-x-0 w-1/4' : 'transform translate-x-full w-0'}`}>
        {isChatOpen && <ChatWindow />}
      </div>
      <div className={`fixed top-1/2 right-0 transform -translate-y-1/2 transition-all duration-300 ${isChatOpen ? 'w-10 h-10' : 'w-10 h-10'}`}>
        <button onClick={toggleChat} className="bg-blue-600 text-white p-2 rounded-full shadow-lg flex items-center justify-center">
          {isChatOpen ? <ChevronRightIcon className="h-6 w-6" /> : <ChevronLeftIcon className="h-6 w-6" />}
        </button>
      </div>
    </div>
  );
};

const HomePage: React.FC = () => (
  <div className="max-w-4xl mx-auto p-6 text-gray-200 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold mb-4">Welcome to Demo DAO</h2>
    <p className="mb-4">Demo DAO is a pioneering organization committed to leveraging blockchain technology and smart contracts to create a decentralized, autonomous future. Our mission is to provide cutting-edge solutions that enhance transparency, security, and efficiency in various industries.</p>
    <p className="mb-4">Our team of experts is dedicated to driving innovation and offering unparalleled services in the realm of cryptolaw and legal engineering. Explore our services and discover how we can assist you in navigating the complexities of the digital world.</p>
    <img src="https://via.placeholder.com/800x400" alt="Demo DAO" className="w-full h-auto mt-4 rounded-lg shadow-sm" />
  </div>
);

const ProductsPage: React.FC = () => (
  <div className="min-h-screen bg-gray-900 text-white ">
    <div className="max-w-4xl mx-auto">
  
      <StaticNetworks />
    </div>
  </div>
);

const InfoPage: React.FC = () => (
  <div className="max-w-4xl mx-auto p-6 text-gray-200 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold mb-4">General Information</h2>
    <p className="mb-4">Demo DAO is an innovative leader in the field of decentralized autonomous organizations. We strive to empower businesses and individuals by providing robust legal frameworks and advanced technological solutions.</p>
    <p className="mb-4">Our services include:</p>
    <ul className="list-disc pl-5 mb-4">
      <li>Blockchain Legal Consulting</li>
      <li>Smart Contract Development and Analysis</li>
      <li>AI-Powered Mediation Services</li>
      <li>Regulatory Compliance and Strategy Development</li>
    </ul>
    <p className="mb-4">Our goal is to make blockchain technology accessible and beneficial for everyone. We are committed to maintaining the highest standards of integrity, transparency, and excellence in all our endeavors.</p>
    <img src="https://via.placeholder.com/800x400" alt="General Information" className="w-full h-auto mt-4 rounded-lg shadow-sm" />
  </div>
);

export default EmbeddedWebsite;
