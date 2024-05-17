'use client';
import React, { useState, useEffect } from 'react';
import { createClient } from '@/utils/supabase/client';
import CategorySelector from '@/components/dashboard/fileManagement/CategorySelector';
import FileUploadButton from '@/components/dashboard/fileManagement/FileUpload';
import FileViewer from '@/components/dashboard/fileManagement/FileViewer';
import FileList from '@/components/dashboard/fileManagement/FileList';
import MetadataEditor from '@/components/dashboard/fileManagement/MetadataEditor';

// Initialize Supabase client (configure your Supabase details)
const supabase = createClient();

const KnowledgeDashboardSubpage: React.FC<{ userId: string }> = ({ userId }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('IndustryKnowledge');
  const [fileList, setFileList] = useState<string[]>([]);

  useEffect(() => {
    const fetchFiles = async () => {
      const { data, error } = await supabase
        .storage
        .from(selectedCategory)
        .list('', { limit: 100, offset: 0, sortBy: { column: 'name', order: 'asc' } });
      if (data) {
        setFileList(data.map(file => file.name));
      }
    };
    fetchFiles();
  }, [selectedCategory]);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      const file = e.target.files[0];
      const { data, error } = await supabase
        .storage
        .from(selectedCategory)
        .upload(`${Date.now()}_${file.name}`, file);
      if (data) {
        setFileList([...fileList, file.name]);
      }
    }
  };

  const handleFileDelete = async (fileName: string) => {
    const { data, error } = await supabase
        .storage
        .from(selectedCategory)
        .remove([fileName]);
    if (data) {
      setFileList(fileList.filter(name => name !== fileName));
    }
  };

  return (
    
    
        <div className="flex flex-col md:flex-row p-4 gap-4">
          <div className="md:w-1/3 bg-white shadow-lg p-4 rounded-lg">
            <CategorySelector />
            
            <FileList />
            <FileUploadButton />
          </div>
          <div className="md:w-2/3 bg-white shadow-lg p-4 rounded-lg flex flex-col">
            <FileViewer />
            <MetadataEditor />
          </div>
        </div>
      
      
  );
};

export default KnowledgeDashboardSubpage;
