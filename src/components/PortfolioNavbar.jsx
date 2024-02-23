import { Navbar, DarkThemeToggle, Flowbite, Dropdown } from "flowbite-react";
import { Link } from "react-router-dom";

export default function PortfolioNavbar() {
  return (
    <section>
      <div className="">
        <Navbar fluid rounded className="bg-transparent dark:bg-transparent">
          <Navbar.Brand></Navbar.Brand>
          <div className="flex md:order-2 lg:flex-row">
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse className="lg:hidden">
            <Flowbite>
              <DarkThemeToggle className="border-xl ml-4 flex self-center border-gray-700 hover:bg-gray-300 dark:border-gray-700" />
            </Flowbite>
            <Link
              to="/about"
              className="flex self-center rounded-md p-2 text-gray-700 hover:bg-gray-300 dark:text-gray-400"
            >
              Perfil
            </Link>
            <Link
              to="/projects"
              className="flex self-center rounded-md p-2 text-gray-700 hover:bg-gray-300 dark:text-gray-400"
            >
              Proyectos
            </Link>
            <Link
              to="/contact"
              className="flex self-center rounded-md p-2 text-gray-700 hover:bg-gray-300 dark:text-gray-400"
            >
              Contacto
            </Link>
            <article className="flex items-center justify-center p-2 text-gray-700 hover:bg-gray-300 dark:text-gray-400">
              <Dropdown className="" inline label="Herramientas">
                <Link to="/counter">
                  <Dropdown.Item>Contador de $</Dropdown.Item>
                </Link>
                <Link to="/get/cost">
                  <Dropdown.Item>Información de gastos</Dropdown.Item>
                </Link>
                <Link to="/payback">
                  <Dropdown.Item>Registro de devolución</Dropdown.Item>
                </Link>
              </Dropdown>
            </article>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </section>
  );
}
