export default function Plans() {
  return (
    <section id="planos" className="bg-white">

      <div className="min-h-screen flex items-center justify-center px-8 py-16">
        <img
          src="/planos/planta-alta.jpg"
          alt="Planta Alta"
          className="max-w-full max-h-[90vh] object-contain"
        />
      </div>

      <div className="min-h-screen flex items-center justify-center px-8 py-16">
        <img
          src="/planos/planta-baja.jpg"
          alt="Planta Baja"
          className="max-w-full max-h-[90vh] object-contain"
        />
      </div>

    </section>
  );
}