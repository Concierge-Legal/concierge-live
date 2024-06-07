import React, { useState } from 'react';
import { NetworkFile } from '@/lib/utils/types';

interface StaticNetworkCardProps {
  network: NetworkFile;
}

const StaticNetworkCard: React.FC<StaticNetworkCardProps> = ({ network }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg cursor-pointer" onClick={toggleExpand}>
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold">{network.name}</h3>
        <span className="px-2 py-1 bg-gray-700 rounded text-xs">Services</span>
      </div>
      {!isExpanded && (
        <div className="mt-4">
          <div className="w-full h-32 bg-gray-700 rounded-lg flex items-center justify-center">
            <span className="text-gray-400">Image Placeholder</span>
          </div>
        </div>
      )}
      {isExpanded && (
        <>
          <p className="mt-4">{network.description}</p>
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
        </>
      )}
    </div>
  );
};

export default StaticNetworkCard;
