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
                <AcademicCapIcon className="h-5 w-5 mr-2" /> Behavior Training
                {isExpanded ? <ChevronUpIcon className="h-5 w-5 ml-auto" /> : <ChevronDownIcon className="h-5 w-5 ml-auto" />}
            </button>
            {isExpanded && (
                <div className="pl-4">
                    <Link href={`/dashboard/${userId}/training#greetings`} className={`flex items-center py-2 text-sm hover:bg-accent ${activeMenu === 'training' ? 'bg-accent' : ''}`}>
                        Greetings
                    </Link>
                    <Link href={`/dashboard/${userId}/training#toolUse`} className="flex items-center py-2 text-sm hover:bg-accent">
                        Tool Use
                    </Link>
                    <Link href={`/dashboard/${userId}/training#escalation`} className="flex items-center py-2 text-sm hover:bg-accent">
                        Escalation Protocol
                    </Link>

                </div>
            )}
        </div>
    );
};

export default SettingsSection;
