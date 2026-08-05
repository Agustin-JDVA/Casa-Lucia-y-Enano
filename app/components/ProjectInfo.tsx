export default function ProjectInfo() {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-8">
      <div className="max-w-5xl w-full">

        <h2 className="font-[family:var(--font-wix)] text-6xl font-bold uppercase mb-4">
          Información del Proyecto
        </h2>

        <p className="text-xl text-gray-500 mb-20">
          Casa Lucía y Enano · Montevideo · Uruguay
        </p>

        <div className="grid md:grid-cols-2 gap-24">

          <div>
            <h3 className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-8">
              Superficies
            </h3>

            <div className="space-y-8">

              <div>
                <p className="text-5xl font-bold">381 m²</p>
                <p className="text-gray-500">Superficie construida</p>
              </div>

              <div>
                <p className="text-5xl font-bold">103 m²</p>
                <p className="text-gray-500">Superficies exteriores</p>
              </div>

              <div>
                <p className="text-5xl font-bold">484 m²</p>
                <p className="text-gray-500">Superficie total</p>
              </div>

              <div>
                <p className="text-5xl font-bold">451 m²</p>
                <p className="text-gray-500">Superficie considerada</p>
              </div>

            </div>
          </div>

          <div>

            <h3 className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-8">
              Programa
            </h3>

            <div className="space-y-5 text-xl">

              <div className="flex justify-between">
                <span>Planta Baja</span>
                <strong>245 m²</strong>
              </div>

              <div className="flex justify-between">
                <span>Planta Alta</span>
                <strong>136 m²</strong>
              </div>

              <div className="flex justify-between">
                <span>Terraza</span>
                <strong>54 m²</strong>
              </div>

              <div className="flex justify-between">
                <span>Acceso + Cochera</span>
                <strong>49 m²</strong>
              </div>

              <div className="flex justify-between">
                <span>Piscina</span>
                <strong>18 m²</strong>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}