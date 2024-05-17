'use client';
import React, { useState, useEffect } from 'react';
import { createClient } from '@/utils/supabase/client';
import CategorySelector from '@/app/components/dashboard/fileManagement/CategorySelector';
import FileUpload from '@/app/components/dashboard/fileManagement/FileUpload';
import FileList from '@/app/components/dashboard/fileManagement/FileList';

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
    
        <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-semibold text-gray-800 mb-6">Knowledge Management Dashboard</h1>
            <CategorySelector selectedCategory={selectedCategory} onChange={setSelectedCategory} />
            <FileUpload onFileUpload={handleFileUpload} />
            <FileList fileList={fileList} onDelete={handleFileDelete} />
          </div>
        </div>
      
  );
};

export default KnowledgeDashboardSubpage;
