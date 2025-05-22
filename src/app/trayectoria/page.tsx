"use client";
import Image from "next/image";
import ReactWhatsappButton from "react-whatsapp-button";

import Img from "../../../public/trajectory.png";

const Trajectory = () => {
  /*   useEffect(() => {
    window.scroll(0, 0);
  }, []); */

  return (
    <div className="flex justify-center my-5 px-2">
      <div>
        <Image
          src={Img}
          alt="trajectory"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <ReactWhatsappButton countryCode="52" phoneNumber="8127699019" animated />
    </div>
  );
};

export default Trajectory;
