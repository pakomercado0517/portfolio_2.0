import useAllData from "../hooks/useAllData";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ModalComponent from "./ModalComponent";
import FooterComponent from "./FooterComponent";

export default function ProjectsComponent() {
  const [openModal, setOpenModal] = useState("");
  const [isProject, setIsProject] = useState({});
  const { projectsData } = useAllData();

  const handleOpenModal = (data) => {
    setOpenModal("open");
    setIsProject(data);
  };
  const handleCloseModal = () => setOpenModal("close");

  if (!projectsData) return <h1>Cargando...</h1>;

  return (
    <section className="bg-white lg:rounded-2xl dark:bg-black p-6">
      <div className="container mb-8 px-4 sm:px-5 md:px-10 lg:px-[60px]">
        <div className="py-12">
          <h2 className="after-effect after:left-72 mt-12 lg:mt-0">
            Proyectos
          </h2>
        </div>
        <article className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              data={project}
              handleClick={() => handleOpenModal(project)}
            />
          ))}
        </article>
      </div>
      <ModalComponent
        openModal={openModal}
        closeModal={handleCloseModal}
        data={isProject}
      />
      <FooterComponent />
    </section>
  );
}
