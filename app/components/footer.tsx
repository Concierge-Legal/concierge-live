import * as React from "react";

interface LinkProps {
  children: React.ReactNode;
}

const Link: React.FC<LinkProps> = ({ children }) => {
  return <div className="underline">{children}</div>;
};

const links = ["Home", "Concierge Chat", "About Us", "Contact Us"];

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col px-16 py-20 bg-[#081209] leading-[150%] max-md:px-5">
          <div className="w-full flex justify-center py-10">
        <div className="text-4xl font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-[#2B8C81] via-[#64CFC3] to-[#D8E8E3]">
          Concierge
        </div>
      </div>
      <nav className="flex gap-5 justify-between self-center mt-8 text-base font-semibold text-white max-md:flex-wrap">
        {links.map((link, index) => (
          <div key={index}>{link}</div>
        ))}
      </nav>
      <hr className="shrink-0 mt-20 h-px bg-black border border-black border-solid max-md:mt-10 max-md:max-w-full" />
      <div className="flex gap-5 justify-between mt-8 w-full text-sm max-md:flex-wrap max-md:max-w-full">
        <div className="text-white">© 2024 Concierge. All rights reserved.</div>
        <div className="flex gap-5 justify-between text-white">
          <Link>Privacy Policy</Link>
          <Link>Terms of Service</Link>
          <Link>Cookies Settings</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;