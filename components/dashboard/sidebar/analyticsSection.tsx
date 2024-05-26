import React from 'react';
import Link from 'next/link';
import { ChartBarIcon } from '@heroicons/react/24/solid';

const AnalyticsSection: React.FC<{ userId: string}> = ({ userId }) => {

    return (
        <div>
            <button className="flex pl-2 items-center w-full py-2 text-sm hover:bg-accent focus:outline-none">
                <ChartBarIcon className="h-5 w-5 mr-2" />
                Analytics
                
            </button>
            
                <div className="pl-8">
                    <Link href={`/dashboard/${userId}/analytics#userEngagement`} className="block py-2 text-sm hover:bg-accent">
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
           
        </div>
    );
};

export default AnalyticsSection;
