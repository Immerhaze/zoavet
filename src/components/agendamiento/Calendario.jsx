import React from "react";

const Calendario = () => {
  return (
    <div className="calendly-inline-widget w-full h-[800px] shadow-lg rounded-md">
      <iframe
        src="https://calendly.com/zoavet-clinica-veterinaria"
        width="100%"
        height="100%"
        style={{
          border: "1px solid #6db3ae",
          minHeight: "700px",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      ></iframe>
    </div>
  );
};

export default Calendario;
