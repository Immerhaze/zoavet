import React, { useState } from "react";

export default function FounderFrame({ image, id, name, designation }) {
  const [showTooltip, setShowTooltip] = useState(null);

  return (
    <div className="w-full h-full flex flex-col md:flex-row justify-center items-center lg:justify-start gap-1 p-5 lg:pl-[10%]">
      <img
        onMouseEnter={() => setShowTooltip(id)}
        onMouseLeave={() => setShowTooltip(null)}
        src={image}
        alt={`Co-fundador/a: ${name}`}
        className="w-2/3 md:w-2/5 lg:w-1/3 object-contain object-top rounded-full border-4 border-secondary/80 transition-all duration-300 aspect-square"
      />
      <a
        href="/equipo"
        target="_blank"
        rel="noopener noreferrer"
        className="founder-tag select-none cursor-pointer flex w-full md:w-auto px-5 py-1 flex-col justify-center items-center text-center rounded-2xl bg-white"
      >
        <h3 className="text-base font-bold text-secondary tracking-wide">
          {name}
        </h3>
        <p className="text-sm font-normal tracking-wide">{designation}</p>
      </a>
    </div>
  );
}
