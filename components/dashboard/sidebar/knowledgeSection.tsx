import React, { useState } from 'react';
import Link from 'next/link';
import { BuildingLibraryIcon } from '@heroicons/react/24/solid';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'; // Icons for expanding and collapsing

const KnowledgeSection: React.FC<{ userId: string, activeMenu: string; }> = ({ userId, activeMenu }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div>
            <button className="flex items-center w-full py-2 text-sm hover:bg-accent focus:outline-none" onClick={toggleExpand}>
                <BuildingLibraryIcon className="h-5 w-5 mr-2" />
                Knowledge Library
                {isExpanded ? <ChevronUpIcon className="h-5 w-5 ml-auto" /> : <ChevronDownIcon className="h-5 w-5 ml-auto" />}
            </button>
            {isExpanded && (
                <div className="pl-4">
                    <Link href={`/dashboard/${userId}/industry`} className="flex items-center py-2 text-sm hover:bg-accent">
                        Industry Files
                    </Link>
                    <Link href={`/dashboard/${userId}/company`} className="flex items-center py-2 text-sm hover:bg-accent">
                        Company Files
                    </Link>
                    <Link href={`/dashboard/${userId}/products`} className="flex items-center py-2 text-sm hover:bg-accent">
                        Products and Services
                    </Link>

                </div>
            )}
        </div>
    );
};

export default KnowledgeSection;
