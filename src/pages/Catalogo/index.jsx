import { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import Detalhes from "../../components/Cortes/detalhes";
import Degrade from "../../assets/degrade.jpeg";
import Barba from "../../assets/barba.jpeg";
import Style from "../../assets/style.jpeg";
import Moica from "../../assets/moica.jpeg";
import Americano from "../../assets/americano.jpeg";
import Social from "../../assets/social.jpeg";

const cuts = [
  {
    id: 1,
    name: "Degradê",
    price: "R$ 20,00",
    img: Degrade,
    description: "Um corte moderno que destaca um efeito de degradê.",
  },
  {
    id: 2,
    name: "Moica",
    price: "R$ 20,00",
    img: Moica,
    description: "Estilo moica que combina cor e corte precisos.",
  },
  {
    id: 3,
    name: "Degradê com Barba",
    price: "R$ 30,00",
    img: Barba,
    description: "Degradê com barba para realçar o visual.",
  },
  {
    id: 4,
    name: "Corte mais freeStyle",
    price: "R$ 25,00",
    img: Style,
    description: "Um corte que inclui técnicas avançadas de FreeStyle.",
  },
  {
    id: 5,
    name: "Americano",
    price: "R$ 20,00",
    img: Americano,
    description: "Americano para um visual elegante e sofisticado.",
  },
  {
    id: 6,
    name: "Social",
    price: "R$ 20,00",
    img: Social,
    description: "Um corte moderno que destaca autenticidade.",
  },
];

const CatalogPage = () => {
  const [selectedCut, setSelectedCut] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleCutClick = (cut) => {
    setScrollPosition(window.scrollY);
    setSelectedCut(cut);
  };

  const handleCloseDetail = () => {
    setSelectedCut(null);
    window.scrollTo(0, scrollPosition);
  };

  return (
    <div className="bg-gray-900 min-h-screen p-6">
      {selectedCut ? (
        <Detalhes cut={selectedCut} onClose={handleCloseDetail} />
      ) : (
        <>
          <div className="flex items-center space-x-6 p-4">
            <Link to="/" className="text-[#c58a4f] hover:text-orange-400">
              <IoMdArrowRoundBack size={26} />
            </Link>

            <div className="text-white">
              <h1 className="text-2xl font-semibold">Catálogo de Cortes</h1>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cuts.map((cut) => (
              <div
                key={cut.id}
                onClick={() => handleCutClick(cut)}
                className="flex flex-col sm:flex-row items-center sm:items-start px-4 py-3 border-2 border-[#c0a98a] rounded-2xl shadow-md hover:bg-gray-700 transition transform hover:scale-105 cursor-pointer"
              >
                <div className="flex-shrink-0">
                  <img
                    src={cut.img}
                    alt={cut.name}
                    className="w-64 h-48 object-cover rounded-lg sm:w-40 sm:h-28 lg:w-48 lg:h-32"
                  />
                </div>

                <div className="mt-4 ml-6 sm:mt-0 sm:ml-4 lg:ml-6 flex-1">
                  <h2 className="text-white text-xl font-semibold">{cut.name}</h2>
                  <p className="text-gray-400 text-lg">{cut.price}</p>
                  <p className="text-gray-300 mt-2">{cut.description}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CatalogPage;
