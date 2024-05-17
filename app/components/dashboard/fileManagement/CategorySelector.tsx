import React from 'react';

interface CategorySelectorProps {
  selectedCategory: string;
  onChange: (category: string) => void;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({ selectedCategory, onChange }) => {
  return (
    <div className="my-4">
      <label htmlFor="category" className="block text-sm font-medium text-gray-700">Select Category</label>
      <select
        id="category"
        value={selectedCategory}
        onChange={e => onChange(e.target.value)}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      >
        <option value="IndustryKnowledge">Industry Knowledge</option>
        <option value="ProductsAndServices">Products and Services</option>
        <option value="UXKnowledge">UX Knowledge</option>
      </select>
    </div>
  );
};

export default CategorySelector;
