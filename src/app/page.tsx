"use client";
import ReactWhatsappButton from "react-whatsapp-button";

import Cards from "@/components/cards";
import Carousel from "@/components/carousel";
import Clients from "@/components/clients";
import Mision from "@/components/mision";

export default function Home() {
  return (
    <div style={{ minHeight: "90vh" }}>
      <Carousel />
      <Mision />
      <Cards />
      <Clients />
      <ReactWhatsappButton countryCode="52" phoneNumber="8127699019" animated />
    </div>
  );
}
