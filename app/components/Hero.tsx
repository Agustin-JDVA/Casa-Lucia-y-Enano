export default function Hero() {
  return (
    <section className="relative h-screen w-screen overflow-hidden">
      <video
        src="/video/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/25" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-[family:var(--font-wix)] text-white text-7xl md:text-9xl font-bold tracking-[0.18em] uppercase">
            Casa lucia y enano
          </h1>

          <p className="mt-6 text-white/80 text-lg tracking-[0.4em] uppercase">
            Montevideo · Uruguay
          </p>
        </div>
      </div>
    </section>
  );
}