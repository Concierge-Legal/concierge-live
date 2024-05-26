import React, { useState } from 'react';
import Link from 'next/link';
import { ChartBarIcon, DocumentTextIcon, ClipboardIcon } from '@heroicons/react/24/solid';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'; // Icons for expanding and collapsing

const AnalyticsSection: React.FC<{ userId: string, activeMenu: string }> = ({ userId, activeMenu }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div>
            <button className="flex items-center w-full py-2 text-sm hover:bg-accent focus:outline-none" onClick={toggleExpand}>
                <ChartBarIcon className="h-5 w-5 mr-2" />
                Analytics
                {isExpanded ? <ChevronUpIcon className="h-5 w-5 ml-auto" /> : <ChevronDownIcon className="h-5 w-5 ml-auto" />}
            </button>
            {isExpanded && (
                <div className="pl-4">
                    <Link href={`/dashboard/${userId}/analytics#userEngagement`} className={`block py-2 text-sm hover:bg-accent ${activeMenu === 'analytics' ? 'bg-accent' : ''}`}>
                        User Engagement
                    </Link>
                    <Link href={`/dashboard/${userId}/analytics#responseMetrics`} className="block py-2 text-sm hover:bg-accent">
                        Response Metrics
                    </Link>
                    <Link href={`/dashboard/${userId}/analytics#customerInsights`} className="block py-2 text-sm hover:bg-accent">
                        Customer Insights
                    </Link>
					<Link href={`/dashboard/${userId}/analytics#resolutionMetrics`} className="block py-2 text-sm hover:bg-accent">
                        Resolution Metrics
                    </Link>
					<Link href={`/dashboard/${userId}/analytics#userSatisfaction`} className="block py-2 text-sm hover:bg-accent">
                        User Satisfaction
                    </Link>
                </div>
            )}
        </div>
    );
};

export default AnalyticsSection;
