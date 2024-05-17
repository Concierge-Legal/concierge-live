import React from 'react';



const FileUploadButton: React.FC = () => {
  return (
    <div className="py-4">
      <label className="block text-sm font-medium text-gray-700">
        Upload file
      </label>
      <input type="file" className="mt-1 block w-full" />
    </div>
  );
};


export default FileUploadButton;


