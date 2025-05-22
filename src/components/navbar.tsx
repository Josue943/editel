"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Menu } from "lucide-react";
import Image from "next/image";

import Logo from "../../public/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(!open);

  const pathname = usePathname();
  const router = useRouter();

  const section = useSearchParams().get("section");

  const handleScroll = (value: string, path: string) => {
    if (open) handleOpen();
    const query = `?section=${value}`;
    if (path !== pathname) {
      return router.push(`${path}${path === "/" ? query : ""}`);
    }
    onScroll(value);
  };

  const onScroll = (value: string) => {
    const section = document.querySelector(`#${value}`);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    if (section && pathname === "/") onScroll(section);
  }, [pathname]);

  return (
    <nav
      className="flex justify-center sticky top-0 z-10 bg-white"
      style={{ height: 75 }}
    >
      <div className="custom-container flex justify-between items-center py-3 ">
        <Image src={Logo} alt="logo" style={{ width: 100, height: 50 }} />
        <div className="sm:block hidden">
          <ul className="flex justify-end w-full text-black font-semibold">
            {items.map(({ label, href, path }) => (
              <li
                key={label}
                onClick={() => handleScroll(href, path)}
                className="w-24 m-3  cursor-pointer"
              >
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
            <div
              style={{ top: 75 }}
              className="absolute left-0 text-center z-10 w-full bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden"
            >
              {items.map(({ label, href, path }) => (
                <li
                  key={label}
                  onClick={() => handleScroll(href, path)}
                  className="py-2 cursor-pointer text-black border-b-black list-none border-b"
                >
                  {label}
                </li>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const items = [
  { label: "Inicio", href: "home", path: "/" },
  { label: "Servicios", href: "services", path: "/" },
  { label: "Clientes", href: "clients", path: "/" },
  { label: "Trayectoria", href: "trajectory", path: "/trayectoria" },
];
