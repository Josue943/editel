import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import image1 from "../../public/services/1.webp";
import image2 from "../../public/services/2.jpg";
import image3 from "../../public/services/3.jpg";
import image4 from "../../public/services/4.png";
import image5 from "../../public/services/5.jpg";
import image6 from "../../public/services/6.jpg";

const Cards = () => {
  const [openMenu, setOpenMenu] = useState<string[]>([]);

  const checkMenu = (title: string) => openMenu.includes(title);

  const handleMenu = (title: string) => {
    setOpenMenu((prev) => {
      if (checkMenu(title)) return prev.filter((item) => item !== title);
      return [...prev, title];
    });
  };

  return (
    <div style={{ background: "#fbfbfb" }}>
      <div
        id="services"
        className="custom-container xl:py-5 py-2"
        style={{ scrollMargin: 75 }}
      >
        <h1 className="text-center text-black sm:text-5xl text-3xl mb-8 md:mb-12">
          <span className="text-amber-600">Servicios</span>
        </h1>
        <div className="grid grid-cols-[repeat(1,minmax(0,350px))] md:grid-cols-[repeat(2,minmax(0,300px))] lg:grid-cols-[repeat(3,minmax(100px,300px))] sm:gap-y-8 gap-y-4 gap-x-10 justify-center">
          {services.map(({ title, img, items }) => {
            const customClass = openMenu.includes(title) ? "block" : "hidden";
            const Icon = openMenu.includes(title) ? ChevronUp : ChevronDown;
            return (
              <div
                key={title}
                className="text-black "
                style={{ background: "#f7f7f7" }}
              >
                <div className="flex flex-col-reverse sm:flex-col">
                  <div
                    className={`w-full ${customClass} sm:block overflow-hidden bg-red-100`}
                    style={{ height: 200 }}
                  >
                    <Image
                      src={img}
                      alt={title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "fill",
                      }}
                    />
                  </div>
                  <div className="flex justify-between items-center sm:pt-5 sm:pb-3 py-2 px-4 sm:text-center">
                    <p className="text-xl w-full text-amber-600">{title}</p>
                    <Icon
                      className="sm:hidden"
                      onClick={() => handleMenu(title)}
                    />
                  </div>
                </div>
                <div
                  className={`px-4 sm:py-0 py-3 sm:pb-3 ${customClass} sm:block`}
                >
                  <ul>
                    {items.map(({ id, description }) => (
                      <li
                        className="text-md list-inside list-disc li-fix"
                        key={id}
                      >
                        {description}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cards;

const services = [
  {
    title: "Construcción y desarrollo de infraestructuras",
    img: image1,
    items: [
      {
        id: 0,
        description:
          "Edificación de naves industriales, hoteles, residencias y tiendas de conveniencia.",
      },
      {
        id: 1,
        description:
          "Instalación de sistemas de drenaje, pavimentación y banquetas en proyectos urbanos.",
      },
    ],
  },
  {
    title: "Telecomunicaciones",
    img: image3,
    items: [
      {
        id: 0,
        description:
          "Implementación de sitios celulares y torres de telecomunicaciones.",
      },
    ],
  },
  {
    title: "Proyectos energéticos",
    img: image4,
    items: [
      { id: 0, description: "Construcción de subestaciones eléctricas." },
      { id: 1, description: "Instalación de sistemas eléctricos." },
      {
        id: 2,
        description: "Instalación de sistemas contra incendio.",
      },
    ],
  },
  {
    title: "Mantenimiento y rehabilitación",
    img: image2,
    items: [
      {
        id: 0,
        description:
          "Rehabilitación de torres de telecomunicaciones y estructuras industriales.",
      },
      {
        id: 1,
        description:
          "Mantenimiento preventivo y correctivo en proyectos de infraestructura.",
      },
    ],
  },
  {
    title: "Proyectos personalizados",
    img: image5,
    items: [
      {
        id: 0,
        description:
          "Diseño y construcción de residencias y desarrollos adaptados a necesidades específicas.",
      },
    ],
  },
  {
    title: "Automatización de procesos industriales",
    img: image6,
    items: [
      {
        id: 0,
        description:
          "Automatización de sistemas industriales, incluyendo plantas de emergencia y maquinaria.",
      },
    ],
  },
];
