"use client";

import { useEffect, useRef } from "react";

export default function Tour360() {
  const containerRef = useRef<HTMLDivElement>(null);

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
      <div
        ref={containerRef}
        className="h-full w-full"
      />
    </section>
  );
}