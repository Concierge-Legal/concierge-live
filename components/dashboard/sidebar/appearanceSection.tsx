import React, { useState } from 'react';
import Link from 'next/link';
import { ScissorsIcon } from '@heroicons/react/24/solid';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'; // Icons for expanding and collapsing

const AppearanceSection: React.FC<{ userId: string, activeMenu: string; }> = ({ userId, activeMenu }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div>
            <button className="flex items-center w-full py-2 text-sm hover:bg-accent focus:outline-none" onClick={toggleExpand}>
                <ScissorsIcon className="h-5 w-5 mr-2" /> Appearance
                {isExpanded ? <ChevronUpIcon className="h-5 w-5 ml-auto" /> : <ChevronDownIcon className="h-5 w-5 ml-auto" />}
            </button>
            {isExpanded && (
                <div className="pl-4">
                    <Link href={`/dashboard/${userId}/appearance`} className={`flex items-center py-2 text-sm hover:bg-accent ${activeMenu === 'appearance' ? 'bg-accent' : ''}`}>
                        Theme Settings
                    </Link>
                    <Link href={`/dashboard/${userId}/appearance/layout`} className={`flex items-center py-2 text-sm hover:bg-accent ${activeMenu === 'analytics' ? 'bg-accent' : ''}`}>
                        Layout Customization
                    </Link>
                    

                </div>
            )}
        </div>
    );
};

export default AppearanceSection;
