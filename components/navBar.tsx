'use client';
import React, { useState, useEffect } from "react";
import { DashboardButton } from "./imported/AuthButton";
import StyledLink from "./StyledLink"; // Make sure the import path is correct
import Link from "next/link"; // Import the Link component from the appropriate library
import Image from "next/image"; // Import the Image component from the appropriate library

const links = [
  { href: "/chat", label: "Demo" },
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
];

const NavBar = ({ isScrolled }: { isScrolled: boolean }) => {
  return (
    <header className={`fixed top-0 left-0 w-full flex flex-col justify-center px-16 py-4 text-base leading-6 border-b border-solid z-50 max-md:px-5 ${isScrolled ? 'bg-white border-b-black text-black' : 'bg-transparent border-b-transparent text-white'}`}>
    <div className="flex gap-5 justify-between w-full align-bottom max-md:flex-wrap max-md:mr-1 max-md:max-w-full">
      <Link href="/">
        <Image
          src={isScrolled ? '/blacklogo.png' : '/logo.png'}
          alt="Logo"
          width={50}
          height={50}
        />
      </Link>
      <nav className="flex gap-5 justify-center max-md:flex-wrap">
        <ul className="flex gap-5 justify-between my-auto">
          {links.map(({ href, label }) => (
            <StyledLink key={label} href={href} isScrolled={isScrolled}>
              {label}
            </StyledLink>
          ))}
        </ul>
        <div className="flex gap-4 justify-center whitespace-nowrap">
          <DashboardButton />
        </div>
      </nav>
    </div>
  </header>

          );
        };

export default NavBar;
