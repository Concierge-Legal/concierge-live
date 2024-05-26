import Image from "next/image";
import React from "react";
import ContactForm from "@/components/contactSales";
import NavBar from "@/components/navBar";
import Footer from "@/components/footer";

export default function Pricing() {
 

  return (
	<>
	<NavBar />
	<main className="min-h-screen flex flex-col">
	  <div className="flex flex-col items-center justify-center flex-grow mt-36">
	  <Image
            src={'/logo/blacklogo.png'}
            alt="Logo"
            width={100}
            height={100}
          />
		<h1 className="text-2xl font-bold mb-6 text-center">Please contact us for pricing!</h1>
		
		<ContactForm />
	  </div>
	  <Footer />
	</main>
  </>
  );
}


