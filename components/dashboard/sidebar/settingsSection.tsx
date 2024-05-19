import React, { useState } from 'react';
import Link from 'next/link';
import { ChartBarIcon, CogIcon } from '@heroicons/react/24/solid';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'; // Icons for expanding and collapsing

const SettingsSection: React.FC<{ userId: string, activeMenu: string; }> = ({ userId, activeMenu }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div>
            <button className="flex items-center w-full py-2 text-sm hover:bg-accent focus:outline-none" onClick={toggleExpand}>
                <CogIcon className="h-5 w-5 mr-2" /> Settings
                {isExpanded ? <ChevronUpIcon className="h-5 w-5 ml-auto" /> : <ChevronDownIcon className="h-5 w-5 ml-auto" />}
            </button>
            {isExpanded && (
                <div className="pl-4">
                    <Link href={`/dashboard/${userId}/settings/organization`} className="flex items-center py-2 text-sm hover:bg-accent">
                        Organization
                    </Link>
                    <Link href={`/dashboard/${userId}/settings/security`} className="flex items-center py-2 text-sm hover:bg-accent">
                        Security
                    </Link>
                    <Link href={`/dashboard/${userId}/settings/users`} className="flex items-center py-2 text-sm hover:bg-accent">
                        User Management
                    </Link>
                    <Link href={`/dashboard/${userId}/maintenance`} className={`flex items-center py-2 text-sm hover:bg-accent ${activeMenu === 'maintenance' ? 'bg-accent' : ''}`}>
                        Maintenance
                    </Link>

                </div>
            )}
        </div>
    );
};

export default SettingsSection;
