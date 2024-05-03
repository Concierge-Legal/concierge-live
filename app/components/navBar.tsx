import React from 'react';
import AuthButton from './imported/AuthButton';
import StyledLink from './StyledLink';  // Make sure the import path is correct

const NavBar = () => {
    return (
        <div className="w-full">
            <nav className="fixed top-0 left-0 right-0 z-50 bg-primary shadow-md">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center">
                        <div className="text-lg font-semibold text-secondary">Concierge</div>
                    </div>
                    <ul className="flex items-center space-x-8">
                        <StyledLink href="/">Home</StyledLink>
                        <StyledLink href="/about">About</StyledLink>
                        <StyledLink href="/chat">Concierge Chat</StyledLink>
                        <StyledLink href="/network">Network</StyledLink>
                    </ul>
                    <AuthButton />
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
