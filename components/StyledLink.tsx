import React from 'react';
import Link from 'next/link';

interface StyledLinkProps {
  href: string;
  children: React.ReactNode;
  
}

const StyledLink: React.FC<StyledLinkProps> = ({ href, children}) => {
  return (
    <li>
      <Link href={href} className={`'text-black' text-lg no-underline hover:underline hover:underline-offset-4 hover:decoration-green-500 transition duration-300 ease-in-out`}>
        {children}
      </Link>
    </li>
  );
};

export default StyledLink;
