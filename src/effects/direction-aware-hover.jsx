"use client";

import { useRef } from "react";
import { cn } from "@/utils/cn";
import PrimaryButton from "@/components/primaryButton.astro";

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
          <div className="w-[100%] py-2  absolute bottom-0 flex flex-col md:flex-row   items-center gap-2 bg-primary/90 px-10">
            <h2 className="w-full text-center md:text-left  text-3xl md:text-4xl font-black text-white ">
              {cardTitle}
            </h2>
            <a
              href={"/contacto"}
              class="lg:hidden p-1 flex flex-row justify-center items-center rounded-full gap-2 border-2 border-secondary bg-secondary lg:bg-secondary_light lg:hover:bg-secondary  text-white lg:text-secondary lg:hover:text-white tracking-wide transition-all duration-300"
            >
              <span class="icon-[ph--arrow-square-in-duotone]   text-2xl"></span>
              <p class="font-semibold text-lg">Agendar</p>
            </a>
          </div>
        </div>
        <div
          className={cn(
            "p-5 hidden lg:group-hover/card:flex h-full text-white absolute top-0  flex-col gap-5 justify-evenly items-center  z-40"
          )}
        >
          <p className="text-4xl font-semibold tracking-wide animate-fade-in-up animate-delay-100 animate-duration-300">
            {cardTitle}
          </p>
          <p className="text-base font-light tracking-wide animate-fade-in-up animate-delay-100 animate-duration-300">
            {description}
          </p>
          <div className="w-full flex justify-center items-center group ">
            <a
              href={"/contacto"}
              class="group/primarybtn p-1 flex flex-row justify-center items-center lg:mr-10 rounded-full gap-2 border-2 border-secondary bg-secondary lg:bg-secondary_light lg:hover:bg-secondary  text-white lg:text-secondary lg:hover:text-white tracking-wide transition-all duration-300"
            >
              <span
                class={`icon-[ph--arrow-square-in-duotone] group-hover/primarybtn:hidden text-3xl lg:text-xl`}
              ></span>
              <span class="icon-[line-md--compass-twotone-loop] hidden group-hover/primarybtn:block  text-3xl lg:text-xl"></span>
              <p class="font-semibold text-lg lg:text-xl">Agendar</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
