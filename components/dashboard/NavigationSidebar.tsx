'use client';
import Link from 'next/link';
import { LogoutButton } from '../imported/AuthButton';
import { useState } from 'react';
import { HomeIcon, ChartBarIcon, CogIcon, EyeIcon, AcademicCapIcon, BookOpenIcon, WrenchIcon, DocumentTextIcon, ServerIcon, ClipboardIcon } from '@heroicons/react/24/solid';

interface NavigationSidebarProps {
  activeMenu: string;
  userId: string;
}

const NavigationSidebar: React.FC<{ userId: string, activeMenu: string }> = ({ userId, activeMenu }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
      setIsExpanded(!isExpanded);
  };
  return (
    <div className="h-full min-h-screen w-64 bg-card text-foreground flex flex-col">
      <div className="p-4">
        {/* Home */}
        <Link href={`/dashboard/${userId}`} className={`flex items-center py-2 text-sm hover:bg-accent ${activeMenu === 'home' ? 'bg-accent' : ''}`}>
          <HomeIcon className="h-5 w-5 mr-2" /> Home
        </Link>

        {/* Dynamic Grouping Example: Analytics */}
        <div className="mt-4">
          <h3 className="text-sm font-bold pl-2">Analytics & Insights</h3>
          <Link href={`/dashboard/${userId}/analytics`} className={`flex items-center py-2 text-sm hover:bg-accent ${activeMenu === 'analytics' ? 'bg-accent' : ''}`}>
            <ChartBarIcon className="h-5 w-5 mr-2" /> Overview
          </Link>
          
          <Link href={`/dashboard/${userId}/analytics/traffic`} className="flex items-center py-2 text-sm hover:bg-accent">
            <DocumentTextIcon className="h-5 w-5 mr-2" /> Traffic Analysis
          </Link>
          <Link href={`/dashboard/${userId}/analytics/behavior`} className="flex items-center py-2 text-sm hover:bg-accent">
            <ClipboardIcon className="h-5 w-5 mr-2" /> User Behavior
          </Link>
          <Link href={`/dashboard/${userId}/analytics/conversion`} className="flex items-center py-2 text-sm hover:bg-accent">
            <DocumentTextIcon className="h-5 w-5 mr-2" /> Conversion Metrics
          </Link>
          <Link href={`/dashboard/${userId}/analytics/engagement`} className="flex items-center py-2 text-sm hover:bg-accent">
            <ClipboardIcon className="h-5 w-5 mr-2" /> Engagement Statistics
          </Link>
        </div>

        
        {/* Appearance Customization */}
        <div className="mt-4">
          <h3 className="text-sm font-bold pl-2">Appearance Customization</h3>
          <Link href={`/dashboard/${userId}/appearance`} className={`flex items-center py-2 text-sm hover:bg-accent ${activeMenu === 'appearance' ? 'bg-accent' : ''}`}>
            <EyeIcon className="h-5 w-5 mr-2" /> Theme Settings
          </Link>
          <Link href={`/dashboard/${userId}/appearance/layout`} className="flex items-center py-2 text-sm hover:bg-accent">
            <ServerIcon className="h-5 w-5 mr-2" /> Layout Customization
          </Link>
        </div>

        {/* Behavior Customization */}
        <div className="mt-4">
          <h3 className="text-sm font-bold pl-2">Behavior Customization</h3>
          <Link href={`/dashboard/${userId}/training`} className={`flex items-center py-2 text-sm hover:bg-accent ${activeMenu === 'training' ? 'bg-accent' : ''}`}>
            <BookOpenIcon className="h-5 w-5 mr-2" /> Training Models
          </Link>
          <Link href={`/dashboard/${userId}/training/responses`} className="flex items-center py-2 text-sm hover:bg-accent">
            <AcademicCapIcon className="h-5 w-5 mr-2" /> Automated Responses Setup
          </Link>
          <Link href={`/dashboard/${userId}/training/behavior`} className="flex items-center py-2 text-sm hover:bg-accent">
            <CogIcon className="h-5 w-5 mr-2" /> Chatbot Behavior Settings
          </Link>
        </div>

        {/* Knowledge Library */}
        <div className="mt-4">
          <h3 className="text-sm font-bold pl-2">Knowledge Library</h3>
          <Link href={`/dashboard/${userId}/knowledge/industry`} className="flex items-center py-2 text-sm hover:bg-accent">
            <WrenchIcon className="h-5 w-5 mr-2" /> Industry Knowledge
          </Link>
          <Link href={`/dashboard/${userId}/knowledge/company`} className="flex items-center py-2 text-sm hover:bg-accent">
            <WrenchIcon className="h-5 w-5 mr-2" /> Company Information Knowledge
          </Link>
          <Link href={`/dashboard/${userId}/knowledge/products`} className="flex items-center py-2 text-sm hover:bg-accent">
            <WrenchIcon className="h-5 w-5 mr-2" /> Products and Services Knowledge
          </Link>
          <Link href={`/dashboard/${userId}/knowledge/case-studies`} className="flex items-center py-2 text-sm hover:bg-accent">
            <DocumentTextIcon className="h-5 w-5 mr-2" /> Case Studies
          </Link>
        </div>

        {/* Billing and Usage */}
        <div className="mt-4">
          <h3 className="text-sm font-bold pl-2">Billing and Usage</h3>
          <Link href={`/dashboard/${userId}/usage`} className={`flex items-center py-2 text-sm hover:bg-accent ${activeMenu === 'usage' ? 'bg-accent' : ''}`}>
            <CogIcon className="h-5 w-5 mr-2" /> Usage Reports
          </Link>
          <Link href={`/dashboard/${userId}/billing/history`} className="flex items-center py-2 text-sm hover:bg-accent">
            <DocumentTextIcon className="h-5 w-5 mr-2" /> Billing History
          </Link>
          <Link href={`/dashboard/${userId}/billing/plans`} className="flex items-center py-2 text-sm hover:bg-accent">
            <DocumentTextIcon className="h-5 w-5 mr-2" /> Subscription Plans
          </Link>
        </div>

        {/* Settings */}
        <div className="mt-4">
          <h3 className="text-sm font-bold pl-2">Settings</h3>
          <Link href={`/dashboard/${userId}/settings/general`} className="flex items-center py-2 text-sm hover:bg-accent">
            <CogIcon className="h-5 w-5 mr-2" /> General Settings
          </Link>
          <Link href={`/dashboard/${userId}/settings/security`} className="flex items-center py-2 text-sm hover:bg-accent">
            <CogIcon className="h-5 w-5 mr-2" /> Security Settings
          </Link>
          <Link href={`/dashboard/${userId}/settings/users`} className="flex items-center py-2 text-sm hover:bg-accent">
            <CogIcon className="h-5 w-5 mr-2" /> User Management
          </Link>
          <Link href={`/dashboard/${userId}/maintenance`} className={`flex items-center py-2 text-sm hover:bg-accent ${activeMenu === 'maintenance' ? 'bg-accent' : ''}`}>
            <WrenchIcon className="h-5 w-5 mr-2" /> Maintenance
          </Link>
        </div>

      </div>
      <div className="mt-auto p-4 border-t border-border">
        <LogoutButton></LogoutButton>
      </div>
    </div>
  );
};

export default NavigationSidebar;
