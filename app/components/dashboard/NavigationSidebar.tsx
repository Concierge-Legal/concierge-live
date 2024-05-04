import React from 'react';
import StyledLink from '../StyledLink';

interface NavigationSidebarProps {
  openMenu: string | null;
  setOpenMenu: (menuName: string | null) => void;
}

const NavigationSidebar: React.FC<NavigationSidebarProps> = ({ openMenu, setOpenMenu }) => {
  const handleMenuClick = (menuName: string) => {
    if (openMenu === menuName) {
      setOpenMenu(null); // Close the menu if it's already open
    } else {
      setOpenMenu(menuName); // Open the clicked menu
    }
  };

  return (
    <div className="h-full w-64 bg-gray-800 text-white">
      <div className="flex flex-col p-4">
        {/* Home Section */}
        <a href="#" className="py-2 text-sm hover:bg-gray-700 cursor-pointer" onClick={() => handleMenuClick('home')}>
          Home
        </a>
        {openMenu === 'home' && (
          <div className="pl-4">
            <StyledLink href="#Overview">Overview</StyledLink>
            <StyledLink href="#Stats">Stats</StyledLink>
          </div>
        )}

        {/* Usage Section */}
        <a href="#" className="py-2 text-sm hover:bg-gray-700 cursor-pointer" onClick={() => handleMenuClick('usage')}>
          Usage
        </a>
        {openMenu === 'usage' && (
          <div className="pl-4">
            <StyledLink href="#Traffic Analysis">Traffic Analysis</StyledLink>
            <StyledLink href="#Engagement Metrics">Engagement Metrics</StyledLink>
            <StyledLink href="#Patterns">Patterns</StyledLink>
          </div>
        )}

        {/* Customization Section */}
        <a href="#" className="py-2 text-sm hover:bg-gray-700 cursor-pointer" onClick={() => handleMenuClick('customization')}>
          Customization
        </a>
        {openMenu === 'customization' && (
          <div className="pl-4">
            <StyledLink href="#UI Themes">UI Themes</StyledLink>
            <StyledLink href="#Responses">Responses</StyledLink>
            <StyledLink href="#Settings">Settings</StyledLink>
          </div>
        )}

        {/* File Management Section */}
        <a href="#" className="py-2 text-sm hover:bg-gray-700 cursor-pointer" onClick={() => handleMenuClick('fileManagement')}>
          File Management
        </a>
        {openMenu === 'fileManagement' && (
          <div className="pl-4">
            <StyledLink href="#Upload Files">Upload Files</StyledLink>
            <StyledLink href="#Manage Files">Manage Files</StyledLink>
            <StyledLink href="#Version Control">Version Control</StyledLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavigationSidebar;
