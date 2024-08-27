import React, { useState } from "react";
import { staffCard } from "@/consts/staff";

// Define component
const StaffDisplay = () => {
  const [selectedStaff, setSelectedStaff] =
    (useState < StaffMember) |
    (null >
      {
        id: 1,
        name: "Yissete Bautista",
        designation: "Jefe Veterinario & Co-fundadora",
        image: "/staff/large/man1.jpg",
        description:
          "Nuestra Jefe Veterinaria y Co-Fundadora. Se graduó en la Universidad Nacional de Colombia con un título en Medicina Veterinaria. Con más de 15 años de experiencia en el cuidado de animales, su pasión por la veterinaria y su liderazgo han sido fundamentales para el crecimiento de nuestra clínica.",
      });

  const handleClick = (staffMember) => {
    setSelectedStaff(staffMember);
    console.log(selectedStaff);
  };

  return (
    <div className=" w-full h-full py-5 flex-col text-secondary_dark ">
      <h1 className="text-4xl md:text-6xl font-medium text-primary p-5">
        Nuestro equipo
      </h1>
      <div className="h-full flex flex-col md:flex-row ">
        <div className="h-2/6 md:w-1/2  flex  flex-row flex-wrap mx-2  pb-10 mb-16">
          {staffcard.map((member) => (
            <div className="w-1/3 p-2 cursor-pointer">
              <div
                key={member.id}
                onClick={() => handleClick(member)}
                className={`w-full h-40 lg:h-52 xl:h-64  rounded-xl bg-cover p-6 ${
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
          <div className="w-full h-full rounded-xl py-3 bg-primary_light/40 flex flex-col justify-center items-center">
            <img
              src={selectedStaff?.image}
              alt={selectedStaff?.name}
              className="rounded-xl w-1/2 -mt-20 shadow-md shadow-secondary_dark mb-5"
            />
            <h2 className="text-4xl xl:text-5xl font-semibold tracking-wider text-center text-primary">
              {selectedStaff?.name}
            </h2>
            <h3 className="text-xl xl:text-2xl font-light tracking-wider mb-3 text-center ">
              {selectedStaff?.designation}
            </h3>
            <p className="font-medium text-base md:text-lg lg:text-xl xl:text-3xl px-10 lg:px-5 tracking-wide text-left xl:px-24 pb-10">
              {selectedStaff?.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffDisplay;
