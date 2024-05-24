import Image from "next/image";
import React from "react";
import ContactForm from "@/components/contactSales";
import NavBar from "@/components/navBar";

export function Pricing() {
 

  return (
    <main>

    <div className="flex flex-col">
 
      
    <h1>Contact Us for Pricing</h1>
    <ContactForm />
  </div>

  </main>
     
  );
}

export default Pricing;
