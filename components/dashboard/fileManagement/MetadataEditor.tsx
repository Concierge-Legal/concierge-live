const MetadataEditor: React.FC = () => {
    return (
      <div className="space-y-4">
        <input type="text" placeholder="Title" className="block w-full mt-1 rounded-md border-gray-300 shadow-sm" />
        <input type="text" placeholder="Tags" className="block w-full mt-1 rounded-md border-gray-300 shadow-sm" />
      </div>
    );
  };
export default MetadataEditor;  