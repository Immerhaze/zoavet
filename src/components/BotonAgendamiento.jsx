import { useState } from "react";

const BotonAgendamiento = ({ style }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // Disable scrolling
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto"; // Re-enable scrolling
  };

  return (
    <>
      {/* <button
        onClick={handleOpenModal}
        className={`${style} py-2 px-4 rounded-full shadow-md hover:shadow-lg transition-all`}
      >
        Agendar
      </button>

      {isModalOpen && ( */}
      <div
        className="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center bg-black bg-opacity-50"
        onClick={handleCloseModal}
      >
        {/* Modal Content */}
        <div
          className="relative w-[90%] md:w-[80%] lg:w-[70%] h-[90%] bg-white rounded-lg shadow-lg overflow-auto"
          onClick={(e) => e.stopPropagation()} // Prevent click propagation to close modal
        >
          {/* Close Button */}
          <button
            onClick={handleCloseModal}
            className="absolute top-4 right-4 text-xl font-bold text-secondary_brand hover:text-primary_light"
          >
            ✕
          </button>

          {/* Calendly Embed */}
          <iframe
            src="https://calendly.com/your-link"
            className="w-full h-full"
            title="Calendly Booking"
          ></iframe>
        </div>
      </div>
      {/* )} */}
    </>
  );
};

export default BotonAgendamiento;
