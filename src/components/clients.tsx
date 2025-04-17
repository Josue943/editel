"use client";
import Image from "next/image";
import Coppel from "../../public/logos/coppel.png";
import Pemex from "../../public/logos/pemex.png";
import ContactForm from "./contactForm";
import { useState } from "react";

const imageProps = {
  alt: "sirve",
  width: 50,
  className: "mr-3 carousel-item",
};

const Clients = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const onClick = () => setShowModal(true);
  const onCloseModal = () => setShowModal(false);

  return (
    <div className="custom-container pb-8">
      <h4 className="text-5xl text-center font-bold mt-5 mb-7">
        Nuestros Clientes
      </h4>
      <div className="carousel-container" style={{ height: 70 }}>
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
      <div className="flex justify-center mt-10">
        <button
          className="bg-amber-600 p-2 rounded-md cursor-pointer"
          style={{ width: 130 }}
          onClick={onClick}
        >
          Contactanos
        </button>
      </div>
      {showModal && <ContactForm onClose={onCloseModal} />}
    </div>
  );
};

export default Clients;

const cardDetails: any = {
  0: {
    imgUrl: Coppel,
    title: "Text 1",
  },

  1: {
    imgUrl: Pemex,
    title: "Text 2",
  },

  2: {
    imgUrl: Coppel,
    title: "Text 3",
  },

  3: {
    imgUrl: Pemex,
    title: "Text 4",
  },

  4: {
    imgUrl: Coppel,
    title: "Text 5",
  },

  5: {
    imgUrl: Pemex,
    title: "Text 6",
  },

  6: {
    imgUrl: Coppel,
    title: "Text 7",
  },
};
