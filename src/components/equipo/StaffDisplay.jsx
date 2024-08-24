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
    <div className="w-full h-full py-5 flex-col text-secondary_dark">
      <h1 className="text-4xl md:text-6xl font-medium text-primary p-5">
        Equipo Zoavet
      </h1>
      <div className="h-full flex flex-col md:flex-row">
        <div className="h-2/6 md:w-1/2 flex flex-row flex-wrap mx-2 pb-10 mb-16">
          {staffCard.map((member) => (
            <div className="w-1/3 p-2 cursor-pointer" key={member.id}>
              <div
                onClick={() => handleClick(member)}
                className={`w-full h-2 md:h-32 lg:h-52  bg-top-center rounded-xl bg-cover p-6 ${
                  member.id === selectedStaff?.id
                    ? "shadow-sm shadow-secondary"
                    : "shadow-sm shadow-primary"
                }`}
                style={{ backgroundImage: `url(${member.image})` }}
              />
            </div>
          ))}
        </div>
        <div className="md:w-1/2 rounded-xl p-5 flex justify-center items-center">
          <div className="w-full h-full rounded-xl py-3 bg-primary_light flex flex-col justify-center items-center">
            <img
              src={selectedStaff?.image}
              alt={selectedStaff?.name}
              className="rounded-xl h-48 lg:h-64 -mt-20 shadow-md shadow-secondary_dark mb-3"
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
