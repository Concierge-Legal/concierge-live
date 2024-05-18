import * as React from "react";
import Link from "next/link";

const links = ["Home", "Chat", "About", "Contact Us"];

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center px-16 py-20 bg-background text-foreground leading-relaxed max-md:px-5">
      <div className="text-4xl font-bold text-accent">
        Concierge
      </div>
      <nav className="flex gap-5 justify-center mt-8 text-base font-semibold max-md:flex-wrap">
        {links.map((link, index) => (
          <Link href={`/${link}`} key={index} className="hover:text-accent transition-colors cursor-pointer">{link}</Link>
        ))}
      </nav>
      <hr className="my-10 w-full border-t border-gray-300" />
      <div className="w-full flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
        <div>© 2024 Concierge. All rights reserved.</div>
        <div className="flex gap-5">
          <Link href="/privacy" className="hover:underline text-accent cursor-pointer">Privacy Policy</Link>
          <Link href="/tos" className="hover:underline text-accent cursor-pointer">Terms of Service</Link>
          <Link href="/cookies" className="hover:underline text-accent cursor-pointer">Cookie Settings</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
