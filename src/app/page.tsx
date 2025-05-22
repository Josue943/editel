"use client";
import ReactWhatsappButton from "react-whatsapp-button";
import Cards from "@/components/cards";

import Clients from "@/components/clients";
import Mision from "@/components/mision";
import Test from "@/components/test";

export default function Home() {
  return (
    <>
      <Test />
      <Mision />
      <Cards />
      <Clients />
      <ReactWhatsappButton countryCode="52" phoneNumber="8127699019" animated />
    </>
  );
}
