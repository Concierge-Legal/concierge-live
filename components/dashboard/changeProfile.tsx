'use client';
import { ChangeEvent, useState } from 'react';

const UploadPicture = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = () => {
    
    alert('File ready to be uploaded!');
  };

  return (
    <div className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Upload Picture</h2>
      <input 
        type="file" 
        accept="image/*" 
        onChange={handleFileChange} 
        className="mb-4"
      />
      {preview && (
        <img 
          src={preview} 
          alt="Preview" 
          className="mb-4 w-64 h-64 object-cover"
        />
      )}
      {selectedFile && (
        <button 
          onClick={handleUpload} 
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Upload
        </button>
      )}
    </div>
  );
};

export default UploadPicture;
