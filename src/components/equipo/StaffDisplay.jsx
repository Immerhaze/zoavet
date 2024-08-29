import React, { useState } from "react";
import { staffCard } from "@/consts/staff";

const StaffDisplay = () => {
  const [selectedStaff, setSelectedStaff] = useState({
    id: 1,
    name: "Yissete Bautista",
    designation: "Jefe Veterinario & Co-fundadora",
    image: "/staff/large/man1.webp",
    description:
      "Nuestra Jefe Veterinaria y Co-Fundadora. Se graduó en la Universidad Nacional de Colombia con un título en Medicina Veterinaria. Con más de 15 años de experiencia en el cuidado de animales, su pasión por la veterinaria y su liderazgo han sido fundamentales para el crecimiento de nuestra clínica.",
  });

  const handleClick = (staffMember) => {
    setSelectedStaff(staffMember);
    console.log(staffMember); // Logging the selected staff member
  };

  return (
    <div className="w-full h-auto lg:h-screen flex-col text-secondary_dark">
      <div className="h-1/6 flex items-center p-5">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-medium text-primary">
          Equipo Zoavet
        </h1>
      </div>
      <div className="h-5/6 flex flex-col lg:flex-row">
        <div className="lg:w-3/5 flex flex-row items-stretch flex-wrap   px-2">
          {staffCard.map((member) => (
            <div
              className={`w-1/3 cursor-pointer p-2 aspect-square`}
              key={member.id}
            >
              <div
                onClick={() => handleClick(member)}
                className={`h-32 md:h-full max-w-full lg:h-64  hover:shadow-md hover:shadow-secondary transition-all duration-300  bg-top rounded-xl bg-cover ${
                  member.id === selectedStaff?.id
                    ? "shadow-md shadow-secondary"
                    : "shadow-md shadow-primary"
                }`}
                style={{ backgroundImage: `url(${member.image})` }}
              />
            </div>
          ))}
        </div>
        <div className="lg:w-2/5 h-full flex justify-center items-end px-5 py-5">
          <div className="w-full h-4/5 rounded-xl  bg-primary_light/40 flex flex-col justify-center items-center md:p-2">
            <span className="flex justify-center items-center w-full h-2/5 lg:-mt-48">
              <img
                src={selectedStaff?.image}
                alt={`Personal zoavet: ${selectedStaff?.name}`}
                className="rounded-xl h-48 lg:h-full  shadow-md shadow-secondary_dark mb-3"
              />
            </span>
            <span className="w-full h-1/5">
              <h2 className="text-2xl lg:text-4xl font-semibold tracking-wider text-center text-primary">
                {selectedStaff?.name}
              </h2>
              <h3 className="text-base md:text-lg  font-light tracking-wider mb-3 text-center">
                {selectedStaff?.designation}
              </h3>
            </span>
            <span className="w-full h-2/5">
              <p
                className="font-medium  text-base md:text-lg lg:text-xl 
              px-2 md:px-3 lg:px-5  tracking-wide text-left pb-3"
              >
                {selectedStaff?.description}
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffDisplay;
