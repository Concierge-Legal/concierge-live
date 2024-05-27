"use client";
import React, { useState, useEffect } from "react";
import { DashboardButton } from "./imported/AuthButton";
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
  navigationMenuTriggerStyle,
} from "@/components/ui/navigationMenu";
import { cn } from "@/lib/utils/cn";

const featureComponents: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: "Industry Knowledge",
    href: "/chatbotFeatures#industryKnowledge",
    description:
      "Concierge understands everything about your specific industry.",
  },
  {
    title: "Product Knowledge",
    href: "/chatbotFeatures#productKnowledge",
    description:
      "Concierge can connect users directly with all of your products and services.",
  },
  {
    title: "Company Knowledge",
    href: "/chatbotFeatures#companyKnowledge",
    description:
      "Concierge understands deeply about your company, and can help your users understand too.",
  },
  {
    title: "Legal Information",
    href: "/chatbotFeatures#legalInformation",
    description:
      "Integration with Ask Abe for revolultionary legal information requests.",
  },
  {
    title: "Direct Integration on Your Site",
    href: "/chatbotFeatures#directIntegration",
    description:
      "We can directly integrate Concierge seamlessly onto your existing website.",
  },
];

const NavBar = () => {
  return (
    <header
      className={`fixed top-0 left-0 w-full flex flex-col justify-center px-16 py-4 text-base bg-white leading-6 border-b border-solid z-50 max-md:px-5`}
    >
      <div className="flex gap-5 justify-between w-full align-bottom max-md:flex-wrap max-md:mr-1 max-md:max-w-full">
        <Link href="/">
          <Image
            src={"/logo/blacklogo.png"}
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
                        href="/chatbotFeatures"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Concierge Chat Features
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground"></p>
                        <p className="text-sm leading-tight text-muted-foreground"></p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem
                    href="/dashboardFeatures#intro"
                    title="Concierge Knows"
                  ></ListItem>
                  <ListItem
                    href="/dashboardFeatures#analytics"
                    title="Legal Library"
                  >
                    Powered by Ask Abe
                  </ListItem>
                  <ListItem
                    href="/dashboardFeatures#appearance"
                    title="Integrate"
                  >
                    Seamlessly intergrates with your existing website.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* <NavigationMenuItem>
              <NavigationMenuTrigger>Features</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {featureComponents.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem> */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Dashboard Features</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/dashboardFeatures"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Admin Dashboard
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground"></p>
                        <p className="text-sm leading-tight text-muted-foreground"></p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem
                    href="/dashboardFeatures#intro"
                    title="Introduction"
                  >
                    Control your knowledge hub.
                  </ListItem>
                  <ListItem
                    href="/dashboardFeatures#analytics"
                    title="Analytics"
                  >
                    Get in depth analytics on everything you need.
                  </ListItem>
                  <ListItem
                    href="/dashboardFeatures#appearance"
                    title="Customize Appearance"
                  >
                    Customize the appearance of your concierge instance.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/chat" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Demo
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/pricing" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Pricing
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/documentation" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Documentation
                </NavigationMenuLink>
              </Link>
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
