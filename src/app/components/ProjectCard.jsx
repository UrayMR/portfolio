import React from "react";

const ProjectCard = ({ imgUrl, title, description }) => {
  return (
    
    <div className="group flex flex-col rounded-[1rem] border border-purple-500/30 bg-gray-900/50 pb-4 transition-all duration-300 hover:-translate-y-5 hover:border-purple-500/60 hover:shadow-lg hover:shadow-purple-500/20">
      <div
        className="relative h-52 rounded-t-xl md:h-[15rem]"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="bg-[#181818]py-6 mt-1 rounded-b-xl px-4 text-white">
        <h5 className="mb-2 text-xl font-semibold">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
