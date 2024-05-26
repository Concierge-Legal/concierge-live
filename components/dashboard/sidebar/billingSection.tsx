import React from 'react';
import Link from 'next/link';
import { BanknotesIcon } from '@heroicons/react/24/solid';

const SettingsSection: React.FC<{ userId: string }> = ({ userId}) => {


    return (
        <div>
			<Link href={`/dashboard/${userId}/usage`} className ="flex pl-2 items-center w-full py-2 text-sm hover:bg-accent focus:outline-none">
				<BanknotesIcon className="h-5 w-5 mr-2" /> Usage and Billing
			</Link>
            {/* <button className="flex items-center w-full py-2 text-sm hover:bg-accent focus:outline-none" onClick={toggleExpand}>
                <BanknotesIcon className="h-5 w-5 mr-2" /> Usage and Billing
                {isExpanded ? <ChevronUpIcon className="h-5 w-5 ml-auto" /> : <ChevronDownIcon className="h-5 w-5 ml-auto" />}
            </button>
            {isExpanded && (
                <div className="pl-4">
                    <Link href={`/dashboard/${userId}/usage#usage`} className={`flex items-center py-2 text-sm hover:bg-accent ${activeMenu === 'usage' ? 'bg-accent' : ''}`}>
                        Usage
                    </Link>
                    <Link href={`/dashboard/${userId}/usage#billing`} className="flex items-center py-2 text-sm hover:bg-accent">
                        Billing
                    </Link>
					<Link href={`/dashboard/${userId}/usage#invoices`} className="flex items-center py-2 text-sm hover:bg-accent">
                        Invoices
                    </Link>
                    <Link href={`/dashboard/${userId}/usage#planSettings`} className="flex items-center py-2 text-sm hover:bg-accent">
                        Plan Settings
                    </Link>

                </div>
            )} */}
        </div>
    );
};

export default SettingsSection;
