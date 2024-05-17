import React from 'react';

interface FileUploadProps {
  onFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileUpload }) => {
  return (
    <div className="flex justify-center items-center w-full my-4">
      <label htmlFor="file-upload" className="flex flex-col justify-center items-center w-full h-32 bg-white rounded-lg border-2 border-gray-300 border-dashed cursor-pointer hover:bg-gray-100">
        <div className="flex flex-col justify-center items-center pt-5 pb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7l5-5m0 0l5 5m-5-5v12m0 0H7m5 0h5m-6 0a2 2 0 00-2 2h10a2 2 0 00-2-2m-6 0V4" />
          </svg>
          <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
          <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x800px)</p>
        </div>
        <input id="file-upload" name="file-upload" type="file" className="hidden" onChange={onFileUpload} />
      </label>
    </div>
  );
};

export default FileUpload;
