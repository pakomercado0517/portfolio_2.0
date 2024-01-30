import { useState } from "react";
import { Navbar, Flowbite, DarkThemeToggle } from "flowbite-react";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { FiCodesandbox } from "react-icons/fi";
import { RiContactsBookLine } from "react-icons/ri";

export default function NavbarTwo() {
  const [nameLink, setNameLink] = useState("");

  const activeSelectorClass =
    "text-white lg:bg-gradient-to-r lg:dark:bg-gradient-to-r lg:dark:from-[#FA5252] lg:dark:to-[#DD2476] from-[#FA5252] to-[#DD2476] ";

  const handleChange = (e) => {
    setNameLink(e.target.name);
  };

  return (
    <header className="relative lg:w-[526px] h-[144px] hidden lg:block p-[30px] ml-auto mb-10 rounded-[16px] bg-white dark:bg-[#111111] ">
      <div className="absolute -top-5 -right-4  rounded-full border-martinique-950">
        <Flowbite>
          <DarkThemeToggle className="text-white bg-martinique-950 rounded-full hover:bg-martinique-600 dark:bg-[#111111] dark:text-[#A6A6A6] dark:border-[#A6A6A6]" />
        </Flowbite>
      </div>
      <Navbar className="bg-transparent dark:bg-transparent" fluid rounded>
        {/* <Navbar.Toggle /> */}
        <div className="mx-auto">
          <Navbar.Collapse className="w-full h-auto">
            <Link
              to="/portfolio/about"
              name="about"
              className={`${
                nameLink === "about" ? activeSelectorClass : ""
              } px-3 w-full h-20 rounded-[10px]  cursor-pointer  transition-all duration-300 ease-in-out    font-poppins   font-medium mx-2.5  text-xtiny text-gray-lite dark:text-[#A6A6A6]    justify-center flex flex-col items-center`}
              onClick={handleChange}
            >
              <FaRegUser className={`text-xl mb-1 mx-auto`} />
              Perfil
            </Link>
            {/* <Navbar.Link>
              <Link
                className={`${
                  nameLink === "resume" ? activeSelectorClass : ""
                } px-3 w-full h-20 rounded-[10px]  cursor-pointer  transition-all duration-300 ease-in-out    font-poppins  font-medium mx-2.5  text-xtiny text-gray-lite dark:text-[#A6A6A6]    justify-center flex flex-col items-center`}
                onClick={handleChange}
                name="resume"
              >
                {" "}
                <CgNotes className="text-xl mb-1 mx-auto" /> CV
              </Link>
            </Navbar.Link> */}

            <Link
              to="/portfolio/projects"
              className={`${
                nameLink === "works" ? activeSelectorClass : ""
              } w-full h-20 rounded-[10px]  cursor-pointer  transition-all duration-300 ease-in-out    font-poppins   font-medium mx-2.5  text-xtiny text-gray-lite dark:text-[#A6A6A6]    justify-center flex flex-col items-center`}
              onClick={handleChange}
              name="works"
            >
              {" "}
              <FiCodesandbox className="text-xl mb-1 mx-auto" /> Proyectos
            </Link>

            <Link
              to="/portfolio/contact"
              className={`${
                nameLink === "contact" ? activeSelectorClass : ""
              } w-full h-20 rounded-[10px]  cursor-pointer  transition-all duration-300 ease-in-out    font-poppins   font-medium mx-2.5  text-xtiny text-gray-lite dark:text-[#A6A6A6]    justify-center flex flex-col items-center`}
              onClick={handleChange}
              name="contact"
            >
              <RiContactsBookLine className="text-xl mb-1 mx-auto" /> Contacto
            </Link>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </header>
  );
}
