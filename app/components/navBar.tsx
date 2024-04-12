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



    return (
        <div>
            {isDesktopOrLaptop &&
                <nav className="justify-center items-center bg-white flex flex-col px-10 border-b border-solid border-purple-300">
                    <div className="justify-between items-stretch flex w-full max-w-full gap-5 my-3 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                        <div className="flex justify-left items-center font-imfell font-bold text-purple-700 text-2xl">Concierge</div>
                        <ul className="items-stretch self-center flex justify-between gap-6 my-auto">
                            <li className="text-purple-700 text-base font-raleway leading-6">
                                <Link href="/" aria-label="Link One">
                                    Home
                                </Link>
                            </li>
                            <li className="justify-between items-stretch font-raleway flex gap-1">
                                <Link href="/chat" aria-label="Link Four">
                                    <div className="text-purple-700 text-base leading-6">Concierge Chat</div>
                                </Link>
                            </li>
                        </ul>
                        <Link href="/sign-in" className="relative px-5 py-3 overflow-hidden font-medium text-purple-500 bg-white border border-purple-300 rounded-lg shadow-inner group hover:bg-purple-50">
                            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-purple-500 group-hover:w-full ease"></span>
                            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-purple-500 group-hover:w-full ease"></span>
                            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-purple-500 group-hover:h-full ease"></span>
                            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-purple-500 group-hover:h-full ease"></span>
                            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-purple-700 opacity-0 group-hover:opacity-100"></span>
                            <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Sign In</span>
                        </Link>
                    </div>
                </nav>
            }

            {isMobile &&
                <nav className="relative w-full flex justify-between p-3 items-center bg-white px-6 border-b border-solid border-purple-300">
                    <div className="flex justify-left items-center font-imfell font-bold text-purple-700 text-2xl">Concierge</div>
                    <HiMenuAlt3 onClick={handleNav} className={`z-20 cursor-pointer ${nav ? 'text-white' : 'text-purple-700'}`} size={25} />
                    <div className={nav ? 'ease-in duration-300 fixed text-gray-300 left-0 top-0 w-full h-screen bg-purple-700/90 px-2 py-2 flex-col z-10' : 'absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10'}>
                        <ul className="flex flex-col w-full h-full items-center justify-center">
                            <li className="font-bold text-2xl pb-6 pr-6 pl-6" onClick={handleNav2}>
                                <Link href="/" aria-label="Link One">
                                    Home
                                </Link>
                            </li>
                            <li className="justify-between items-stretch font-raleway flex gap-1" onClick={handleNav2}>
                                <Link href="/chat" aria-label="Link Four">
                                    <div className="font-bold text-2xl p-6">Concierge Chat</div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            }
        </div>
    );
};

export default NavBar;
