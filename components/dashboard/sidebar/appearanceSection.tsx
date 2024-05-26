import React from 'react';
import Link from 'next/link';
import { ScissorsIcon } from '@heroicons/react/24/solid';

const AppearanceSection: React.FC<{ userId: string }> = ({ userId }) => {
   

    return (
        <div>
			<Link href={`/dashboard/${userId}/appearance`} className ="flex pl-2 items-center w-full py-2 text-sm hover:bg-accent focus:outline-none">
				<ScissorsIcon className="h-5 w-5 mr-2" /> Appearance
			</Link>
            {/* <button className="flex pl-2 items-center w-full py-2 text-sm hover:bg-accent focus:outline-none" onClick={toggleExpand}>
                <ScissorsIcon className="h-5 w-5 mr-2" /> Appearance
                {isExpanded ? <ChevronUpIcon className="h-5 w-5 ml-auto" /> : <ChevronDownIcon className="h-5 w-5 ml-auto" />}
            </button>
            {isExpanded && (
                <div className="pl-4">
                    <Link href={`/dashboard/${userId}/appearance#theme`} className={`flex items-center py-2 text-sm hover:bg-accent`}>
                        Theme
                    </Link>
                    <Link href={`/dashboard/${userId}/appearance#color`} className={`flex items-center py-2 text-sm hover:bg-accent `}>
                        Color
                    </Link>
					<Link href={`/dashboard/${userId}/appearance#profile`} className={`flex items-center py-2 text-sm hover:bg-accent `}>
                        Profile Picture
                    </Link>

                </div>
            )} */}
        </div>
    );
};

export default AppearanceSection;
