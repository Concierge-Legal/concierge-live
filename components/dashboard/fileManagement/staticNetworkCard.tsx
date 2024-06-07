
import React from 'react';
import { NetworkFile } from '@/lib/utils/types';


interface StaticNetworkCardProps {
  network: NetworkFile;
}

const StaticNetworkCard: React.FC<StaticNetworkCardProps> = ({ network }) => {
  return (
	<div className="bg-gray-800 p-6 rounded-lg shadow-lg">
	<div className="flex items-center justify-between mb-2">
	  <h3 className="text-lg font-semibold">{network.name}</h3>
	  <span className="px-2 py-1 bg-gray-700 rounded text-xs">
		{network.servicesOffered.map(service => service.name).join(', ')}
	  </span>
	</div>
	<p>{network.description}</p>
	<p className="mt-2 text-sm text-gray-400">
	  Services:
	  {network.servicesOffered.map(service => (
		<div key={service.name}>
		  {service.name}: {service.price} ({service.pricingMethod})
		</div>
	  ))}
	</p>
	{network.contactInformation.website && (
	  <p className="mt-2 text-sm text-indigo-500">
		<a href={network.contactInformation.website} target="_blank" rel="noopener noreferrer">
		  Website
		</a>
	  </p>
	)}
  </div>
  );
};

export default StaticNetworkCard;
