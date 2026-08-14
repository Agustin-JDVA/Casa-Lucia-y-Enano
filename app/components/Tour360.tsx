"use client";

import { useEffect, useState } from "react";

export default function Tour360() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isExploring, setIsExploring] = useState(false);

  useEffect(() => {
    const checkTouchDevice = window.matchMedia(
      "(hover: none) and (pointer: coarse)"
    );

    setIsTouchDevice(checkTouchDevice.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setIsTouchDevice(event.matches);
    };

    checkTouchDevice.addEventListener("change", handleChange);

    return () => {
      checkTouchDevice.removeEventListener("change", handleChange);
    };
  }, []);

  const iframeInteractive = !isTouchDevice || isExploring;

  return (
    <section className="relative h-screen w-full bg-black">
      {/* Tour 360 */}
      <iframe
        src="https://kuula.co/share/collection/7TsbM?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1"
        className={`h-full w-full border-0 ${
          iframeInteractive ? "pointer-events-auto" : "pointer-events-none"
        }`}
        allowFullScreen
        allow="xr-spatial-tracking; gyroscope; accelerometer; fullscreen"
        title="Tour 360°"
      />

      {/* Controles solamente para dispositivos táctiles */}
      {isTouchDevice && (
        <>
          {!isExploring && (
            <button
              onClick={() => setIsExploring(true)}
              className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/90 px-6 py-4 text-sm font-medium uppercase tracking-[0.15em] text-black shadow-lg backdrop-blur-sm"
            >
              Explorar 360°
            </button>
          )}

          {isExploring && (
            <button
              onClick={() => setIsExploring(false)}
              className="absolute right-5 top-5 z-20 rounded-full bg-black/75 px-5 py-3 text-xs font-medium uppercase tracking-[0.15em] text-white shadow-lg backdrop-blur-sm"
            >
              Salir del 360°
            </button>
          )}
        </>
      )}
    </section>
  );
}