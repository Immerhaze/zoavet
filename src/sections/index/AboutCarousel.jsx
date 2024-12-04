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
      img: "/nosotrosCarousel/gato_verde.webp",
      alt: "Foto de un gato acostado con fondo verde",
      title: "Nosotros",
      text1: `Zoavet, fundada en 2015 en Bogotá, comenzó ofreciendo servicios de atención domiciliaria y Pet-Spa en Villas de Granada (2019). En 2020, amplió su portafolio para incluir consultas médicas, hospitalización, cirugías, atención 24/7, entre otros.`,
      text2: `Actualmente enfrenta el desafío de integrar especialidades médicas, mantener una capacitación continua y brindar excelencia a los tutores de sus hijos de cuatro patas.`,
    },
    {
      photographer: "James Barker",
      profile: "https://unsplash.com/es/@barkernotbaker",
      img: "/nosotrosCarousel/dog_lick.webp",
      alt: "Foto de un perro lamiéndose el hocico en primer plano",
      title: "Misión",
      text1: `Comprometidos con el cuidado animal y la tenencia responsable, promovemos la formación y actualización constante para garantizar los cuidados básicos de las mascotas.`,
      text2: `Reconocemos a las mascotas como parte fundamental de las familias y trabajamos con empatía para ofrecer atención profesional e integral.`,
    },
    {
      photographer: "Cong H",
      profile: "https://unsplash.com/es/@houcong",
      img: "/nosotrosCarousel/gato_amarillo.webp",
      alt: "Foto de un gato acostado con fondo amarillo",
      title: "Visión",
      text1: `Buscamos posicionarnos como un servicio médico veterinario de referencia, promoviendo la formación de tutores responsables y resaltando el rol esencial de las mascotas en las familias.`,
      text2: `Aspiramos a destacar por la calidad de nuestra atención y la integralidad de nuestros servicios, con la visión de expandirnos a otras ciudades a largo plazo.`,
    },
    {
      photographer: "Alvan Nee",
      profile: "https://unsplash.com/es/@alvannee",
      img: "/nosotrosCarousel/dog_orange.webp",
      alt: "Foto de un perro corgi parado al lado de unas plantas con fondo naranja",
      title: "Valores",
      text1: `En Zoavet, nos guiamos por valores de empatía, integridad y compromiso con el cuidado animal.`,
      text2: `Fomentamos la tenencia responsable, actuamos con rigor científico y ética, y trabajamos para garantizar el bienestar animal y la confianza de nuestros clientes.`,
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
    <div className="about-cont h-screen md:h-auto w-full mt-10">
      <div className="embla h-5/6" ref={emblaRef}>
        <div className="embla__container h-full">
          {aboutUs.map((slide, index) => (
            <div
              key={index}
              className="embla__slide h-full flex flex-col-reverse md:flex-row items-center md:items-stretch"
            >
              {/* Image Section */}
              <div className="h-2/5 md:h-full w-full flex flex-col justify-center items-center p-3 md:p-5">
                <img
                  src={slide.img}
                  alt={slide.alt}
                  className="w-full md:w-4/5 lg:w-full max-h-64 md:max-h-full object-cover rounded-lg"
                />
                <p className="text-xs text-slate-400 mt-2 md:mt-3">
                  &copy; Foto por{" "}
                  <a href={slide.profile} className="font-semibold underline">
                    {slide.photographer}
                  </a>
                </p>
              </div>

              {/* Text Section */}
              <div className="w-full h-3/5 md:h-full p-5 flex flex-col justify-center">
                <h3 className="text-sm md:text-lg text-primary_brand mb-2">
                  Sobre nosotros
                </h3>
                <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold mb-4">
                  {slide.title}
                </h2>
                <p className="text-sm md:text-base lg:text-lg font-light mb-3">
                  {slide.text1}
                </p>
                <p className="text-sm mb-4 md:text-base lg:text-lg font-light">
                  {slide.text2}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Bars - Mobile */}
      <div className="md:hidden h-1/6">
        <AboutProgressBars
          phone={true}
          activeIndex={activeIndex}
          progress={progress}
          clic={JumpToSlide}
        />
      </div>

      {/* Progress Bars - Tablet & Desktop */}
      <div className="hidden md:flex h-1/6 justify-center items-center">
        <AboutProgressBars
          activeIndex={activeIndex}
          progress={progress}
          clic={JumpToSlide}
        />
      </div>
    </div>
  );
}
