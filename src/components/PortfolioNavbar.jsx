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
              <DarkThemeToggle className="flex self-center border-xl border-gray-700 dark:border-gray-700 ml-4" />
            </Flowbite>
            <Link
              to="/portfolio/about"
              className="flex self-center text-gray-400 p-2 rounded-md hover:bg-gray-700"
            >
              Perfil
            </Link>
            <Link
              to="/portfolio/projects"
              className="flex self-center text-gray-400 p-2 rounded-md hover:bg-gray-700"
            >
              Proyectos
            </Link>
            <Link
              to="/portfolio/contact"
              className="flex self-center text-gray-400 p-2 rounded-md hover:bg-gray-700"
            >
              Contacto
            </Link>
            <article className="text-gray-400 flex items-center">
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
