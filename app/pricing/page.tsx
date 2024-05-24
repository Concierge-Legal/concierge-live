import Image from "next/image";
import React from "react";
import ContactForm from "@/components/contactSales";
import NavBar from "@/components/navBar";

export default function Pricing() {
 

  return (
    <main>
    <NavBar></NavBar>
    <div className="flex flex-col">
 
      
    <h1>Contact Us for Pricing</h1>
    <ContactForm />
  </div>

  </main>
     
  );
}


