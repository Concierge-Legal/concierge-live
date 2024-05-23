import React from "react";
import { BaseFile } from "@/utils/types";
import { Button } from "@/components/ui/button";
import ReactQuill from 'react-quill';  // Import ReactQuill
import 'react-quill/dist/quill.snow.css'; // Import Quill stylesheet

interface TextEditorProps {
  document: BaseFile;
  onSave: (content: string) => void;
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

  React.useEffect(() => {
    // Fetch content here or initialize it
    setContent(`Content of ${document.name}`);  // Placeholder for actual content fetching
  }, [document]);

  const handleSave = () => {
    onSave(content);  // Implement the save logic
  };

  return (
    <div className="bg-white p-4 h-full w-full">
      <h2 className="text-lg font-semibold mb-2">{document.name}</h2>
      <ReactQuill
        theme="snow"
        value={content}
        onChange={setContent}
        modules={modules}
        formats={formats}
        className="text-editor"
      />

    </div>
  );
};

export default TextEditor;
