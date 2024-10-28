import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPhp,
  FaBootstrap,
  FaLaravel,
  FaReact,
  FaDatabase,
} from "react-icons/fa";
import { FaC } from "react-icons/fa6";
import { SiTailwindcss, SiNextdotjs, SiMicrosoftexcel } from "react-icons/si";

const SkillCard = ({ icon, name }) => (
  <div className="group flex flex-col items-center justify-center gap-3 rounded-lg border border-purple-500/30 bg-gray-900/50 p-6 transition-all duration-300 hover:border-purple-500/60 hover:shadow-lg hover:shadow-purple-500/20">
    <div className="text-6xl transition-all duration-300 group-hover:text-purple-500">
      {icon}
    </div>
    <span className="text-sm text-gray-300 opacity-0 transition-all duration-300 group-hover:opacity-100">
      {name}
    </span>
  </div>
);

const ProfessionalSkillset = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "PHP", icon: <FaPhp /> },
    { name: "Bootstrap", icon: <FaBootstrap /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "Laravel", icon: <FaLaravel /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "React", icon: <FaReact /> },
    { name: "MySQL", icon: <FaDatabase /> },
    { name: "Excel", icon: <SiMicrosoftexcel /> },
    { name: "C", icon: <FaC /> },
  ];

  return (
    <section className="w-full px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold md:text-4xl">
            <span className="text-white">Professional</span>{" "}
            <span className="bg-gradient-to-tl from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Skillset
            </span>
          </h2>
          <div className="mb-8 text-xl text-gray-400">Web Development</div>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <SkillCard key={index} icon={skill.icon} name={skill.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalSkillset;
