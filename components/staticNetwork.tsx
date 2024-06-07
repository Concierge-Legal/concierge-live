// pages/staticnetworks.tsx
import React, { useEffect, useState } from 'react';
import { createClient } from '@/lib/utils/supabase/client';
import { Member } from '@/lib/utils/types';
import StaticNetworkCard from '@/components/dashboard/fileManagement/staticNetworkCard';
import { NetworkFile } from '@/lib/utils/types';

const networkFiles: NetworkFile[] = [
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
  
  const StaticNetworks: React.FC = () => {
	return (
	  <div className="min-h-screen bg-gray-900 text-white px-8 py-12">
		<div className="max-w-4xl mx-auto">
		  <div className="bg-gray-800 p-8 rounded-lg shadow-lg mb-12 text-center">
			<h1 className="text-5xl font-bold text-indigo-500">Members & Services</h1>
		  </div>
		  {networkFiles.length > 0 ? (
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
			  {networkFiles.map((network: NetworkFile) => (
				<StaticNetworkCard key={network.id} network={network} />
			  ))}
			</div>
		  ) : (
			<div className="flex justify-center items-center h-64">
			  <p className="text-gray-400">No networks found.</p>
			</div>
		  )}
		</div>
	  </div>
	);
  };


export default StaticNetworks;
  