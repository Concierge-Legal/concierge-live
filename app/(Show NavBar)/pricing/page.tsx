import Image from "next/image";
import React from "react";
import ContactForm from "@/components/contactSales";
import NavBar from "@/components/navBar";
import Footer from "@/components/footer";

export default function Pricing() {
 

  return (
    <main className="min-h-screen flex flex-col">
    <NavBar />
    <div className="flex flex-col items-center justify-center flex-grow bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Please contact us for pricing!</h1>
      <ContactForm />
    </div>
    <Footer />
  </main>
  );
}


