export default function Tour360() {
  return (
    <section className="h-screen w-full bg-black">
      <iframe
        src="https://kuula.co/share/collection/7TsbM?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1"
        className="h-full w-full border-0"
        allowFullScreen
        allow="xr-spatial-tracking; gyroscope; accelerometer; fullscreen"
        title="Tour 360°"
      />
    </section>
  );
}