"use client";

import React from "react";

const Testimonials = () => {
  const items = [
    {
      title: "Superviviente de Ataque de Oso",
      subtitle: "Un Camino de Recuperación y Amor",
      image: "/ruta-a-imagen-del-perro.jpg", // Reemplazar con la imagen real del perro
      description:
        "Este valiente perro fue gravemente herido tras un ataque de oso durante una campaña social en una zona rural. Gracias a la dedicación de nuestro equipo, el perro se sometió a varias cirugías y ahora vive una vida feliz con una familia amorosa. Su historia es un testamento a la resistencia y el poder de la atención compasiva.",
    },
    {
      title: "Recuperación Tras un Accidente",
      subtitle: "Dando Esperanza a una Mascota en Dificultad",
      image: "/ruta-a-imagen-de-mascota.jpg", // Reemplazar con la imagen real
      description:
        "Este perro llegó a nosotros con heridas graves por un accidente de tráfico. Tras un tratamiento intensivo y un plan de rehabilitación, ayudamos a restaurar su movilidad y alegría. Hoy, corre y juega nuevamente, siendo un símbolo de nuevas oportunidades.",
    },
    {
      title: "Rescate y Recuperación",
      subtitle: "Una Nueva Vida para un Gato Callejero",
      image: "/ruta-a-imagen-de-gato.jpg", // Reemplazar con la imagen real
      description:
        "Rescatado de la calle con una infección grave, este gato recibió una nueva vida gracias a nuestra intervención médica. A través de un tratamiento y cuidado minuciosos, el gato se recuperó completamente y fue adoptado por una familia que lo adora.",
    },
  ];

  return (
    <div className="relative w-full bg-primary_light px-4 py-16 mb-4">
      <h1 className="text-2xl font-bold text-center mb-12">
        Imágenes detras de las historias
      </h1>

      {/* Contenedor de tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-lg p-6 flex flex-col items-center"
          >
            {/* Imagen */}
            <div
              className="h-64 w-full rounded-2xl bg-cover bg-center mb-6"
              style={{
                backgroundImage: `url(${item.image})`,
              }}
            ></div>

            {/* Título y subtítulo */}
            <h3 className="text-sm font-semibold text-gray-500 mb-2">
              {item.title}
            </h3>
            <h2 className="text-lg font-bold text-gray-800 mb-4">
              {item.subtitle}
            </h2>

            {/* Descripción */}
            <p className="text-sm text-gray-600 text-left">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
