import React from 'react';

// Define the props structure using TypeScript interface
interface TopBarProps {
  username: string; // Prop to hold the username
}

const TopBar: React.FC<TopBarProps> = ({ username }) => {
  return (
    <div className="bg-blue-500 text-white flex justify-between items-center p-4">
      <div className="flex items-center">
        <img src="/logo.png" alt="Company Logo" className="h-8 mr-4" />
        <span className="font-bold text-lg">Dashboard</span>
      </div>
      <div className="flex items-center">
        <span className="mr-4">Welcome, {username}!</span> {/* Displaying the username */}
        <button className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Logout
        </button>
      </div>
    </div>
  );
};

export default TopBar;
