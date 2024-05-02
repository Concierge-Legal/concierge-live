import React from 'react';

const NavigationSidebar: React.FC = () => {
  return (
    <div className="h-full w-64 bg-gray-800 text-white">
      <div className="flex flex-col p-4">
        <a href="#" className="py-2 text-sm hover:bg-gray-700">Home</a>
        <a href="#" className="py-2 text-sm hover:bg-gray-700">Usage</a>
        <a href="#" className="py-2 text-sm hover:bg-gray-700">Customization</a>
        <a href="#" className="py-2 text-sm hover:bg-gray-700">File Management</a>
      </div>
    </div>
  );
};

export default NavigationSidebar;
