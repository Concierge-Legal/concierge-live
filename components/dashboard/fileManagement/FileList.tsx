import React from 'react';



const FileList: React.FC = () => {
  return (
    <ul className="divide-y divide-gray-200">
      {['Document1.txt', 'Document2.md'].map((file, index) => (
        <li key={index} className="py-2 px-4 flex justify-between items-center">
          <span>{file}</span>
          <button className="text-red-500 hover:text-red-700">Delete</button>
        </li>
      ))}
    </ul>
  );
};


export default FileList;