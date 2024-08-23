"use client";

import { useRef } from "react";
import { cn } from "@/utils/cn";

export const DirectionAwareHover = ({ imageUrl, cardTitle, description }) => {
  const ref = useRef();

  return (
    <div
      ref={ref}
      className={cn(
        "w-full h-full bg-transparent rounded-2xl overflow-hidden group/card relative hover:scale-105 transition-transform duration-300"
      )}
    >
      <div className="relative h-full w-full bg-white">
        <div className="lg:group-hover/card:block hidden absolute inset-0 w-full h-full bg-gradient-to-b from-black/40 to-black  z-10 transition duration-500" />
        <div className="h-full dark:bg-black">
          <img
            alt="image"
            className={cn(" h-full w-full object-cover scale-[1.15]")}
            src={imageUrl}
          />
          <div className="w-[100%] py-2 lg:p-5 absolute bottom-0 left-0 flex flex-col md:flex-row md:p-5 md:justify-between lg:flex-row justify-start items-center gap-2 bg-primary/90">
            <h2 className="w-full text-center text-3xl md:text-5xl font-black text-white ">
              {cardTitle}
            </h2>
            <span class=" lg:hidden p-2 flex flex-row justify-center items-center rounded-full gap-2 bg-secondary text-white tracking-wide">
              <span
                class={`icon-[ph--arrow-square-in-duotone] text-3xl lg:text-4xl`}
              ></span>
              <p class="font-semibold text-lg lg:text-3xl xl:text-4xl">
                Agendar
              </p>
            </span>
          </div>
        </div>
        <div
          className={cn(
            "p-5 hidden lg:group-hover/card:flex h-full text-white absolute top-0  flex-col gap-5 justify-evenly items-center  z-40"
          )}
        >
          <p className="text-5xl font-semibold tracking-wide animate-fade-in-up animate-delay-100 animate-duration-300">
            {cardTitle}
          </p>
          <p className="text-2xl font-light tracking-wide animate-fade-in-up animate-delay-100 animate-duration-300">
            {description}
          </p>
          <div className="w-full flex justify-center items-center">
            <span class=" cursor-pointer p-2 flex flex-row justify-center items-center gap-2 rounded-full border-2 border-secondary bg-secondary_light hover:bg-secondary text-secondary hover:text-white transition-colors duration-200 delay-0 tracking-wide animate-fade-in-up animate-delay-200 animate-duration-300">
              <span class={`icon-[ph--arrow-square-in-duotone] text-3xl`} />
              <p class="font-semibold text-2xl">Agendar</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
