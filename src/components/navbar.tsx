"use client";
import { useState } from "react";
import { Menu } from "lucide-react";

import Image from "next/image";
import Logo from "../../public/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(!open);

  return (
    <nav
      className="flex justify-center sticky top-0 z-999 bg-white"
      style={{ height: 75 }}
    >
      <div className="custom-container flex justify-between items-center py-3 ">
        <Image src={Logo} alt="logo" style={{ width: 100, height: 50 }} />
        <div className="sm:block hidden">
          <ul className="flex justify-end w-full text-black font-semibold">
            {items.map(({ label }) => (
              <li key={label} className="w-24 m-3  cursor-pointer">
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="sm:hidden">
          <Menu
            onClick={handleOpen}
            className="cursor-pointer"
            color="black"
            height={30}
          />
          {open && (
            <ul
              style={{ top: 75 }}
              className="absolute left-0 text-center z-10 w-full bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-hidden"
            >
              {items.map(({ label }, index) => (
                <li
                  key={label}
                  className={`py-2 cursor-pointer text-black border-b-black ${
                    index < 2 ? "border-b" : ""
                  }`}
                >
                  {label}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const items = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/services" },
  { label: "Contacto", href: "/contact" },
];
