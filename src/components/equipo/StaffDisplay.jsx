import React, { useState } from "react";
import { staffCard } from "@/consts/staff";

const StaffDisplay = () => {
  const [selectedStaff, setSelectedStaff] = useState({
    id: 1,
    name: "Yissete Bautista",
    designation: "Jefe Veterinario & Co-fundadora",
    image: "/staff/large/man1.jpg",
    description:
      "Nuestra Jefe Veterinaria y Co-Fundadora. Se graduó en la Universidad Nacional de Colombia con un título en Medicina Veterinaria. Con más de 15 años de experiencia en el cuidado de animales, su pasión por la veterinaria y su liderazgo han sido fundamentales para el crecimiento de nuestra clínica.",
  });

  const handleClick = (staffMember) => {
    setSelectedStaff(staffMember);
    console.log(staffMember); // Logging the selected staff member
  };

  return (
    <div className="w-full h-full flex-col text-secondary_dark">
      <div className="h-1/6 flex items-center p-5">
        <h1 className="text-4xl md:text-6xl font-medium text-primary">
          Equipo Zoavet
        </h1>
      </div>
      <div className="h-5/6 flex flex-col md:flex-row">
        <div className="h-full md:w-3/5 flex flex-row flex-wrap items-center px-5">
          {staffCard.map((member) => (
            <div
              className={`p-2 w-1/3 h-1/${staffCard.length / 3} cursor-pointer`}
              key={member.id}
            >
              <div
                onClick={() => handleClick(member)}
                className={`h-48 lg:h-64  hover:shadow-md hover:shadow-secondary transition-all duration-300  bg-top rounded-xl bg-cover ${
                  member.id === selectedStaff?.id
                    ? "shadow-md shadow-secondary"
                    : "shadow-md shadow-primary"
                }`}
                style={{ backgroundImage: `url(${member.image})` }}
              />
            </div>
          ))}
        </div>
        <div className="md:w-2/5 flex justify-center items-end px-5 pb-5">
          <div className="w-full h-4/5 rounded-xl  bg-primary_light/40 flex flex-col justify-center items-center">
            <img
              src={selectedStaff?.image}
              alt={selectedStaff?.name}
              className="rounded-xl h-48 lg:h-1/2 -mt-44 shadow-md shadow-secondary_dark mb-3"
            />
            <h2 className="text-3xl md:text-4xl font-semibold tracking-wider text-center text-primary">
              {selectedStaff?.name}
            </h2>
            <h3 className="text-lg md::text-xl font-light tracking-wider mb-3 text-center">
              {selectedStaff?.designation}
            </h3>
            <p className="font-medium text-base md:text-lg  px-2 md:px-3 lg:px-5  tracking-wide text-left pb-3">
              {selectedStaff?.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffDisplay;
