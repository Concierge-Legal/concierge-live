import React from 'react';

const MainContent: React.FC = () => {
  return (
    <div className="flex-1 p-8 bg-gray-100">
      <h1 className="font-bold text-2xl">Welcome to the Dashboard</h1>
      <p>This area will display content based on the selected page in the navigation sidebar.</p>
    </div>
  );
};

export default MainContent;
