import React from 'react';
import Link from 'next/link';
import { ChartBarIcon } from '@heroicons/react/24/solid';
import { ScissorsIcon } from '@heroicons/react/24/solid';
import { BanknotesIcon } from '@heroicons/react/24/solid';
import { BuildingLibraryIcon } from '@heroicons/react/24/solid';
import { AcademicCapIcon } from '@heroicons/react/24/solid';
import { CogIcon } from '@heroicons/react/24/solid';



export const KnowledgeSection: React.FC<{ userId: string; }> = ({ userId }) => {

	return (
		<div>
			<button className="flex pl-2 items-center w-full py-2 text-sm hover:bg-accent focus:outline-none">
				<BuildingLibraryIcon className="h-5 w-5 mr-2" />
				Knowledge Library
			</button>

			<div className="pl-8">
				<Link href={`/dashboard/${userId}/industry`} className="flex items-center py-2 text-sm hover:bg-accent">
					<p>Industry Files</p>
				</Link>
				<Link href={`/dashboard/${userId}/company`} className="flex items-center py-2 text-sm hover:bg-accent">
					Company Files
				</Link>
				<Link href={`/dashboard/${userId}/products`} className="flex items-center py-2 text-sm hover:bg-accent">
					Products and Services
				</Link>

			</div>

		</div>
	);
};

export const AnalyticsSection: React.FC<{ userId: string; }> = ({ userId }) => {

	return (
		<div>
			<button className="flex pl-2 items-center w-full py-2 text-sm hover:bg-accent focus:outline-none">
				<ChartBarIcon className="h-5 w-5 mr-2" />
				<Link href={`/dashboard/${userId}/analytics#userEngagement`} className="">
					Analytics
				</Link>
			</button>
		</div>
	);
};




export const AppearanceSection: React.FC<{ userId: string; }> = ({ userId }) => {

	return (
		<div>
			<Link href={`/dashboard/${userId}/appearance`} className="flex pl-2 items-center w-full py-2 text-sm hover:bg-accent focus:outline-none">
				<ScissorsIcon className="h-5 w-5 mr-2" /> Appearance
			</Link>
		</div>
	);
};





export const BillingSection: React.FC<{ userId: string; }> = ({ userId }) => {

	return (
		<div>
			<Link href={`/dashboard/${userId}/usage`} className="flex pl-2 items-center w-full py-2 text-sm hover:bg-accent focus:outline-none">
				<BanknotesIcon className="h-5 w-5 mr-2" /> Usage and Billing
			</Link>
		</div>
	);
};











export const TrainingSection: React.FC<{ userId: string; }> = ({ userId }) => {


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




export const SettingsSection: React.FC<{ userId: string; }> = ({ userId }) => {


	return (
		<div>
			<Link href={`/dashboard/${userId}/settings`} className="flex pl-2 items-center w-full py-2 text-sm hover:bg-accent focus:outline-none">
				<CogIcon className="h-5 w-5 mr-2" /> Settings
			</Link>
		</div>
	);
};

