import React, { useCallback, useState } from "react";
import { PrevButton, NextButton, usePrevNextButtons } from "./ArrowCarousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { ...options, containScroll: "trimSnaps" },
    [Autoplay()]
  );
  const [showTooltip, setShowTooltip] = useState(null);

  const onNavButtonClick = useCallback((emblaApi) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi, onNavButtonClick);

  return (
    <section className="w-full h-full relative">
      <div className="overflow-hidden w-full h-full" ref={emblaRef}>
        <div className="flex  h-full justify-start items-start ">
          {slides.map((personal, index) => (
            <div
              className="relative w-full flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.33%]"
              key={index}
            >
              <div className="relative h-full flex items-center justify-center lg:flex-col group p-5">
                <img
                  onMouseEnter={() => setShowTooltip(personal.id)}
                  onMouseLeave={() => setShowTooltip(null)}
                  src={personal.image}
                  alt={`Equipo zoavet: ${personal.name}`}
                  className="w-3/5 md:w-2/3 lg:w-2/5 xl:w-2/5 *:object-contain object-top rounded-full border-4 border-primary duration-300 aspect-square"
                />
                <a
                  href={"/equipo"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`staff-tag select-none cursor-pointer  absolute bottom-0 group-hover:flex animate-fade-in-up animate-duration-300 w-auto  px-5 py-1 flex-col justify-center items-center text-center rounded-2xl bg-white`}
                >
                  <h3 className="text-sm xl:text-base font-bold text-primary tracking-wide">
                    {personal.name}
                  </h3>
                  <p className="text-sm xl:text-ms font-normal tracking-wide">
                    {personal.designation}
                  </p>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute -inset-3 flex justify-between items-center pointer-events-none">
        <PrevButton
          onClick={onPrevButtonClick}
          disabled={prevBtnDisabled}
          className="absolute transition-colors duration-300 lg:bg-white/60 hover:lg:bg-primary text-primary lg:text-primary hover:lg:text-white left-0 cursor-pointer p-0 m-0 w-[2rem] lg:w-[3rem] h-[2rem] lg:h-[3rem]  rounded-full flex items-center justify-center text-body disabled:text-opacity-50 pointer-events-auto"
        />
        <NextButton
          onClick={onNextButtonClick}
          disabled={nextBtnDisabled}
          className="absolute transition-colors duration-300 lg:bg-white/60 hover:lg:bg-primary text-primary lg:text-primary hover:lg:text-white right-0 cursor-pointer p-0 m-0 w-[2rem] lg:w-[3rem] h-[2rem] lg:h-[3rem]  rounded-full flex items-center justify-center text-body disabled:text-opacity-50 pointer-events-auto"
        />
      </div>
    </section>
  );
};

export default EmblaCarousel;
