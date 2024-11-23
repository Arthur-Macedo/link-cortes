const Detalhes = ({ cut, onClose }) => {
    if (!cut) {
      return <p className="text-white">Corte não encontrado</p>;
    }
  
    const handleRedirect = () => {
      document.body.style.cursor = "wait";
      const telefone = "5585985010759";
      const mensagem = `Gostaria de agendar o corte de cabelo ${cut.name}, no valor de ${cut.price}.`;
      const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
      window.open(url, "_blank");
      setTimeout(() => {
        document.body.style.cursor = "default";
      }, 1000);
    };
  
    return (
      <div className="bg-black min-h-screen p-4 fixed inset-0 flex justify-center items-center z-50">
        <div className="bg-gray-700 p-6 rounded-lg w-full sm:w-96 lg:w-[32rem] max-h-[90vh] overflow-y-auto">
          <button
            onClick={onClose}
            className="text-[#c3a37d] mb-4 sm:mb-6"
            aria-label="Voltar para o catálogo"
          >
            &larr; Voltar para o catálogo
          </button>
  
          <img
            src={cut.img}
            alt={cut.name}
            className="w-full h-64 object-cover rounded-md"
          />
          <h1 className="text-white text-2xl font-bold mt-4">{cut.name}</h1>
          <p className="text-gray-400 text-xl mt-2">{cut.price}</p>
          <p className="text-gray-300 mt-4">{cut.description}</p>
          <button
            onClick={handleRedirect}
            className="bg-[#da9856] hover:text-orange-400 text-white font-semibold py-2 px-4 mt-4 rounded-lg shadow-md transition duration-300 transform hover:scale-105"
          >
            Marcar Horário
          </button>
        </div>
      </div>
    );
  };
  
  export default Detalhes;
  