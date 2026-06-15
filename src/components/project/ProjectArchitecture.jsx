//import GlassCard from '../common/GlassCard'

const ProjectArchitecture = ({ architecture, description, modules }) => {
  return (
    <section className="px-6 md:px-gutter max-w-container-max mx-auto py-24">
      <h2 className="font-headline-md text-headline-md text-on-surface">
        Arquitectura del sistema
      </h2>

      {description && (
        <p className="text-gray-600 mb-8 mt-4">
          {description}
        </p>
      )}

      {/* 1 columna en móvil, 2 columnas desde md */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Columna izquierda */}
        <div>
          <h3 className="mb-4 font-semibold">
            Principales módulos
          </h3>

          <div className="space-y-1">
            {modules.map((mod, i) => (
              <div
                key={i}
                className="text-gray-600"
              >
                * {mod}
              </div>
            ))}
          </div>
        </div>

        {/* Columna derecha */}
        <div className="p-8 rounded-2xl bg-black text-white">
          <p className="text-sm opacity-70 mb-4">
            Visualización general
          </p>

          <div className="grid gap-4">
            {architecture.map((item, i) => (
              <div
                key={i}
                className="p-4 bg-white/10 rounded-xl"
              >
                <p className="font-bold capitalize">
                  {item.type}
                </p>

                <p className="text-xs opacity-60">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProjectArchitecture;