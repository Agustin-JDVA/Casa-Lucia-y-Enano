"use client";

import { useEffect, useRef, useState } from "react";

export default function Tour360() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const script = document.createElement("script");

    script.src = "https://static.kuula.io/embed.js";
    script.setAttribute(
      "data-kuula",
      "https://kuula.co/share/collection/7TsbM?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1"
    );
    script.setAttribute("data-width", "100%");
    script.setAttribute("data-height", "100%");

    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <section className="h-screen w-full bg-black">
      <div className="relative h-full w-full">
        <div
          ref={containerRef}
          className={`h-full w-full ${
            active ? "touch-none" : "touch-pan-y"
          }`}
          onClick={() => setActive(true)}
        />

        {!active && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="rounded-full bg-black/50 px-5 py-3 text-sm tracking-[0.2em] text-white uppercase backdrop-blur-sm">
              Toca para explorar
            </div>
          </div>
        )}

        {active && (
          <button
            onClick={() => setActive(false)}
            className="absolute bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full bg-black/60 px-5 py-3 text-xs tracking-[0.2em] text-white uppercase backdrop-blur-sm transition hover:bg-black/80"
          >
            Salir del tour
          </button>
        )}
      </div>
    </section>
  );
}