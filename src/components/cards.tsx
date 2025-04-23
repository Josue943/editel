const Cards = () => {
  return (
    <div className="custom-container bg-amber-950 py-20">
      <h1 className="text-center text-black sm:text-5xl text-3xl mb-8 md:mb-12">
        <span className="text-amber-600">Servicios</span>
      </h1>
      <div className="grid grid-cols-[repeat(1,minmax(0,300px))] md:grid-cols-[repeat(2,minmax(0,300px))] lg:grid-cols-[repeat(3,minmax(100px,300px))] gap-y-8 gap-x-10 justify-center">
        {services.map(({ title, items }) => (
          <div
            key={title}
            className="text-black "
            style={{ background: "#f7f7f7" }}
          >
            <div className="bg-amber-900" style={{ height: 160 }}></div>
            <div className="p-5">
              <h6 className="text-xl mb-3 text-amber-600">{title}</h6>
              <ul>
                {items.map(({ id, description }) => (
                  <li
                    style={{ listStyle: "inside" }}
                    className="text-md"
                    key={id}
                  >
                    {description}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;

const services = [
  {
    title: "Comercial",
    items: [
      { id: 0, description: "Proyecto ejecutivo y renders" },
      { id: 1, description: "Presupuestos paramétricos y de obra" },
      {
        id: 2,
        description:
          "Desmonte y despalme, terracerías, vialidades, áreas verdes, banquetas y guarniciones",
      },
      {
        id: 3,
        description:
          "Acometidas hidrosanitarias, media y baja tensión, voz y datos, pluviales.",
      },
      {
        id: 4,
        description:
          "Obra civil cimentación, firmes de concreto, estructuras de concreto.",
      },
      {
        id: 5,
        description: "Estructuras metálicas, laminación y molduras.",
      },
    ],
  },
  {
    title: "Residencial",
    items: [
      { id: 0, description: "Proyecto ejecutivo y renders" },
      { id: 1, description: "Presupuestos paramétricos y de obra" },
      {
        id: 2,
        description:
          "Desmonte y despalme, terracerías, vialidades, áreas verdes, banquetas y guarniciones",
      },
      {
        id: 3,
        description:
          "Acometidas hidrosanitarias, media y baja tensión, voz y datos, pluviales.",
      },
      {
        id: 4,
        description:
          "Obra civil cimentación, firmes de concreto, estructuras de concreto.",
      },
      {
        id: 5,
        description: "Estructuras metálicas, laminación y molduras.",
      },
    ],
  },
  {
    title: "Industrial",
    items: [
      { id: 0, description: "Proyecto ejecutivo y renders" },
      { id: 1, description: "Presupuestos paramétricos y de obra" },
      {
        id: 2,
        description:
          "Desmonte y despalme, terracerías, vialidades, áreas verdes, banquetas y guarniciones",
      },
      {
        id: 3,
        description:
          "Acometidas hidrosanitarias, media y baja tensión, voz y datos, pluviales.",
      },
      {
        id: 4,
        description:
          "Obra civil cimentación, firmes de concreto, estructuras de concreto.",
      },
      {
        id: 5,
        description: "Estructuras metálicas, laminación y molduras.",
      },
    ],
  },
  {
    title: "Test 1",
    items: [
      { id: 0, description: "Proyecto ejecutivo y renders" },
      { id: 1, description: "Presupuestos paramétricos y de obra" },
      {
        id: 2,
        description:
          "Desmonte y despalme, terracerías, vialidades, áreas verdes, banquetas y guarniciones",
      },
      {
        id: 3,
        description:
          "Acometidas hidrosanitarias, media y baja tensión, voz y datos, pluviales.",
      },
      {
        id: 4,
        description:
          "Obra civil cimentación, firmes de concreto, estructuras de concreto.",
      },
      {
        id: 5,
        description: "Estructuras metálicas, laminación y molduras.",
      },
    ],
  },
  {
    title: "Test 2",
    items: [
      { id: 0, description: "Proyecto ejecutivo y renders" },
      { id: 1, description: "Presupuestos paramétricos y de obra" },
      {
        id: 2,
        description:
          "Desmonte y despalme, terracerías, vialidades, áreas verdes, banquetas y guarniciones",
      },
      {
        id: 3,
        description:
          "Acometidas hidrosanitarias, media y baja tensión, voz y datos, pluviales.",
      },
      {
        id: 4,
        description:
          "Obra civil cimentación, firmes de concreto, estructuras de concreto.",
      },
      {
        id: 5,
        description: "Estructuras metálicas, laminación y molduras.",
      },
    ],
  },
];
