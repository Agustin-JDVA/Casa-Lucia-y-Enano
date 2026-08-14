"use client";

import { useEffect, useState } from "react";

export default function Menu() {
  const [darkText, setDarkText] = useState(false);

  useEffect(() => {
    const updateColor = () => {
      // Miramos qué sección hay debajo del menú
      const element = document.elementFromPoint(10, 80);

      if (!element) return;

      const section = element.closest("section[id]");

      if (!section) return;

      const sectionId = section.id;

      // Fondos predominantemente claros
      setDarkText(sectionId === "planos" || sectionId === "info");
    };

    updateColor();

    window.addEventListener("scroll", updateColor);
    window.addEventListener("resize", updateColor);

    return () => {
      window.removeEventListener("scroll", updateColor);
      window.removeEventListener("resize", updateColor);
    };
  }, []);

  return (
    <nav className="pointer-events-none fixed top-4 left-1/2 z-[99999] w-full -translate-x-1/2 px-3 sm:top-5 sm:px-5 md:top-7">
      <div
        className={`mx-auto flex w-full items-center justify-center gap-3 whitespace-nowrap text-[9px] font-medium uppercase tracking-[0.08em] transition-colors duration-300 sm:gap-5 sm:text-[11px] sm:tracking-[0.12em] md:gap-8 md:text-sm md:tracking-[0.14em] lg:gap-12 lg:text-base lg:tracking-[0.16em] xl:gap-14 ${
          darkText ? "text-black" : "text-white"
        }`}
      >
        <a className="pointer-events-auto" href="#inicio">
          Inicio
        </a>

        <a className="pointer-events-auto" href="#renders">
          Renders
        </a>

        <a className="pointer-events-auto" href="#tours">
          Tours
        </a>

        <a className="pointer-events-auto" href="#planos">
          Planos
        </a>

        <a className="pointer-events-auto" href="#info">
          Información General
        </a>
      </div>
    </nav>
  );
}