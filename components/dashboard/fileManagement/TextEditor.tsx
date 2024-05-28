import React from "react";
import { BaseFile } from "@/lib/utils/types";
import { Button } from "@/components/ui/button";
import ReactQuill from 'react-quill';  // Import ReactQuill
import 'react-quill/dist/quill.snow.css'; // Import Quill stylesheet

interface TextEditorProps {
  document: BaseFile;
  onSave: (content: string, name: string) => void; // Modify the onSave function to include name
}

const modules = {
  toolbar: [
    [{ 'header': [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
    ['link', 'image'],
    ['clean']
  ],
};

const formats = [
  'header',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image'
];

const TextEditor: React.FC<TextEditorProps> = ({ document, onSave }) => {
  const [content, setContent] = React.useState('');
  const [documentName, setDocumentName] = React.useState(document.name);
  const [isEditingName, setIsEditingName] = React.useState(false); // State to control edit mode

  React.useEffect(() => {
    // Fetch content here or initialize it
    setContent(`Content of ${document.name}`);  // Placeholder for actual content fetching
  }, [document]);

  const handleSave = () => {
    onSave(content, documentName);  // Pass the document name along with the content
  };

  const handleEditNameToggle = () => {
    setIsEditingName(!isEditingName);
  };

  return (
    <div className="bg-white p-4 h-full w-full">
      <div className="mb-2 flex items-center">
        <input
          type="text"
          value={documentName}
          onChange={(e) => setDocumentName(e.target.value)}
          className={`text-lg font-semibold p-2 border rounded ${isEditingName ? 'w-full' : 'w-full'} ${isEditingName ? 'bg-gray-200' : 'bg-white'}`}
          placeholder="Document Name"
          disabled={!isEditingName} // Disable input if not in edit mode
        />
        <Button 
          onClick={handleEditNameToggle} 
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          {isEditingName ? 'Save' : 'Edit Name'}
        </Button>
      </div>
      <ReactQuill
        theme="snow"
        value={content}
        onChange={setContent}
        modules={modules}
        formats={formats}
        className="text-editor"
      />
      <Button onClick={handleSave} className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Save Content</Button> {/* Save content button */}
    </div>
  );
};

export default TextEditor;
