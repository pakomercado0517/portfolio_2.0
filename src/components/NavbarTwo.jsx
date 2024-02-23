import { useState } from "react";
import { Navbar, Flowbite, DarkThemeToggle, Dropdown } from "flowbite-react";
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
    <header className="relative mb-10 ml-auto hidden h-[144px] rounded-[16px] bg-white p-[30px] dark:bg-[#111111] lg:block lg:w-[526px] ">
      <div className="absolute -right-4 -top-5  rounded-full border-martinique-950">
        <Flowbite>
          <DarkThemeToggle className=" rounded-full border bg-white shadow-md hover:bg-martinique-950 hover:text-white dark:border-[#A6A6A6] dark:bg-[#111111] dark:text-[#A6A6A6]" />
        </Flowbite>
      </div>
      <Navbar className="bg-transparent dark:bg-transparent" fluid rounded>
        {/* <Navbar.Toggle /> */}

        <div className="mx-auto">
          <Navbar.Collapse className="h-auto w-full">
            <Link
              to="/portfolio/about"
              name="about"
              className={`${
                nameLink === "about" ? activeSelectorClass : ""
              } text-gray-lite mx-2.5 flex h-20  w-full  cursor-pointer flex-col items-center    justify-center   rounded-[10px] px-3  font-poppins text-xtiny font-medium    transition-all duration-300 ease-in-out dark:text-[#A6A6A6]`}
              onClick={handleChange}
            >
              <FaRegUser className={`mx-auto mb-1 text-xl`} />
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
              } text-gray-lite mx-2.5 flex  h-20  w-full cursor-pointer flex-col    items-center   justify-center rounded-[10px]  font-poppins text-xtiny font-medium    transition-all duration-300 ease-in-out dark:text-[#A6A6A6]`}
              onClick={handleChange}
              name="works"
            >
              {" "}
              <FiCodesandbox className="mx-auto mb-1 text-xl" /> Proyectos
            </Link>

            <Link
              to="/portfolio/contact"
              className={`${
                nameLink === "contact" ? activeSelectorClass : ""
              } text-gray-lite mx-2.5 flex  h-20  w-full cursor-pointer flex-col    items-center   justify-center rounded-[10px]  font-poppins text-xtiny font-medium    transition-all duration-300 ease-in-out dark:text-[#A6A6A6]`}
              onClick={handleChange}
              name="contact"
            >
              <RiContactsBookLine className="mx-auto mb-1 text-xl" /> Contacto
            </Link>
            <div className="flex items-center dark:text-[#A6A6A6]">
              <Dropdown inline label="Herramientas">
                <Link className="dark:text-[#A6A6A6]" to="/counter">
                  <Dropdown.Item>Contador de $</Dropdown.Item>
                </Link>
                <Link className="dark:text-[#A6A6A6]" to="/get/cost">
                  <Dropdown.Item>Información de gastos</Dropdown.Item>
                </Link>
                <Link className="dark:text-[#A6A6A6]" to="/payback">
                  <Dropdown.Item>Registro de devolución</Dropdown.Item>
                </Link>
              </Dropdown>
            </div>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </header>
  );
}
