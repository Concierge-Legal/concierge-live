import React from 'react';


const CategorySelector: React.FC = () => {
  return (
    <div className="bg-white p-4 shadow rounded-lg">
      <select className="form-select block w-full mt-1 rounded-md border-gray-300 shadow-sm">
        <option>Industry Knowledge</option>
        <option>Products and Services</option>
        <option>UX Knowledge</option>
      </select>
    </div>
  );
};


export default CategorySelector;