import React from 'react';
import Link from 'next/link';
import { AcademicCapIcon } from '@heroicons/react/24/solid';

const SettingsSection: React.FC<{ userId: string}> = ({ userId}) => {
   

    return (
        <div>
            <button className="flex pl-2 items-center w-full py-2 text-sm hover:bg-accent focus:outline-none" >
                <AcademicCapIcon className="h-5 w-5 mr-2" /> Behavior Training
                
            </button>
            
                <div className="pl-8">
                    <Link href={`/dashboard/${userId}/training#greetings`} className={`flex items-center py-2 text-sm hover:bg-accent `}>
                        Greetings
                    </Link>
                    <Link href={`/dashboard/${userId}/training#toolUse`} className="flex items-center py-2 text-sm hover:bg-accent">
                        Tool Use
                    </Link>
                    <Link href={`/dashboard/${userId}/training#escalation`} className="flex items-center py-2 text-sm hover:bg-accent">
                        Escalation Protocol
                    </Link>

                </div>
          
        </div>
    );
};

export default SettingsSection;
