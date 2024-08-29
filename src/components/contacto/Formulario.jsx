import React, { useState } from "react";
import { z } from "zod";

// Zod schema for validation
const ContactFormSchema = z.object({
  fullName: z
    .string()
    .min(1, "Requiere nombre completo")
    .max(100, "Nombre es muy largo"),
  phone: z
    .string()
    .min(10, "Teléfono debe tener al menos 10 dígitos")
    .regex(/^\d+$/, "Telfono debe ser solo números"),
  email: z.string().email("E-mail invalido"),
  message: z
    .string()
    .min(10, "Se requiere un mensaje")
    .max(500, "El mensaje es demasiado largo"),
});

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data with Zod
    const result = ContactFormSchema.safeParse(formData);

    if (result.success) {
      // Form is valid, proceed with form submission (e.g., send data to the server)
      console.log("Form data:", formData);
      setErrors({});
    } else {
      // Form is invalid, display errors
      const errorMessages = result.error.format();
      setErrors(errorMessages);
    }
  };

  return (
    <div className="h-full w-full p-3">
      <form onSubmit={handleSubmit}>
        {/* Full Name */}
        <div className="h-1/5 w-full flex flex-col mb-3">
          <label
            htmlFor="fullName"
            className="text-base md:text-lg lg:text-xl font-semibold tracking-wide text-primary"
          >
            Nombre Completo
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="James Herriot"
            value={formData.fullName}
            onChange={handleInputChange}
            required
            className="w-4/6 rounded-md p-2 border-2 border-primary"
          />
          {errors.fullName && (
            <p style={{ color: "red" }}>{errors.fullName._errors[0]}</p>
          )}
        </div>

        {/* Phone Number */}
        <div className="h-1/5 w-full flex flex-col mb-3">
          <label
            htmlFor="phone"
            className="text-base md:text-lg lg:text-xl font-semibold tracking-wide text-primary"
          >
            Número Celular
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="318-XXX-XXXX"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="w-4/6 rounded-md p-2 border-2 border-primary"
          />
          {errors.phone && (
            <p style={{ color: "red" }}>{errors.phone._errors[0]}</p>
          )}
        </div>

        {/* Email */}
        <div className="h-1/5 w-full flex flex-col mb-3">
          <label
            htmlFor="email"
            className="text-base md:text-lg lg:text-xl font-semibold tracking-wide text-primary"
          >
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            placeholder="herriot@james.com"
            onChange={handleInputChange}
            required
            className="w-4/6 rounded-md p-2 border-2 border-primary"
          />
          {errors.email && (
            <p style={{ color: "red" }}>{errors.email._errors[0]}</p>
          )}
        </div>

        {/* Message */}
        <div className="h-1/5 w-full flex flex-col mb-3">
          <label
            htmlFor="message"
            className="text-base md:text-lg lg:text-xl font-semibold tracking-wide text-primary"
          >
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Queremos saber de ti, cuéntanos que pasa por tu cabeza."
            required
            className="w-full rounded-md p-2 border-2 border-primary"
          ></textarea>
          {errors.message && (
            <p style={{ color: "red" }}>{errors.message._errors[0]}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="h-full w-full">
          <button
            type="submit"
            className="group w-2/5 h-10 flex flex-row gap-3 justify-center items-center rounded-full bg-secondary_light hover:bg-secondary border-2 border-secondary text-secondary hover:text-white tracking-wide transition-all duration-300"
          >
            <span className="icon-[iconamoon--send-duotone]  text-lg md:text-xl"></span>
            <p className="font-semibold  text-lg md:text-xl">Enviar</p>
          </button>
        </div>
      </form>
    </div>
  );
}
