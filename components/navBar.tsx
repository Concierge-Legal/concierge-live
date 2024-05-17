import React from "react";
import AuthButton from "./imported/AuthButton";
import StyledLink from "./StyledLink"; // Make sure the import path is correct

interface ButtonProps {
  variant?: "outline" | "solid";
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = "outline", children }) => {
  const className = `justify-center px-5 py-2 border border-black border-solid ${
    variant === "solid" ? "text-white bg-black" : "text-black"
  }`;

  return <div className={className}>{children}</div>;
};

const links = [
  { href: "/", label: "Home" },
  { href: "/chat", label: "Demo" },
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
];

const NavBar = () => {
  return (
    <header className="flex flex-col justify-center px-16 py-4 text-base leading-6 bg-white border-b border-solid border-b-black max-md:px-5">
      <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:mr-1 max-md:max-w-full">
        Concierge
        <nav className="flex gap-5 justify-center max-md:flex-wrap">
          <ul className="flex gap-5 justify-between my-auto text-black">
            {links.map(({ href, label }) => (
              <ul key={label}>
                <StyledLink href={href}>{label}</StyledLink>
              </ul>
            ))}
          </ul>
          <div className="flex gap-4 justify-center whitespace-nowrap">
            <AuthButton />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
