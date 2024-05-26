import React from 'react';
import Link from 'next/link';
import { BuildingLibraryIcon } from '@heroicons/react/24/solid';



const KnowledgeSection: React.FC<{ userId: string}> = ({ userId}) => {
    

    return (
        <div>
            <button className="flex pl-2 items-center w-full py-2 text-sm hover:bg-accent focus:outline-none">
                <BuildingLibraryIcon className="h-5 w-5 mr-2" />
                Knowledge Library
                
            </button>
            
                <div className="pl-8">
                    <Link href={`/dashboard/${userId}/industry`} className="flex items-center py-2 text-sm hover:bg-accent">
                        <p>Industry Files</p>
                    </Link>
                    <Link href={`/dashboard/${userId}/company`} className="flex items-center py-2 text-sm hover:bg-accent">
                        Company Files
                    </Link>
                    <Link href={`/dashboard/${userId}/products`} className="flex items-center py-2 text-sm hover:bg-accent">
                        Products and Services
                    </Link>

                </div>
            
        </div>
    );
};

export default KnowledgeSection;
