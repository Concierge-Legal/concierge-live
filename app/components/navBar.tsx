import React, { useState } from 'react';
import Link from 'next/link';
import AuthButton from './imported/AuthButton';


const NavBar: React.FC = () => {

    return (
        <div>
            <nav className="justify-center items-center bg-gradient-to-b from-[#081209] to-[#0E2F2B] flex flex-col px-10 border-b border-solid border-[#081209]">
                <div className="justify-between items-stretch flex w-full max-w-full gap-5 my-3">
                    <div className="flex justify-left items-center font-imfell font-bold text-[#F8FDFD] text-2xl">Concierge</div>
                    <ul className="items-stretch self-center flex justify-between gap-6 my-auto">
                        <li className="text-[#F8FDFD] text-base font-raleway leading-6">
                            <Link href="/" aria-label="Link One">
                                Home
                            </Link>
                        </li>
                        <li className="justify-between items-stretch font-raleway flex gap-1">
                            <Link href="/chat" aria-label="Link Four">
                                <div className="text-[#F8FDFD] text-base leading-6">Concierge Chat</div>
                            </Link>
                        </li>
                    </ul>
                    <AuthButton></AuthButton>
                    {/* <Link href="/login" className="relative px-5 py-3 overflow-hidden font-medium text-[#081209] bg-[#F8FDFD] border border-[#11A688] rounded-lg shadow-inner group hover:bg-[#11A688]">
                        <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-[#081209] group-hover:w-full ease"></span>
                        <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-[#081209] group-hover:w-full ease"></span>
                        <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#081209] group-hover:h-full ease"></span>
                        <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#081209] group-hover:h-full ease"></span>
                        <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-cyan-800 opacity-0 group-hover:opacity-100"></span>
                        <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Login</span>
                    </Link> */}
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
