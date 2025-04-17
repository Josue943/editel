const Cards = () => {
  return (
    <div className="py-6" style={{ background: "#F6F6F6" }}>
      <div className="custom-container p-3">
        <h1 className="text-center text-black text-4xl mb-6">
          Nuestros <span style={{ color: "#C2373C" }}>Servicios</span>
        </h1>
        <div className="flex justify-between">
          {items.map(({ title, description }, index) => (
            <div key={index} className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front p-3">
                  <p className="text-[20px] text-white font-bold uppercase">
                    {title}
                  </p>
                </div>
                <div className="text-[17px] flip-card-back p-3">
                  <p>{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;

const items = [
  {
    title: "Construccion y desarrollo de infractucturas",
    description:
      "Edificacion de naves industriales, hoteles, residencias y tiendas de conveniencia",
  },
  {
    title: "Construccion y desarrollo de infractucturas",
    description:
      "Edificacion de naves industriales, hoteles, residencias y tiendas de conveniencia",
  },
  {
    title: "Construccion y desarrollo de infractucturas",
    description:
      "Edificacion de naves industriales, hoteles, residencias y tiendas de conveniencia",
  },
  {
    title: "Construccion y desarrollo de infractucturas",
    description:
      "Edificacion de naves industriales, hoteles, residencias y tiendas de conveniencia",
  },
];
