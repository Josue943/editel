"use client";
import ReactWhatsappButton from "react-whatsapp-button";
import Cards from "@/components/cards";

import Clients from "@/components/clients";
import Mision from "@/components/mision";
import Test from "@/components/test";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Constructora Civil MX | Construcción Profesional en México |
          Constructora Monterrey
        </title>
        <meta
          name="description"
          content="Constructora Civil MX ofrece servicios de construcción de alta calidad en México. Especialistas en obra civil, residencial y comercial. Contáctanos hoy."
        />
        <meta
          name="keywords"
          content="constructora, construcción, México, obra civil, edificios, casas, constructoras en México"
        />
        <meta name="author" content="Editel" />
      </Head>
      <Test />
      <Mision />
      <Cards />
      <Clients />
      <ReactWhatsappButton countryCode="52" phoneNumber="8127699019" animated />
    </>
  );
}
