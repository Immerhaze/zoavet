import React, { useState, useRef } from "react";
import { staffCard } from "@/consts/staff";

const StaffDisplay = () => {
  const [selectedStaff, setSelectedStaff] = useState({
    id: 1,
    name: "Yissete Bautista",
    designation: "Jefe Veterinario & Co-fundadora",
    image: "/staff/large/man1.webp",
    description:
      "Médico Veterinario y Zootecnista de la UDCA (2015), especialista en Epidemiología Veterinaria (2016). Realizó residencia en cirugía en UFPEL, Brasil, con enfoque en cirugía de tejidos blandos y ecografía abdominal. Actualmente, cursa la Maestría en Clínica Médica y Quirúrgica de Pequeños Animales en la Universidad del Tolima, con énfasis en Cardiología. Miembro aspirante de la Sociedad Colombiana de Cardiología Veterinaria y directora médica y fundadora de Zoavet.",
  });

  const detailsRef = useRef(null);

  const handleClick = (staffMember) => {
    setSelectedStaff(staffMember);
    if (window.innerWidth < 768 && detailsRef.current) {
      // Scroll only on smaller screens (phones)
      detailsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="w-full h-auto lg:h-full  flex flex-col mp-8">
      <div className="h-1/6 flex items-center justify-center p-5">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-medium text-primary_brand">
          Equipo Zoavet
        </h1>
      </div>
      <div className="w-full md:h-screen flex flex-col md:flex-row">
        <div className="w-full md:w-3/6 lg:3/5 h-full flex flex-col">
          <div className="h-full flex flex-col lg:flex-row">
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 p-4 gap-4 items-center">
              {staffCard.map((member) => (
                <div
                  key={member.id}
                  className="cursor-pointer"
                  onClick={() => handleClick(member)}
                >
                  <div
                    className={`h-48 lg:h-60 bg-cover rounded-xl transition-all duration-300 ${
                      member.id === selectedStaff?.id
                        ? "shadow-lg shadow-secondary_brand"
                        : "shadow-md shadow-primary_brand"
                    }`}
                    style={{ backgroundImage: `url(${member.image})` }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          ref={detailsRef} // Reference for scrolling
          className="w-full md:w-3/6 lg:2/5 h-full flex items-end p-4"
        >
          <div className="w-full h-full flex flex-col items-center justify-center gap-8 p-4 bg-primary_light rounded-xl shadow-lg">
            <div className="w-1/2 mb-4">
              <img
                src={selectedStaff?.image}
                alt={`Personal zoavet: ${selectedStaff?.name}`}
                className="w-full object-cover rounded-xl shadow-md lg:h-72 md:h-56 h-48"
              />
            </div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-primary_brand">
              {selectedStaff?.name}
            </h2>
            <h3 className="text-sm md:text-base font-light">
              {selectedStaff?.designation}
            </h3>
            <p className="text-sm md:text-base lg:text-lg">
              {selectedStaff?.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffDisplay;
