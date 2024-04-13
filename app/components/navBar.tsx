"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import { HiMenuAlt3 } from 'react-icons/hi';
import Image from 'next/image';


const NavBar: React.FC = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const showDropdown = () => setIsDropdownOpen(true);
    const hideDropdown = () => setIsDropdownOpen(false);

    const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 });
    const isMobile = useMediaQuery({ maxWidth: 1224 });
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
        if (!nav) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'scroll';
        }
    };
    const handleNav2 = () => {
        setNav(false);
    };
// stupid little comment



    return (
        <div>
            <nav className="justify-center items-center bg-white flex flex-col px-10 border-b border-solid border-[#11A688]">
                <div className="justify-between items-stretch flex w-full max-w-full gap-5 my-3">
                    <div className="flex justify-left items-center font-imfell font-bold text-[#0A5F4E] text-2xl">Concierge</div>
                    <ul className="items-stretch self-center flex justify-between gap-6 my-auto">
                        <li className="text-[#0A5F4E] text-base font-raleway leading-6">
                            <Link href="/" aria-label="Link One">
                                Home
                            </Link>
                        </li>
                        <li className="justify-between items-stretch font-raleway flex gap-1">
                            <Link href="/chat" aria-label="Link Four">
                                <div className="text-[#0A5F4E] text-base leading-6">Concierge Chat</div>
                            </Link>
                        </li>
                    </ul>
                    <Link href="/sign-in" className="relative px-5 py-3 overflow-hidden font-medium text-[#0A5F4E] bg-white border border-[#11A688] rounded-lg shadow-inner group hover:bg-[#11A688]">
                        <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-[#0A5F4E] group-hover:w-full ease"></span>
                        <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-[#0A5F4E] group-hover:w-full ease"></span>
                        <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#0A5F4E] group-hover:h-full ease"></span>
                        <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#0A5F4E] group-hover:h-full ease"></span>
                        <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-cyan-800 opacity-0 group-hover:opacity-100"></span>
                        <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Sign In</span>
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
