import Image from "next/image";
import MissionImg from "../../public/images/mission.jpg";

const Mision = () => {
  return (
    <div className="bg-white text-black lg:p-4 md:p-2 sm:my-10 my-2">
      <div className="custom-container flex flex-col lg:flex-row xl:gap-8 gap-5 lg:gap-5 xl:py-5 py-2">
        <div className="flex-1 flex flex-col justify-center">
          <h4 className="sm:text-5xl text-3xl text-center font-bold sm:mb-6 mb-3 ">
            Grupo Editel
          </h4>
          <p className="sm:mb-5 mb-3 text-base">
            Somos una empresa innovadora de origen familiar, fundada en 1974 por
            el Ing. Jose González. Especializada en Telefonía, Construcción,
            Supervisión de obras y Automatización Industrial.
          </p>
          <p className="sm:mb-5 mb-3  text-base">
            A través de los años y con la experiencia, Grupo Editel se ha ganado
            un nombre que nos distingue como una compañía altamente reconocida
            por sus proyectos realizados bajo una metodología de altos
            estándares de construcción.
          </p>
          <p className="text-base">
            Nuestra importante cartera de clientes se ha forjado producto de la
            eficiencia de los servicios que la constructora provee. Tomando
            siempre en cuenta al cliente como prioridad y apoyados por un equipo
            humano competente, maquinarias y equipos especializados, hemos
            logrado proyectos que generan valor y desarrollo en toda la
            Republica Mexicana.
          </p>
        </div>
        <div className="flex-1  h-60 sm:h-120 " style={{ overflow: "hidden" }}>
          <Image src={MissionImg} alt="mission" style={{ height: "100%" }} />
        </div>
      </div>
    </div>
  );
};

export default Mision;
