import React, { useState } from "react";
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

  const handleClick = (staffMember) => {
    setSelectedStaff(staffMember);
  };

  return (
    <div className="w-full h-auto lg:h-screen flex-col text-secondary_dark">
      {/* Header */}
      <div className="h-1/6 flex items-center justify-center p-5">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-primary_brand">
          Equipo Zoavet
        </h1>
      </div>

      {/* Main Content */}
      <div className="h-5/6 flex flex-col lg:flex-row">
        {/* Staff Cards */}
        <div className="lg:w-3/5 grid grid-cols-2 sm:grid-cols-3 gap-4 p-4">
          {staffCard.map((member) => (
            <div
              key={member.id}
              className="cursor-pointer"
              onClick={() => handleClick(member)}
            >
              <div
                className={`aspect-w-1 aspect-h-1 lg:h-64 bg-cover rounded-xl transition-all duration-300 ${
                  member.id === selectedStaff?.id
                    ? "shadow-lg shadow-secondary_brand"
                    : "shadow-md shadow-primary_brand"
                }`}
                style={{ backgroundImage: `url(${member.image})` }}
              />
            </div>
          ))}
        </div>

        {/* Selected Staff Details */}
        <div className="lg:w-2/5 flex flex-col justify-between items-center p-4 lg:p-8 min-h-[500px]">
          <div className="w-full bg-primary_light rounded-xl shadow-lg p-4 flex flex-col justify-between h-full">
            {/* Image */}
            <div className="w-full h-56 sm:h-64 md:h-72 lg:h-80 mb-4">
              <img
                src={selectedStaff?.image}
                alt={`Personal zoavet: ${selectedStaff?.name}`}
                className="w-full h-full object-cover rounded-xl shadow-md"
              />
            </div>

            {/* Text Content */}
            <div className="flex flex-col h-full space-y-3 overflow-hidden">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary_brand leading-tight">
                {selectedStaff?.name}
              </h2>
              <h3 className="text-sm sm:text-base md:text-lg font-light text-primary_brand">
                {selectedStaff?.designation}
              </h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-primary_text_light">
                {selectedStaff?.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffDisplay;
