import React, { useState, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import AboutProgressBars from "@/components/index/AboutProgressBars";

export default function AboutCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);
  const SLIDE_DURATION = 8000; // Slide duration in milliseconds
  const INTERVAL_DURATION = 100; // Interval duration in milliseconds
  const PROGRESS_INCREMENT = 100 / (SLIDE_DURATION / INTERVAL_DURATION);

  const aboutUs = [
    {
      photographer: "Manja Vitolic",
      profile: "https://unsplash.com/es/@madhatterzone",
      img: "/nosotrosCarousel/gato_verde.jpg",
      title: "Nosotros",
      text1: `Zoavet se fundó en 2015 para ofrecer atención domiciliaria de calidad y promover la tenencia responsable de mascotas en Bogotá.`,
      text2: `En 2019, abrimos nuestro Pet-Spa en Villas de Granada, ampliando a servicios clínicos en 2020 y fortaleciendo nuestra capacidad de atención las 24 horas.`,
    },
    {
      photographer: "James Barker",
      profile: "https://unsplash.com/es/@barkernotbaker",
      img: "/nosotrosCarousel/dog_lick.jpg",
      title: "Misión",
      text1: `Nos dedicamos al cuidado animal y la tenencia responsable, integrando a las mascotas como parte esencial de las familias.`,
      text2: `Ofrecemos atención integral con empatía y respeto, buscando siempre superar las expectativas de nuestros clientes.`,
    },
    {
      photographer: "Cong H",
      profile: "https://unsplash.com/es/@houcong",
      img: "/nosotrosCarousel/gato_amarillo.jpg",
      title: "Vision",
      text1: `Nos esforzamos por posicionar la formación de tutores responsables y el rol veterinario como fundamentales en las familias.`,
      text2: `Buscamos ser referentes en atención médica integral en nuestra ciudad y expandir nuestra misión a otras localidades a largo plazo.`,
    },
    {
      photographer: "Alvan Nee",
      profile: "https://unsplash.com/es/@alvannee",
      img: "/nosotrosCarousel/dog_orange.jpg",
      title: "Valores",
      text1: `En Zoavet, nos guiamos por valores de responsabilidad, respeto y atención integral.`,
      text2: `Promovemos la tenencia responsable, actuamos con transparencia y ética, nos comprometemos con el bienestar animal y la satisfacción de nuestros clientes.`,
    },
  ];

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setActiveIndex(emblaApi.selectedScrollSnap());
      setProgress(0); // Reset progress when slide changes
    };

    emblaApi.on("select", onSelect);
    onSelect(); // Set initial state

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          emblaApi.scrollNext(); // Change slide when progress reaches 100%
          return 0; // Reset progress
        }
        return prev + PROGRESS_INCREMENT; // Increment progress
      });
    }, INTERVAL_DURATION);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [emblaApi, activeIndex]);

  useEffect(() => {
    // Ensure progress starts from 0 on initial load
    setProgress(0);
  }, []);

  function JumpToSlide(number) {
    emblaApi.scrollTo(number, true);
  }

  return (
    <div className="about-cont w-full h-screen select-none">
      <div className="embla h-5/6 " ref={emblaRef}>
        <div className="embla__container h-full">
          {aboutUs.map((slide, index) => (
            <div
              key={index}
              className="embla__slide h-full  flex flex-col-reverse md:items-center md:flex-row "
            >
              <div className="h-2/5 md:h-full w-full flex flex-col justify-center items-center md:items-start  p-2 md:p-0 ">
                <img
                  src={slide.img}
                  alt="photo"
                  className="h-full md:w-full  md:h-auto md:rounded-r-xl"
                />
                <p className=" h-5 text-xs text-slate-300 md:pl-5 ">
                  &copy; Foto por{" "}
                  <a href={slide.profile} className="font-semibold underline">
                    {slide.photographer}
                  </a>
                </p>
              </div>
              <div className="w-full h-3/5 gap-3 md:px-5 md:h-full flex flex-col md:justify-center xl:h-full p-3 ">
                <h3 className="text-base md:text-base xl:text-lg self-start ">
                  Sobre nosotros
                </h3>
                <h2 className="text-4xl md:text-6xl lg:text-7xl  font-semibold tracking-wide  text-primary">
                  {slide.title}
                </h2>
                <p className="text-base  md:text-lg lg:text-xl xl:text-2xl  font-light lg:w-4/5 ">
                  {slide.text1}
                </p>
                <p className="text-base md:text-lg lg:text-xl  xl:text-2xl font-light lg:w-4/5">
                  {slide.text2}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="md:hidden h-1/6 initial-bars">
        <AboutProgressBars
          phone={true}
          activeIndex={activeIndex}
          progress={progress}
          clic={JumpToSlide}
        />
      </div>
      <div className="h-1/6 hidden md:flex text-2xl font-semibold  lg:justify-center tracking-wide">
        <AboutProgressBars
          activeIndex={activeIndex}
          progress={progress}
          clic={JumpToSlide}
        />
      </div>
    </div>
  );
}
