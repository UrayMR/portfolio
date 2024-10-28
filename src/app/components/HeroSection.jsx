"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="mb-[10rem] mt-[8.5rem]">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Image Section */}
        <div className="order-1 col-span-5 place-self-center lg:order-2 lg:mt-0">
          <div className="relative h-[250px] w-[250px] lg:h-[400px] lg:w-[400px]">
            {/* Glow effect layers */}
            <div className="absolute inset-0 animate-[pulse_1s_infinite] rounded-full bg-gradient-to-r from-pink-500 to-purple-500 opacity-70 blur-xl"></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 opacity-70 blur-lg"></div>

            {/* Image container */}
            <div className="border-gradient-to-r relative h-full w-full overflow-hidden rounded-full border-4 bg-[#181818] from-pink-500 to-purple-500">
              <Image
                className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 object-cover mix-blend-screen"
                src="/images/ray.jpg"
                alt="ini foto saya"
                width={600}
                height={600}
                priority
              />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="order-2 col-span-7 mt-8 place-self-center text-center sm:text-left lg:order-1 lg:mt-0"
        >
          <h1 className="mb-4 text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Hello, I'm{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={["Uray", 1000, "Web Developer", 1000]}
              wrapper="span"
              speed={50}
              deletionSpeed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-base text-[#ADB7BE] sm:text-lg lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            vero!
          </p>
          <br />
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <button className="group relative mb-5 w-full overflow-hidden rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 px-6 py-3 text-white transition-all duration-300 hover:bg-gradient-to-tr hover:from-pink-500 hover:via-purple-500 hover:to-blue-500 sm:mb-0 sm:w-fit">
              <span className="z-1 relative flex items-center justify-center gap-2">
                Download CV
              </span>
              <div className="absolute inset-0 -translate-x-full rotate-12 transform bg-white opacity-20 transition-transform duration-1000 group-hover:translate-x-full"></div>
            </button>
            <div className="group relative inline-flex">
              <div className="transitiona-all animate-tilt absolute -inset-px rounded-xl bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] opacity-70 blur-lg duration-1000 group-hover:-inset-1 group-hover:opacity-100 group-hover:duration-200"></div>
              <a
                href="https://wa.me/628113491880"
                className="font-pj relative inline-flex items-center justify-center rounded-xl bg-gray-900 px-8 py-4 text-lg font-bold text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                role="button"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
