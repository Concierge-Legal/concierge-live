import React, { ReactNode } from 'react';
import Link from 'next/link';

interface StyledLinkProps {
  href: string;
  children: ReactNode;  // Defines children to accept any valid React node
}

const StyledLink: React.FC<StyledLinkProps> = ({ href, children }) => {
  return (
    <li>
      <Link href={href} className="text-black no-underline hover:underline hover:underline-offset-4 hover:decoration-green-500 transition duration-300 ease-in-out">
          {children}
      </Link>
    </li>
  );
};

export default StyledLink;
