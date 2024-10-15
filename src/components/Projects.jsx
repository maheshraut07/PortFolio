import React from "react";
import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Projects</h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <img
                src={project.image}
                width={350}
                height={200}
                alt={project.title}
                className="mb-8 rounded"
              />
            </div>
            <div className="w-full mr-3 max-w-xl lg:w-3/4">
              <div className="flex flex-wrap gap-5">
                <span className="mb-1 font-semibold">{project.title}</span>
                <span className="mb-2">{project.duration}</span>
              </div>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div className="flex flex-wrap">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="w-fit mr-2 mb-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium ">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
