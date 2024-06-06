import { useState } from 'react';
import ChatWindow from './chatWindow'; // Make sure to update the path
import { ProductFile } from '@/lib/types';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/20/solid'

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
          <nav className=" text-white p-2 flex justify-center space-x-4">
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
  <div className="max-w-4xl mx-auto p-6 text-gray-200 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold mb-4">Our Products & Services</h2>
    <p className="mb-4">At Demo DAO, we offer a comprehensive range of products and services designed to meet the needs of our diverse clientele. From blockchain legal dynamics to AI-driven contract systems, our solutions are tailored to provide exceptional value and support.</p>
    <ul className="space-y-4">
      {productFiles.map(product => (
        <li key={product.id} className="p-4 border border-teal-700 bg-gray-700 text-gray-200 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold">{product.name}</h3>
          <p className="text-gray-400">{product.description}</p>
          <ul className="mt-2 space-y-1">
            {product.servicesOffered.map(service => (
              <li key={service.name}>
                <strong>{service.name}</strong>: {service.price} ({service.pricingMethod}) {service.retainer && ' - Retainer Required'}
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <a href={product.contactInformation.website} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Visit Website</a>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

const InfoPage: React.FC = () => (
  <div className="max-w-4xl mx-auto p-6  text-gray-200 rounded-lg shadow-md">
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

const productFiles: ProductFile[] = [
  {
    id: "az1b3x",
    name: "Blockchain Legal Dynamics LLC",
    description: "Blockchain Legal Dynamics LLC specializes in navigating the complexities of blockchain-related legal challenges. The firm advises on smart contract legality and offers litigation support for blockchain disputes.",
    servicesOffered: [
      { name: "Smart Contract Analysis", price: "$250 per hour", pricingMethod: "Hourly", retainer: true },
      { name: "Blockchain Litigation Support", price: "$300 per hour", pricingMethod: "Hourly", retainer: false }
    ],
    contactInformation: {
      website: "http://www.blockchainlegaldynamics.com"
    }
  },
  {
    id: "r4fd9v",
    name: "CryptoCode Compliance Corp.",
    description: "CryptoCode Compliance Corp. focuses on helping crypto businesses meet compliance regulations globally. They provide regulatory assessment and strategy development services.",
    servicesOffered: [
      { name: "Regulatory Compliance Consulting", price: "$400 per hour", pricingMethod: "Hourly", retainer: true },
      { name: "Compliance Strategy Development", price: "$500 per session", pricingMethod: "Flat", retainer: false }
    ],
    contactInformation: {
      website: "http://www.cryptocodecompliance.com"
    }
  },
  {
    id: "t6uh8j",
    name: "Decentralized Mediation Services",
    description: "Decentralized Mediation Services offers AI-powered mediation to resolve disputes in decentralized markets. They specialize in facilitating resolution without bias, using advanced AI protocols.",
    servicesOffered: [
      { name: "AI-Powered Contract Mediation", price: "$350 per mediation session", pricingMethod: "Flat", retainer: false },
      { name: "Dispute Resolution Consultation", price: "$200 per hour", pricingMethod: "Hourly", retainer: true }
    ],
    contactInformation: {
      website: ""
    }
  },
  {
    id: "b5vc2z",
    name: "Tokenized Assets Legal Group",
    description: "Tokenized Assets Legal Group provides specialized legal services for transactions involving tokenized assets. They focus on compliance, transaction support, and dispute resolution.",
    servicesOffered: [
      { name: "Tokenized Asset Transaction Support", price: "$300 per hour", pricingMethod: "Hourly", retainer: true },
      { name: "Tokenized Asset Dispute Resolution", price: "$350 per hour", pricingMethod: "Hourly", retainer: false }
    ],
    contactInformation: {
      website: "http://www.talgroup.com"
    }
  },
  {
    id: "m9s3km",
    name: "AI Contract Architects",
    description: "AI Contract Architects is at the forefront of designing intelligent contract systems using AI. They assist clients in creating automated, self-executing legal agreements.",
    servicesOffered: [
      { name: "AI-Driven Contract Design", price: "$500 per contract", pricingMethod: "Flat", retainer: false },
      { name: "AI Contract Implementation Support", price: "$250 per hour", pricingMethod: "Hourly", retainer: true }
    ],
    contactInformation: {
      website: "http://www.aicontractarchitects.com"
    }
  },
  {
    id: "qp4v8x",
    name: "Cryptographic Legal Solutions Ltd.",
    description: "Cryptographic Legal Solutions Ltd. focuses on legal issues surrounding cryptographic technologies and data security. They provide expert legal advice on encryption laws and data protection.",
    servicesOffered: [
      { name: "Cryptography Legal Consulting", price: "$400 per hour", pricingMethod: "Hourly", retainer: true },
      { name: "Data Protection Compliance", price: "$450 per hour", pricingMethod: "Hourly", retainer: false }
    ],
    contactInformation: {
      website: "http://www.cryptolegsol.com"
    }
  },
  {
    id: "w6yd0p",
    name: "Web3 Legal Educators",
    description: "Web3 Legal Educators is a non-profit organization committed to educating the public and professionals about legal aspects of Web3 technologies. They lead workshops and courses that demystify legal complexities in the Web3 space.",
    servicesOffered: [
      { name: "Web3 Legal Workshops", price: "$200 per participant", pricingMethod: "Flat", retainer: false },
      { name: "Online Legal Courses", price: "$150 per course", pricingMethod: "Flat", retainer: false }
    ],
    contactInformation: {
      website: "http://www.web3educators.com"
    }
  },
  {
    id: "h7g5fz",
    name: "NFT Legal Advisors LLC",
    description: "NFT Legal Advisors LLC provides targeted legal services for NFT creators and platforms, ensuring compliance and protecting intellectual property. They help clients navigate the evolving legal landscape of NFTs.",
    servicesOffered: [
      { name: "NFT Compliance Review", price: "$300 per hour", pricingMethod: "Hourly", retainer: true },
      { name: "Intellectual Property Protection for NFTs", price: "$350 per hour", pricingMethod: "Hourly", retainer: false }
    ],
    contactInformation: {
      website: "http://www.nftlegaladvisors.com"
    }
  },
  {
    id: "v9k3lm",
    name: "Digital Contract Certifiers",
    description: "Digital Contract Certifiers specialize in the certification and validation of digital contracts to ensure their legal enforceability. They help clients secure their digital agreements across various platforms.",
    servicesOffered: [
      { name: "Digital Contract Certification", price: "$250 per contract", pricingMethod: "Flat", retainer: false },
      { name: "Contract Validation Service", price: "$200 per contract", pricingMethod: "Flat", retainer: true }
    ],
    contactInformation: {
      website: ""
    }
  },
  {
    id: "s2x8pr",
    name: "Global Crypto Legal Consortium",
    description: "The Global Crypto Legal Consortium is a non-profit organization focused on developing and promoting standardized legal practices in the crypto industry. They provide research, guidelines, and advocacy.",
    servicesOffered: [
      { name: "Legal Research and Advocacy", price: "$200 per hour", pricingMethod: "Hourly", retainer: false },
      { name: "Guideline Development for Crypto Law", price: "$300 per project", pricingMethod: "Flat", retainer: true }
    ],
    contactInformation: {
      website: "http://www.cryptolegalconsortium.com"
    }
  }
];

export default EmbeddedWebsite;
