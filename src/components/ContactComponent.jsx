import { useState, useEffect } from "react";
import { TextInput, Label } from "flowbite-react";
import { FaWhatsapp } from "react-icons/fa";
import FooterComponent from "./FooterComponent";

export default function ContactComponent() {
  const [dataForm, setDataForm] = useState({});
  const [buttonLink, setButtonLink] = useState("");
  const handleChange = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setButtonLink(
      `https://api.whatsapp.com/send?phone=5217831046697&text=Hola%2C%20soy%20${dataForm.name}%2C%20me%20contacto%20contigo%20desde%20tu%20portfolio%2C%20mi%20email%20es%20el%20siguiente%20para%20cualquier%20contacto%3A%20${dataForm.email}%20y%20te%20dejo%20los%20detalles%20en%20el%20siguiente%20mensaje%3A%20${dataForm.message}`
    );
    return () => {
      setButtonLink("");
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [buttonLink, dataForm]);

  console.log("dataForm", dataForm);
  return (
    <section className="bg-white lg:rounded-2xl dark:bg-black p-6">
      <h3 className="text-4xl dark:text-white text-center">
        Contáctame por Whatsapp o navega por mis diferentes redes sociales...
      </h3>

      <form className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-2">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Tu nombre" />
          </div>
          <TextInput
            onChange={handleChange}
            color="gray"
            name="name"
            type="text"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Email" />
          </div>
          <TextInput
            onChange={handleChange}
            color="gray"
            name="email"
            type="email"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="message" value="Mensaje" />
          </div>
          <TextInput
            onChange={handleChange}
            color="gray"
            name="message"
            type="text"
          />
        </div>
        <div className="flex justify-center items-center mt-5 hover:text-white">
          <a
            href={buttonLink}
            target="_blank"
            rel="noreferrer"
            className="w-44 flex items-center justify-center text-base px-6 py-2 rounded-lg border border-green-700 text-green-700 hover:bg-green-700 hover:text-white"
          >
            <FaWhatsapp className="mr-3" />
            <p className="">Enviar</p>
          </a>
        </div>
      </form>
      <FooterComponent />
    </section>
  );
}
