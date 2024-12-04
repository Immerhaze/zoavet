import React from "react";

const Calendario = () => {
  return (
    <div className="calendly-inline-widget w-full h-[800px] shadow-lg rounded-md">
      <iframe
        src="https://calendly.com/tuusuario/nombre-evento"
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
        style={{
          border: "none",
          minHeight: "700px",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      ></iframe>
    </div>
  );
};

export default Calendario;
