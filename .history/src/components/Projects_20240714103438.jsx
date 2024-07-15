import { useState } from "react";
import { content } from "../Content";
import { ProjectModal, CategoryDropdown } from "./ProjectModal";

const Projects = () => {
  const { Projects } = content;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 9;

  const openModal = (project) => {
    setSelectedProject(project);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedProject(null);
  };

  const uniqueCategories = [...new Set(Projects.project_content.flatMap(project => project.categories))];

  const filteredProjects = selectedCategory
    ? Projects.project_content.filter(project => project.categories.includes(selectedCategory))
    : Projects.project_content;

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
          <CategoryDropdown categories={uniqueCategories} handleCategorySelect={setSelectedCategory} />
        </div>
        <div className="flex flex-wrap gap-5">
          {currentProjects.map((project, i) => (
            <div
              key={i}
              data-aos="fade-up"
              className="bg-white sm:cursor-pointer relative group w-full flex flex-col items-center gap-5 p-5 max-w-xs rounded-md border-2 border-slate-200"
              onClick={() => openModal(project)}
            >
              <img src={project.image} alt="..." className="w-full h-48 object-cover rounded-md" />
              <h5 className="font-bold font-Poppins">{project.title}</h5>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          {Array.from({ length: Math.ceil(filteredProjects.length / projectsPerPage) }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`px-4 py-2 mx-1 border rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-white'}`}
            >
              {index + 1}
            </button>
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
