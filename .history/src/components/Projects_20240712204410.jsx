import { useState } from "react";
import { content } from "../Content";
import ProjectModal from "./ProjectModal";

const Projects = () => {
  const { Projects } = content;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedProject(null);
  };

  return (
    <section className="bg-bg_light_primary" id="projects">
      <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-between">
        <div>
          <h2 className="title" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {Projects.subtitle}
          </h4>
          <br />
        </div>
        <div className="flex">
          {Projects.project_content.map((project, i) => (
            <div
              key={i}
              data-aos="fade-up"
              className="bg-white sm:cursor-pointer 
              relative group w-full flex flex-col items-center
              gap-5 p-5 max-w-xs rounded-md border-2 border-slate-200"
              onClick={() => openModal(project)}
            >
              <img src={project.image} alt="..." className="w-full h-48 object-cover rounded-md" />
              <h5 className="font-bold font-Poppins">{project.title}</h5>
            </div>
          ))}
        </div>
      </div>
      {selectedProject && (
        <ProjectModal isOpen={modalIsOpen} onRequestClose={closeModal} project={selectedProject} />
      )}
    </section>
  );
};

export default Projects;
