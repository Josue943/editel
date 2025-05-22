import { Phone, Mail, MapPin } from "lucide-react";

const Test = () => (
  <div style={{ background: "#92122d" }}>
    <div className="custom-container py-3 text-white flex flex-col sm:flex-row items-center">
      <div className="flex mr-8 pb-3 sm:pb-0">
        <Phone className="mr-3" />
        <h3> +81 81 2333 2525</h3>
      </div>
      <div className="flex mr-8 pb-3 sm:pb-0">
        <Mail className="mr-3" />
        <h3> Editel_07@hotmail.com</h3>
      </div>
      <div className="flex">
        <MapPin className="mr-3" />
        <h3> Monterrey, Nuevo Leon</h3>
      </div>
    </div>
  </div>
);

export default Test;
