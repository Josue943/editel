"use client";
import Image from "next/image";
import ContactForm from "./contactForm";
import { useState } from "react";

import Pemex from "../../public/logos/pemex.png";
import Axtel from "../../public/logos/axtel.png";
import Cfe from "../../public/logos/cfe.png";
import Harmak from "../../public/logos/harmak.png";
import Movistar from "../../public/logos/movistar.png";
import Multimedios from "../../public/logos/multimedios.png";
import Naturgy from "../../public/logos/naturgy.png";
import Oxxo from "../../public/logos/oxxo.png";
import Super7 from "../../public/logos/super7.png";
import Vialux from "../../public/logos/vialux.png";
import One from "../../public/logos/one.png";
import Telcel from "../../public/logos/telcel.png";

const Clients = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const onClick = () => setShowModal(true);
  const onCloseModal = () => setShowModal(false);

  return (
    <div id="clients" className="custom-container sm:py-15 py-10">
      <h4 className="text-2xl sm:text-4xl text-black text-center font-bold uppercase">
        Nuestros Clientes
      </h4>
      <div className="carousel-container  my-8 sm:my-18" style={{ height: 70 }}>
        <div className="carousel-track">
          {Object.keys(cardDetails).map((detailKey, index) => {
            return (
              <div className="carousel-card" key={index}>
                <Image
                  src={cardDetails[detailKey].imgUrl}
                  alt={cardDetails[detailKey].title}
                />
              </div>
            );
          })}
          {Object.keys(cardDetails).map((detailKey, index) => {
            return (
              <div className="carousel-card" key={index}>
                <Image
                  src={cardDetails[detailKey].imgUrl}
                  alt={cardDetails[detailKey].title}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center">
        <button
          className="bg-amber-600 text-white sm:p-3 p-2 w-full sm:w-90 text-lg  sm:text-xl  rounded-md cursor-pointer hover:bg-amber-700"
          onClick={onClick}
        >
          Contáctanos
        </button>
      </div>
      {showModal && <ContactForm onClose={onCloseModal} />}
    </div>
  );
};

export default Clients;

const cardDetails = {
  1: {
    imgUrl: Pemex,
    title: "Text 2",
  },

  2: {
    imgUrl: Axtel,
    title: "Text 3",
  },

  3: {
    imgUrl: Cfe,
    title: "Text 4",
  },

  4: {
    imgUrl: Harmak,
    title: "Text 5",
  },

  5: {
    imgUrl: Movistar,
    title: "Text 6",
  },

  6: {
    imgUrl: Multimedios,
    title: "Text 7",
  },
  7: {
    imgUrl: Naturgy,
    title: "Text 7",
  },
  9: {
    imgUrl: Oxxo,
    title: "Text 7",
  },
  10: {
    imgUrl: Super7,
    title: "Text 7",
  },
  11: {
    imgUrl: Vialux,
    title: "Text 7",
  },
  12: {
    imgUrl: One,
    title: "Text 7",
  },
  13: {
    imgUrl: Telcel,
    title: "Text 7",
  },
};
