'use client';
import Link from 'next/link';
import { LogoutButton } from '../imported/AuthButton';
import { useState } from 'react';
import { HomeIcon, ChartBarIcon, CogIcon, EyeIcon, AcademicCapIcon, BookOpenIcon, WrenchIcon, DocumentTextIcon, ServerIcon, ClipboardIcon } from '@heroicons/react/24/solid';
import  AnalyticsSection  from '@/components/dashboard/sidebar/analyticsSection';
import  AppearanceSection  from '@/components/dashboard/sidebar/appearanceSection';
import  BehaviorSection  from '@/components/dashboard/sidebar/behaviorSection';
import  BillingSection  from '@/components/dashboard/sidebar/billingSection';
import  KnowledgeSection  from '@/components/dashboard/sidebar/knowledgeSection';
import  SettingsSection  from '@/components/dashboard/sidebar/settingsSection';

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
        <AnalyticsSection userId={userId} activeMenu={activeMenu} />
        <AppearanceSection userId={userId} activeMenu={activeMenu} />
        <BehaviorSection userId={userId} activeMenu={activeMenu} />
        <KnowledgeSection userId={userId} activeMenu={activeMenu} />
        <BillingSection userId={userId} activeMenu={activeMenu} />   
        <SettingsSection userId={userId} activeMenu={activeMenu} />
        {/* <div className="mt-4">
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
        </div> */}
  

      </div>
      <div className="mt-auto p-4 border-t border-border">
        <LogoutButton></LogoutButton>
      </div>
    </div>
  );
};

export default NavigationSidebar;
