"use client";

import { useEffect, useState } from "react";

export default function Tour360() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isExploring, setIsExploring] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(hover: none) and (pointer: coarse)"
    );

    setIsTouchDevice(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setIsTouchDevice(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const iframeInteractive = !isTouchDevice || isExploring;

  return (
    <section className="relative h-screen w-full bg-black">
      <iframe
        src="https://kuula.co/share/collection/7TsbM?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1"
        className={`h-full w-full border-0 ${
          iframeInteractive
            ? "pointer-events-auto"
            : "pointer-events-none"
        }`}
        allowFullScreen
        allow="xr-spatial-tracking; gyroscope; accelerometer; fullscreen"
        title="Tour 360°"
      />

      {isTouchDevice && !isExploring && (
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <button
            onClick={() => setIsExploring(true)}
            className="
              rounded-full
              bg-white
              px-10
              py-5
              text-base
              font-medium
              uppercase
              tracking-[0.18em]
              text-black
              shadow-xl
              transition-all
              duration-200
              hover:scale-105
              active:scale-95
            "
          >
            Explorar 360°
          </button>
        </div>
      )}

      {isTouchDevice && isExploring && (
        <button
          onClick={() => setIsExploring(false)}
          className="
            absolute
            right-6
            top-6
            z-30
            rounded-full
            bg-black/70
            px-6
            py-4
            text-sm
            font-medium
            uppercase
            tracking-[0.15em]
            text-white
            shadow-xl
            backdrop-blur-md
            transition-all
            duration-200
            hover:bg-black/85
            active:scale-95
          "
        >
          Salir del 360°
        </button>
      )}
    </section>
  );
}