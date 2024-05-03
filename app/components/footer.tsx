import * as React from "react";
import Link from "next/link";

interface LinkProps {
  children: React.ReactNode;
}



const links = ["Home", "Chat", "About", "Contact Us"];

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col px-16 py-20 bg-primary leading-[150%] max-md:px-5 text-secondary">
      <div className="w-full flex justify-center py-10">
        <div className="text-4xl font-bold text-accent">
          Concierge
        </div>
      </div>
      <nav className="flex gap-5 justify-center self-center mt-8 text-base font-semibold max-md:flex-wrap">
        {links.map((link, index) => (
          <Link href={`/${link}`} key={index} className="hover:text-accent transition-colors cursor-pointer">{link}</Link>
        ))}
      </nav>
      <hr className="shrink-0 mt-20 h-px bg-black border-none max-md:mt-10 max-md:max-w-full" />
      <div className="flex justify-between mt-8 w-full text-sm max-md:flex-wrap max-md:max-w-full">
        <div>© 2024 Concierge. All rights reserved.</div>
        <div className="flex gap-5">
          <Link href="/privacy" className="underline text-accent cursor-pointer">Privacy Policy</Link>
          <Link href="/tos"className="underline text-accent cursor-pointer" >Terms of Service</Link>
          <Link href = "/cookies" className="underline text-accent cursor-pointer">Cookies Settings</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
