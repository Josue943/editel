import { Phone, Mail, MapPin, CircleUser } from "lucide-react";

const Footer = () => (
  <div className="bg-black text p-5">
    <div className="flex flex-col md:flex-row px-5 text-white justify-center mb-3">
      <div className="flex flex-col px-5 my-3 md:my-0">
        <strong className="mb-1 text-center text-amber-600">CONTACTOS</strong>
        <div>
          <h4 className="flex items-center md:justify-normal justify-center">
            <CircleUser height={16} style={{ marginBottom: 1 }} />
            <span className="ml-1">Andrea González</span>
          </h4>

          <h4 className="flex items-center md:justify-normal justify-center">
            <Phone height={16} style={{ marginBottom: 1 }} />
            <span className="ml-1">+81 2769 9019</span>
          </h4>
        </div>
        <div className="mt-2">
          <h4 className="flex items-center md:justify-normal justify-center">
            <CircleUser height={16} style={{ marginBottom: 1 }} />
            <span className="ml-1">José González</span>
          </h4>

          <h4 className="flex items-center md:justify-normal justify-center">
            <Phone height={16} style={{ marginBottom: 1 }} />
            <span className="ml-1">+81 2333 2525</span>
          </h4>
        </div>

        <div className="mt-2">
          <h4 className="flex items-center md:justify-normal justify-center">
            <CircleUser height={16} style={{ marginBottom: 1 }} />
            <span className="ml-1">Fernando González</span>
          </h4>
          <h4 className="flex items-center md:justify-normal justify-center">
            <Phone height={16} style={{ marginBottom: 1 }} />
            <span className="ml-1">+81 1904 9112</span>
          </h4>
        </div>
      </div>
      <div className="flex flex-col px-5 my-3 md:my-0">
        <strong className="mb-1 text-amber-600 text-center">EMAIL</strong>
        <h4 className="flex items-center md:justify-normal justify-center">
          <Mail height={16} style={{ marginBottom: 1 }} />
          <span className="ml-1">Editel_07@hotmail.com</span>
        </h4>
      </div>

      <div className="flex flex-col px-5 my-3 md:my-0">
        <strong className="mb-1 text-amber-600 text-center">UBICACION</strong>
        <h4 className="flex items-center md:justify-normal justify-center">
          <MapPin height={16} style={{ marginBottom: 1 }} />
          <span className="ml-1">Monterrey, Nuevo León</span>
        </h4>
      </div>
    </div>
    <p className="text-center text-white text-base mt-3 md:mt-8">
      Copyright {new Date().getFullYear()} © Grupo Editel
    </p>
  </div>
);

export default Footer;
