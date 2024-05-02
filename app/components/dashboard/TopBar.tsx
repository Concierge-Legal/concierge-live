import React from 'react';



const TopBar: React.FC = () => {
  return (
    <div className="bg-blue-500 text-white flex justify-between items-center p-4">
      <div className="flex items-center">
        <img src="/logo.png" alt="Company Logo" className="h-8 mr-4" />
        <span className="font-bold text-lg">Dashboard</span>
      </div>
      <div>
        <button className="ml-4 bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Logout
        </button>
      </div>
    </div>
  );
};

export default TopBar;
