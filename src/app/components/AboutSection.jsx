"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Informatika, Universitas Pembangunan Nasional "Veteran" Jawa Timur
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>PIBITI 2024:Laravel Beginner Course</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("hobby");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="mb-[5rem] mt-10 text-white lg:mt-24">
      <div className="flex flex-col items-center gap-8 px-4 py-8 md:grid md:grid-cols-2 xl:gap-16 xl:px-16">
        {/* Card Container */}
        <div className="h-[300px] w-full max-w-[300px] [perspective:1000px] sm:h-[350px] sm:max-w-[350px] md:h-[400px] md:max-w-[400px]">
          <div className="relative h-full w-full animate-[flip_5s_linear_infinite] rounded-xl shadow-xl [transform-style:preserve-3d]">
            {/* Front face */}
            <div className="absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden]">
              <Image
                className="h-full w-full rounded-3xl object-cover"
                src="/images/about.jpg"
                alt="ini foto saya sangat tampan"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>

            {/* Back face */}
            <div className="absolute inset-0 h-full w-full scale-x-[-1] rounded-xl bg-[url('/images/about.jpg')] bg-cover px-4 text-center text-slate-200 backdrop-blur-sm [backface-visibility:hidden] [transform:rotateY(180deg)] sm:px-8 md:px-12">
              <div className="flex min-h-full flex-col items-center justify-center">
                <h2 className="mb-2 text-xl font-bold text-red-500 sm:mb-4 sm:text-2xl">
                  #####
                </h2>
                <p className="mb-2 text-pretty text-center text-base sm:mb-4 sm:text-lg">
                  Arrested cuz too handsome
                </p>
                <a href="https://wa.me/628113491880" className="inline-flex">
                  <button className="my-2 inline-flex w-auto items-center rounded-full bg-purple-800 px-3 py-1.5 text-sm font-bold text-white hover:bg-pink-700 sm:px-4 sm:py-2 sm:text-base">
                    <span>Hire me pls</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* About Content */}
        <div className="group mt-4 h-full w-full rounded-[2rem] bg-purple-500 bg-opacity-10 bg-clip-padding px-4 py-4 text-left backdrop-blur backdrop-contrast-100 backdrop-saturate-100 backdrop-filter sm:px-5 md:mt-0">
          <div className="absolute -inset-1 z-[-1] rounded-[2rem] bg-gradient-to-r from-purple-600 to-pink-600 opacity-25 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
          <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            About Me
          </h2>
          <p className="text-sm sm:text-base lg:text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
            labore expedita assumenda vero? Qui cumque maiores magni quaerat
            quisquam dolorem possimus alias error saepe corporis ex, perferendis
            incidunt quod obcaecati placeat odio architecto quidem iusto porro
            veritatis? Tempore accusamus earum nam aliquam aliquid, eveniet
            consequuntur ipsum amet, voluptatibus ab repellendus!
          </p>
          <div className="mt-6 flex flex-row justify-start gap-2 sm:mt-8">
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-6 sm:mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
