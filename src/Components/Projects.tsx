import { Link } from "react-router-dom";
import { ProjectData } from "../data";


const Projects = () => {
  const renderProjects = ProjectData.map((project) => {
    return (
      <div key={project.id} className="relative group ">
        <div className="bg-[#663399] absolute z-30 top-0 right-0 text-white font-semibold px-4 py-3">
          {project.day}
        </div>
        <img src={project.img} alt="projectImage" className=" max-w-full" />
        <div
          className="bg-[#9703fc] space-y-4 w-full h-full group-hover:opacity-100 
        transition-all duration-75 opacity-0 text-white absolute bottom-[50%] 
        right-[50%] transform translate-x-1/2 z-40 translate-y-1/2 flex justify-center items-center flex-col"
        >
          <h3 className="text-[22px] font-semibold">{project.name}</h3>
          <Link
          to={`/${project.project}`}
            className="bg-[#47068e] px-2.5 py-1.5  transition-all duration-75 hover:scale-95  "

          >
            Live Demo
          </Link>
        </div>
      </div>
    );
  });

  return (
    <section
      id="projects"
      className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-center bg-gray-200"
    >
      {renderProjects}
    </section>
  );
};

export default Projects;
