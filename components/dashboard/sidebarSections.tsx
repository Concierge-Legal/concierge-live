import React from 'react';
import Link from 'next/link';
import { ChartBarIcon } from '@heroicons/react/24/solid';
import { ScissorsIcon } from '@heroicons/react/24/solid';
import { BanknotesIcon } from '@heroicons/react/24/solid';
import { BuildingLibraryIcon } from '@heroicons/react/24/solid';
import { AcademicCapIcon } from '@heroicons/react/24/solid';
import { CogIcon } from '@heroicons/react/24/solid';
import { UserGroupIcon } from '@heroicons/react/24/solid';


export const OrganizationSection: React.FC<{ organizationId: string; }> = ({ organizationId }) => {

	return (
		<div>
			<button className="flex pl-2 items-center w-full py-2 text-sm hover:bg-accent focus:outline-none">
				<BuildingLibraryIcon className="h-5 w-5 mr-2" />
				<Link href={`/dashboard/${organizationId}/organization`} className="">
					Organization Knowledge
				</Link>
			</button>
		</div>
	);
};
export const NetworkSection: React.FC<{ organizationId: string; }> = ({ organizationId }) => {

	return (
		<div>
			<button className="flex pl-2 items-center w-full py-2 text-sm hover:bg-accent focus:outline-none">
				<UserGroupIcon className="h-5 w-5 mr-2" />
				<Link href={`/dashboard/${organizationId}/network`} className="">
					Network Directory
				</Link>
			</button>
		</div>
	);
};


export const AnalyticsSection: React.FC<{ organizationId: string; }> = ({ organizationId }) => {

	return (
		<div>
			<button className="flex pl-2 items-center w-full py-2 text-sm hover:bg-accent focus:outline-none">
				<ChartBarIcon className="h-5 w-5 mr-2" />
				<Link href={`/dashboard/${organizationId}/analytics#userEngagement`} className="">
					Analytics
				</Link>
			</button>
		</div>
	);
};




export const AppearanceSection: React.FC<{ organizationId: string; }> = ({ organizationId }) => {

	return (
		<div>
			<Link href={`/dashboard/${organizationId}/appearance`} className="flex pl-2 items-center w-full py-2 text-sm hover:bg-accent focus:outline-none">
				<ScissorsIcon className="h-5 w-5 mr-2" /> Appearance
			</Link>
		</div>
	);
};





export const BillingSection: React.FC<{ organizationId: string; }> = ({ organizationId }) => {

	return (
		<div>
			<Link href={`/dashboard/${organizationId}/usage`} className="flex pl-2 items-center w-full py-2 text-sm hover:bg-accent focus:outline-none">
				<BanknotesIcon className="h-5 w-5 mr-2" /> Usage and Billing
			</Link>
		</div>
	);
};











export const TrainingSection: React.FC<{ organizationId: string; }> = ({ organizationId }) => {


	return (
		<div>
			<button className="flex pl-2 items-center w-full py-2 text-sm hover:bg-accent focus:outline-none" >
				<AcademicCapIcon className="h-5 w-5 mr-2" /> Behavior Training

			</button>

			<div className="pl-8">
				<Link href={`/dashboard/${organizationId}/training#greetings`} className={`flex items-center py-2 text-sm hover:bg-accent `}>
					Greetings
				</Link>
				<Link href={`/dashboard/${organizationId}/training#toolUse`} className="flex items-center py-2 text-sm hover:bg-accent">
					Tool Use
				</Link>
				<Link href={`/dashboard/${organizationId}/training#escalation`} className="flex items-center py-2 text-sm hover:bg-accent">
					Escalation Protocol
				</Link>

			</div>

		</div>
	);
};




export const SettingsSection: React.FC<{ organizationId: string; }> = ({ organizationId }) => {


	return (
		<div>
			<Link href={`/dashboard/${organizationId}/settings`} className="flex pl-2 items-center w-full py-2 text-sm hover:bg-accent focus:outline-none">
				<CogIcon className="h-5 w-5 mr-2" /> Settings
			</Link>
		</div>
	);
};

