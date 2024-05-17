import React from 'react';

interface FileListProps {
  fileList: string[];
  onDelete: (fileName: string) => void;
}

const FileList: React.FC<FileListProps> = ({ fileList, onDelete }) => {
  return (
    <div className="mt-8">
      <ul className="divide-y divide-gray-200">
        {fileList.map(fileName => (
          <li key={fileName} className="py-4 flex justify-between items-center">
            <span className="text-sm font-medium text-gray-900">{fileName}</span>
            <button
              onClick={() => onDelete(fileName)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileList;