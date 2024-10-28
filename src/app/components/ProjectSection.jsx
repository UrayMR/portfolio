import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectsData = [
  {
    id: 1,
    title: "DapoerControl",
    description:
      "Cashier + Chef Web Application with Laravel, PIBITI 2024 Final Project",
    image: "/images/projects/daco.png",
  },
  {
    id: 2,
    title: "HyTrack",
    description: "Plants Controller Web Application with PHP Native",
    image: "/images/projects/hytrack.png",
  },
  {
    id: 3,
    title: "MouseRUN!",
    description: "Game Web",
    image: "/images/projects/game.png",
  },
];

const ProjectSection = () => {
  return (
    <section id="projects">
      <div className="mt-32">
        <h2 className="mb-20 mt-4 text-center text-4xl font-bold text-white">
          My Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-3 md:gap-12">
          {ProjectsData.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
