import React from 'react';
import Link from 'next/link';
import { ChartBarIcon } from '@heroicons/react/24/solid';

const AnalyticsSection: React.FC<{ userId: string}> = ({ userId }) => {

    return (
        <div>
            <button className="flex pl-2 items-center w-full py-2 text-sm hover:bg-accent focus:outline-none">
                <ChartBarIcon className="h-5 w-5 mr-2" /><Link href={`/dashboard/${userId}/analytics#userEngagement`} className="">
                      
                   
                Analytics
                 </Link>
            </button>
            
                
           
        </div>
    );
};

export default AnalyticsSection;
