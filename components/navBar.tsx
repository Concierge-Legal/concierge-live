"use client";
import React from "react";
import { DashboardButton } from "./ui/authButtons/AuthButton";
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
      "Integration with Ask Abe for revolutionary legal information requests.",
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
    <header className={`fixed top-0 left-0 w-full flex items-center justify-between px-8 py-2 text-base bg-white border-b border-solid z-50`}>
      <Link href="/">
        <Image
          src={"/logo/blacklogo.png"}
          alt="Logo"
          width={50}
          height={50}
        />
      </Link>
      <NavigationMenu className="flex-1">
        <NavigationMenuList className="flex justify-center pl-16 align-bottom">
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
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/dashboardFeatures#intro" title="Concierge Knows"></ListItem>
                <ListItem href="/dashboardFeatures#analytics" title="Legal Library">
                  Powered by Ask Abe
                </ListItem>
                <ListItem href="/dashboardFeatures#appearance" title="Integrate">
                  Seamlessly integrates with your existing website.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
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
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/dashboardFeatures#intro" title="Introduction">
                  Control your knowledge hub.
                </ListItem>
                <ListItem href="/dashboardFeatures#analytics" title="Analytics">
                  Get in-depth analytics on everything you need.
                </ListItem>
                <ListItem href="/dashboardFeatures#appearance" title="Customize Appearance">
                  Customize the appearance of your concierge instance.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/demo" legacyBehavior passHref>
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
      <div className="whitespace-nowrap">
        <DashboardButton />
      </div>
    </header>
  );
};

export default NavBar;

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
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
  }
);
ListItem.displayName = "ListItem";
