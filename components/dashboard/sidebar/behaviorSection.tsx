import React, { useState } from 'react';
import Link from 'next/link';
import { ChartBarIcon, CogIcon, DocumentTextIcon, AcademicCapIcon } from '@heroicons/react/24/solid';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'; // Icons for expanding and collapsing

const SettingsSection: React.FC<{ userId: string, activeMenu: string; }> = ({ userId, activeMenu }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div>
            <button className="flex items-center w-full py-2 text-sm hover:bg-accent focus:outline-none" onClick={toggleExpand}>
                <AcademicCapIcon className="h-5 w-5 mr-2" /> Train Behavior
                {isExpanded ? <ChevronUpIcon className="h-5 w-5 ml-auto" /> : <ChevronDownIcon className="h-5 w-5 ml-auto" />}
            </button>
            {isExpanded && (
                <div className="pl-4">
                    <Link href={`/dashboard/${userId}/training`} className={`flex items-center py-2 text-sm hover:bg-accent ${activeMenu === 'training' ? 'bg-accent' : ''}`}>
                        Training Models
                    </Link>
                    <Link href={`/dashboard/${userId}/training/responses`} className="flex items-center py-2 text-sm hover:bg-accent">
                        Automated Responses Setup
                    </Link>
                    <Link href={`/dashboard/${userId}/training/behavior`} className="flex items-center py-2 text-sm hover:bg-accent">
                        Chatbot Behavior Settings
                    </Link>

                </div>
            )}
        </div>
    );
};

export default SettingsSection;
