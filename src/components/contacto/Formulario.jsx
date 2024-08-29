import React, { useState } from "react";
import { z } from "zod";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Zod schema for validation
const ContactFormSchema = z.object({
  fullName: z
    .string()
    .min(1, "Se requiere nombre completo")
    .max(100, "El nombre es muy largo"),
  phone: z
    .string()
    .min(10, "El teléfono debe tener al menos 10 dígitos")
    .regex(/^\d+$/, "El teléfono debe ser solo números"),
  email: z.string().email("Correo electrónico inválido"),
  message: z
    .string()
    .min(10, "El mensaje debe contener al menos 10 caracteres")
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
  const [processing, setProcessing] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProcessing(true);

    // Validate form data with Zod
    const result = ContactFormSchema.safeParse(formData);

    if (result.success) {
      // Form is valid, proceed with form submission
      fetch("https://formsubmit.co/ajax/nico.rc8@hotmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.fullName,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Form submitted successfully:", data);
          setProcessing(false);
          setFormData({
            fullName: "",
            phone: "",
            email: "",
            message: "",
          });
          toast.success("Email enviado!");
          // Optionally, handle success (e.g., show a success message, reset form, etc.)
        })
        .catch((error) => {
          console.error("Error submitting form:", error);
          setProcessing(false);
          // Optionally, handle error (e.g., show an error message)
        });

      setErrors({});
    } else {
      // Form is invalid, display errors
      const errorMessages = result.error.format();
      setErrors(errorMessages);
      setProcessing(false);
      toast.error("Inténtalo de nuevo!");
    }
  };

  return (
    <div className="h-full w-full p-3">
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        {/* Full Name */}
        <div className="h-1/5 w-full flex flex-col mb-3 animate-fade-in-up animate-delay-100 animate-duration-300">
          <label
            htmlFor="fullName"
            className="text-base md:text-lg lg:text-xl font-semibold tracking-wide text-primary"
          >
            Nombre completo
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
        <div className="h-1/5 w-full flex flex-col mb-3 animate-fade-in-up animate-delay-200 animate-duration-300">
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
        <div class="h-1/5 w-full flex flex-col mb-3 animate-fade-in-up animate-delay-300 animate-duration-300">
          <label
            htmlFor="email"
            className="text-base md:text-lg lg:text-xl font-semibold tracking-wide text-primary"
          >
            Correo electrónico
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
        <div className="h-1/5 w-full flex flex-col mb-3 animate-fade-in-up animate-delay-400 animate-duration-300">
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
            placeholder="Nos encantaría conocer tu opinión. Envíanos un correo y cuéntanos qué piensas."
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
            {processing ? (
              <span className="icon-[svg-spinners--blocks-shuffle-3] text-lg md:text-xl"></span>
            ) : (
              <span className="icon-[iconamoon--send-duotone] text-lg md:text-xl"></span>
            )}
            <p className="font-semibold text-lg md:text-xl">
              {processing ? "Enviando" : "Enviar"}
            </p>
          </button>
        </div>
      </form>
    </div>
  );
}
