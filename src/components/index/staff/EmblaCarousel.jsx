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
    <section className="w-full h-full mx-auto lg:px-16 relative">
      <div className="overflow-hidden w-full h-full" ref={emblaRef}>
        <div className="flex h-full items-center py-10 lg:py-5">
          {slides.map((personal, index) => (
            <div
              className="relative w-full flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-col p-2"
              key={index}
            >
              <div className="relative h-full flex items-center justify-center lg:flex-col">
                <img
                  onMouseEnter={() => setShowTooltip(personal.id)}
                  onMouseLeave={() => setShowTooltip(null)}
                  src={personal.image}
                  alt={"photo"}
                  className="w-[8rem] h-[8rem] lg:w-3/6 lg:h-full object-cover object-top rounded-full border-4 border-primary duration-300"
                />
                <a
                  href={"/equipo"}
                  className={`staff-tag select-none -mb-10 lg:m-0 cursor-pointer absolute lg:relative bottom-0 flex w-2/3 p-2 flex-col justify-center items-center text-center rounded-2xl bg-white`}
                >
                  <h3 className="text-xs xl:text-base font-bold text-primary tracking-wide">
                    {personal.name}
                  </h3>
                  <p className="text-xs xl:text-ms font-normal tracking-wide">
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
