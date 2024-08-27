import React, { useState } from "react";

export default function FounderFrame({ image, id, name, designation }) {
  const [showTooltip, setShowTooltip] = useState(null);
  return (
    <div
      className={`w-full h-full flex  justify-center md:justify-normal lg:justify-start py-5 p-2 ${
        id > 1 ? "md:pr-[15%] lg:pr-[25%]" : "md:pl-[15%] lg:pl-[25%]"
      }  ${
        id > 1 ? "flex-row-reverse" : "flex-row"
      } items-center lg:flex-col  lg:relative gap-2  `}
    >
      <img
        onMouseEnter={() => setShowTooltip(id)}
        onMouseLeave={() => setShowTooltip(null)}
        src={image}
        alt={"photo"}
        className={`w-[8rem] h-[8rem]   lg:w-3/6 lg:h-5/6  object-cover object-top rounded-full  border-4 border-secondary/80   transition-all duration-300`}
      />
      <a
        href="/equipo"
        className={`founder-tag select-none cursor-pointer flex w-1/3 lg:absolute lg:-bottom-0 p-2 flex-col justify-center items-center text-center rounded-2xl bg-white`}
      >
        <h3 className="text-ms  xl:text-base font-bold text-secondary tracking-wide">
          {name}
        </h3>
        <p className="text-xs font-normal tracking-wide">{designation}</p>
      </a>
    </div>
  );
}
