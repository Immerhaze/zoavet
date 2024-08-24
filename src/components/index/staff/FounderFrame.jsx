import React, { useState } from "react";

export default function FounderFrame({ image, id, name, designation }) {
  const [showTooltip, setShowTooltip] = useState(null);
  return (
    <div
      className={` w-full h-full flex ${
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
        className={`w-[10rem] h-[10rem] lg:w-[12rem] lg:h-[12rem] xl:w-[14rem] xl:h-[14rem] 2xl:w-[16rem] 2xl:h-[16rem]  object-cover object-top cursor-pointer rounded-full  border-4 border-primary lg:border-secondary/80  transition-all duration-300`}
      />
      <div
        className={`${
          showTooltip == id ? "lg:flex" : "lg:hidden"
        } lg:animate-slide-in-bottom animate-delay-100   lg:flex select-none w-[10rem] xl:w-[12rem]  lg:absolute lg:bottom-0  p-2 flex-col justify-center items-center text-center rounded-2xl bg-white`}
      >
        <h3 className="text-ms  xl:text-base font-bold text-primary lg:text-secondary tracking-wide">
          {name}
        </h3>
        <p className="text-xs font-normal tracking-wide">{designation}</p>
      </div>
    </div>
  );
}
