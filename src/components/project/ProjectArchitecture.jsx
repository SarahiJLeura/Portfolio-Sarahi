import GlassCard from '../common/GlassCard'

const ProjectArchitecture = () => {
  return (
    <section className="px-6 md:px-gutter max-w-container-max mx-auto py-24">
      <div className="grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <h2 className="font-headline-md text-headline-md text-on-surface mb-6 flex items-center gap-3">
            📄 Explicación de la arquitectura
          </h2>
          <p className="text-body-lg text-on-surface-variant mb-8">
            Diseñado bajo el patrón de arquitectura de micro-interacciones, el sistema utiliza <span className="text-primary font-semibold">Laravel 11</span> como núcleo reactivo. 
            La implementación de <span className="text-primary font-semibold">Livewire</span> permite una experiencia Single Page Application (SPA) sin la complejidad del JavaScript tradicional.
          </p>
          <ul className="flex flex-col gap-4">
            <li className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-primary text-sm">database</span>
              </div>
              <div>
                <h4 className="font-semibold text-on-surface">Base de Datos MySQL</h4>
                <p className="text-on-surface-variant text-sm">Estructura normalizada para escalabilidad y consistencia de datos.</p>
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-primary text-sm">bolt</span>
              </div>
              <div>
                <h4 className="font-semibold text-on-surface">TALL Stack</h4>
                <p className="text-on-surface-variant text-sm">Tailwind, Alpine.js, Laravel y Livewire para un desarrollo ágil y moderno.</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="md:col-span-7">
          <GlassCard className="p-8 border-primary/5 h-full relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/50 p-6 rounded-2xl border border-white">
                  <span className="text-primary font-label-sm block mb-2">FRONTEND</span>
                  <h5 className="font-display-lg text-xl mb-1">Blade & Livewire</h5>
                  <p className="text-xs text-on-surface-variant">Componentes reactivos y modulares.</p>
                </div>
                <div className="bg-white/50 p-6 rounded-2xl border border-white">
                  <span className="text-primary font-label-sm block mb-2">BACKEND</span>
                  <h5 className="font-display-lg text-xl mb-1">Laravel 11</h5>
                  <p className="text-xs text-on-surface-variant">Rutas protegidas y servicios robustos.</p>
                </div>
                <div className="col-span-2 bg-on-surface text-on-primary p-8 rounded-2xl">
                  <span className="text-primary-fixed-dim font-label-sm block mb-2">INTEGRACIÓN</span>
                  <h5 className="font-display-lg text-2xl mb-2">Comunicación en Tiempo Real</h5>
                  <p className="text-sm opacity-80">Eventos de Livewire para actualizaciones instantáneas del inventario sin recargar la página.</p>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}

export default ProjectArchitecture