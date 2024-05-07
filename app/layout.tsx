import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navBar";

const inter = Inter({ subsets: ["latin"] });
const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  title: "Concierge",
  description: "TODO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <NavBar />
        {/* Wrapper div for content, adding top padding */}
        <div className="flex-grow pt-16"> {/* Update pt-16 to the height of your NavBar */}
          {children}
        </div>
        {/* <PageFooter /> */}
      </body>
    </html>
  );
}
