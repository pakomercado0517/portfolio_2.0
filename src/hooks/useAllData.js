import { FaCode, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiExpress,
  SiRedux,
  SiSequelize,
  SiPostgresql,
  SiTailwindcss,
} from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { BiLogoCss3, BiLogoJavascript } from "react-icons/bi";

export default function useAllData() {
  const animateClass =
    "hover:animate-jump hover:animate-once hover:animate-delay-100 hover:animate-ease-linear hover:shadow-6xl";

  const serviceData = [
    {
      id: 1,
      title: "Fullstack Developer",
      description:
        "Desarrollador Fullstack enfocado con diferentes frameworks enfocados con el lenguaje de programación Javascript",
      icon: FaCode,
    },
  ];

  const frameworksData = [
    {
      id: 1,
      title: "Node.js",
      icon: FaNodeJs,
      iconClass: "w-28 h-28",
      color: `p-4 text-green-400 border border-green-400 shadow-md shadow-green-400 rounded-full ${animateClass}`,
    },
    {
      id: 2,
      title: "React",
      icon: FaReact,
      iconClass: "w-28 h-28",
      color: `p-4 text-blue-600 border border-md border-blue-600 rounded-full shadow-md shadow-blue-600 ${animateClass}`,
    },
    {
      id: 3,
      title: "Express.js",
      icon: SiExpress,
      iconClass: "w-28 h-28",
      color: `p-4  border border-sm border-gray-400 rounded-full shadow-md shadow-gray-400 ${animateClass}`,
    },
    {
      id: 4,
      title: "Redux",
      icon: SiRedux,
      iconClass: "w-28 h-28",
      color: `p-4 text-purple-500 text-purple-500 border border-sm border-purple-500 rounded-full shadow-md shadow-purple-500 ${animateClass}`,
    },
    {
      id: 5,
      title: "Sequelize",
      icon: SiSequelize,
      iconClass: "w-28 h-28",
      color: `p-4 text-blue-400 text-blue-400 border border-sm border-blue-400 rounded-full shadow-md shadow-blue-400 ${animateClass}`,
    },
    {
      id: 5,
      title: "PostgreSQL",
      icon: SiPostgresql,
      iconClass: "w-28 h-28",
      color: `p-4 text-blue-500 text-blue-500 border border-sm border-blue-500 rounded-full shadow-md shadow-blue-500 ${animateClass}`,
    },
    {
      id: 6,
      title: "Tailwind CSS",
      icon: SiTailwindcss,
      iconClass: "w-28 h-28",
      color: `p-4 text-cyan-500 text-cyan-500 border border-sm border-cyan-500 rounded-full shadow-md shadow-cyan-500 ${animateClass}`,
    },
    {
      id: 7,
      title: "HTML",
      icon: AiFillHtml5,
      iconClass: "w-28 h-28",
      color: `p-4 text-orange-500 text-orange-500 border border-sm border-orange-500 rounded-full shadow-md shadow-orange-500 ${animateClass}`,
    },
    {
      id: 8,
      title: "CSS",
      icon: BiLogoCss3,
      iconClass: "w-28 h-28",
      color: `p-4 text-blue-700 text-blue-700 border border-sm border-blue-700 rounded-full shadow-md shadow-blue-700 ${animateClass}`,
    },
    {
      id: 9,
      title: "Javascript",
      icon: BiLogoJavascript,
      iconClass: "w-28 h-28",
      color: `p-4 text-yellow-300 text-yellow-300 border border-sm border-yellow-300 rounded-full shadow-md shadow-yellow-300 ${animateClass}`,
    },
  ];

  const projectsData = [
    {
      id: 1,
      title: "ServIO",
      description:
        "Una aplicaición hecha en el bootcamp de #soyHenry. Su fin, brindar un servicio donde puedes cubrir algún tipo de necesidad recurriendo a diferentes tipos de profesionales. Al igual, puedes registrarte como profesional y poder así generar un ingreso extra. La aplicación mantiene un control de calidad en la relación cliente-profesional brindando la mejor garantía posible en ambas partes.",
      img: "https://firebasestorage.googleapis.com/v0/b/servio-34472.appspot.com/o/portfolio-projects%2FCaptura%20de%20Pantalla%202022-01-25%20a%20la(s)%205.26.41%20p.m..png?alt=media&token=bcffe6c5-2aa3-4f5f-856b-9c4db6fbe89f",
      href: "https://serv-io.surge.sh/",
    },
    {
      id: 2,
      title: "Catálogos de Sissy",
      description:
        "Esta aplicación te ayuda a tener un mejor alcance de clientes, si te dedicas a vender productos por catálogo. Se crea una propia API Rest con la información y enlaces a los diferentes catálogos, y así poder mostrarlos de manera online a más personas. Además, tiene un formulario para el contacto con el vendedor para cotizaciones.",
      img: "https://firebasestorage.googleapis.com/v0/b/servio-34472.appspot.com/o/portfolio-projects%2FCaptura%20de%20Pantalla%202022-01-25%20a%20la(s)%205.26.14%20p.m..png?alt=media&token=41332a5c-441d-4904-a307-2513c63336c5",
      href: "https://catalogos-de-sissy.surge.sh/",
    },
    {
      id: 3,
      title: "Náutica SerCyn",
      description:
        "Es una página web, orientada a servicios turísticos, de acuerdo a un negocio local donde se da servicios náuticos a diferentes destinos. También, tiene un método de contacto y verificación del clima, ya que al ser un servicio náutico, depende mucho del estado metereológico.",
      img: "https://firebasestorage.googleapis.com/v0/b/servio-34472.appspot.com/o/portfolio-projects%2FCaptura%20de%20Pantalla%202022-01-25%20a%20la(s)%205.25.38%20p.m..png?alt=media&token=09e7a9af-88a1-48dc-8419-9de0bc84e5f9",
      href: "https://www.sercyn.com/",
    },
    {
      id: 4,
      title: "McLovit",
      description:
        "Esta es una app hecha con React Native para los diferentes dispositiovos móviles junto con el frameworf de Expo.io. Desarrollada por un equipo formado en el bootcamp de #soyHenry. Se trata de una aplicación de citas, pero esta vez, para personas que estan en el rubro de IT. Donde se aplican terminologías a fines de este rubro, por ejemplo hacer un challenge (contestar un formulario) para poder hacer match con la persona que te gusta. Tiene una suscripción de pago, en la que tienes algunos beneficios extras.",
      img: "https://firebasestorage.googleapis.com/v0/b/servio-34472.appspot.com/o/portfolio-projects%2FCaptura%20de%20Pantalla%202022-01-25%20a%20la(s)%207.04.14%20p.m.%20(2).png?alt=media&token=d23317a1-3694-49c3-8f8b-16302c46577f",
      href: "https://github.com/carolnavia/Mc-Loving-ForEver",
    },
    {
      id: 5,
      title: "Henry Pokemon App",
      description:
        "Esta es una SPA (Single Page Aplication) hecha individualmente, para el bootcamp de #soyHenry donde se pone a prueba lo aprendido a lo largo del mismo, acerca de las herramientas que se utilizaron en la elaboración de la App. Donde consume una API Rest de pokemon, para mostrar, filtrar y/o buscar los pokemones más te gusten. También, puedes crear el pokemon que más te agrade y mostrarlo en el home de la App.",
      img: "https://firebasestorage.googleapis.com/v0/b/servio-34472.appspot.com/o/portfolio-projects%2FCaptura%20de%20Pantalla%202022-01-25%20a%20la(s)%206.57.08%20p.m..png?alt=media&token=d8f07898-cc25-4edc-b300-0b095cfec178",
      href: "https://pako-pokedex.surge.sh/",
    },
    {
      id: 6,
      title: "Henry Weather App",
      description:
        "Esta es una SPA (Single Page Aplication) hecha individualmente, para el bootcamp de #soyHenry donde se pone a prueba lo aprendido a lo largo del mismo, acerca de las herramientas que se utilizaron en la elaboración de la App. Donde consumimos una API Rest del clima, hecha con React Js y Redux para realizar búsquedas las ciudades a las que gustes ver sus propiedades climatológicas en tiempo real.",
      img: "https://firebasestorage.googleapis.com/v0/b/servio-34472.appspot.com/o/portfolio-projects%2FCaptura%20de%20Pantalla%202022-02-06%20a%20la(s)%2010.07.50%20p.m..png?alt=media&token=3f39cbd1-6800-4ebf-b37c-9f8844cac6f4",
      href: "https://pako-weather.surge.sh/",
    },
  ];

  return { serviceData, frameworksData, projectsData };
}
