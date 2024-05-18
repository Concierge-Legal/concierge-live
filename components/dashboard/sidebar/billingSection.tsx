import React, { useState } from 'react';
import Link from 'next/link';
import { BanknotesIcon } from '@heroicons/react/24/solid';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'; // Icons for expanding and collapsing

const SettingsSection: React.FC<{ userId: string, activeMenu: string; }> = ({ userId, activeMenu }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div>
            <button className="flex items-center w-full py-2 text-sm hover:bg-accent focus:outline-none" onClick={toggleExpand}>
                <BanknotesIcon className="h-5 w-5 mr-2" /> Billing and Usage
                {isExpanded ? <ChevronUpIcon className="h-5 w-5 ml-auto" /> : <ChevronDownIcon className="h-5 w-5 ml-auto" />}
            </button>
            {isExpanded && (
                <div className="pl-4">
                    <Link href={`/dashboard/${userId}/usage`} className={`flex items-center py-2 text-sm hover:bg-accent ${activeMenu === 'usage' ? 'bg-accent' : ''}`}>
                        Usage
                    </Link>
                    <Link href={`/dashboard/${userId}/billing/history`} className="flex items-center py-2 text-sm hover:bg-accent">
                        Billing History
                    </Link>
                    <Link href={`/dashboard/${userId}/billing/plans`} className="flex items-center py-2 text-sm hover:bg-accent">
                        Current Subscription Plan
                    </Link>

                </div>
            )}
        </div>
    );
};

export default SettingsSection;
