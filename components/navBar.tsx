"use client";
import React, { useState, useEffect } from "react";
import { DashboardButton } from "./imported/AuthButton";
import StyledLink from "./StyledLink"; // Make sure the import path is correct
import Link from "next/link"; // Import the Link component from the appropriate library
import Image from "next/image"; // Import the Image component from the appropriate library
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigationMenu";
import { cn } from "@/utils/cn";



const NavBar = () => {
  return (
    <header className={`fixed top-0 left-0 w-full flex flex-col justify-center px-16 py-4 text-base bg-secondary leading-6 border-b border-solid z-50 max-md:px-5`}>
      <div className="flex gap-5 justify-between w-full align-bottom max-md:flex-wrap max-md:mr-1 max-md:max-w-full">
        <Link href="/">
          <Image
            src={'/blacklogo.png'}
            // src={isScrolled ? '/blacklogo.png' : '/logo.png'}
            alt="Logo"
            width={50}
            height={50}
          />
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Features</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >

                        <div className="mb-2 mt-4 text-lg font-medium">
                          Concierge is cool
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Many features that makes you more money, cool text explanation here.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/features#industryExpertise" title="Industry Expertise">
                    Understands the nuances and specifics of your industry.

                  </ListItem>
                  <ListItem href="/features#websiteUX" title="Deep UX Integration">
                    Deeply integrates with your existing UI and UX.
                  </ListItem>
                  <ListItem href="/features#userAid" title="Aid Your Users">
                    Help Your Users Get to Know You
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <StyledLink href="/chat">Demo</StyledLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <StyledLink href="/pricing">Pricing</StyledLink>
            </NavigationMenuItem>
            

          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex gap-4 justify-center whitespace-nowrap">
          <DashboardButton />
        </div>

      </div>
    </header>

  );
};

export default NavBar;

// ShadCN shit
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";