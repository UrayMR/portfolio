"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    const navbarHeight = 80; // Adjust based on your navbar height

    if (targetElement) {
      const elementPosition =
        targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-10 mx-10 bg-[#121212] bg-opacity-100 py-4">
      <div className="mx-auto flex flex-wrap items-center justify-between px-4 py-2">
        <Link
          href={"/"}
          className="text-2xl font-semibold text-white md:text-4xl"
        >
          Ray's
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center rounded border border-slate-200 px-3 py-2 text-slate-200 hover:border-white hover:text-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center rounded border border-slate-200 px-3 py-2 text-slate-200 hover:border-white hover:text-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div id="navbar" className="menu hidden md:block md:w-auto">
          <ul className="mt-0 flex p-4 md:flex-row md:space-x-8 md:p-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  href={link.path}
                  onClick={(e) => handleScroll(e, link.path)}
                  title={link.title}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? (
        <MenuOverlay links={navLinks} handleScroll={handleScroll} />
      ) : null}
    </nav>
  );
};

export default Navbar;
