//import GlassCard from '../common/GlassCard'

const ProjectVideo = ({ videoImage }) => {
  return (
    <section className="bg-surface-container-low py-20 mt-12 overflow-hidden relative">
      <div className="px-6 md:px-gutter max-w-container-max mx-auto">
        <div className="flex flex-col gap-10">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <h2 className="font-headline-md text-headline-md text-on-surface">Demo en Vivo</h2>
              <p className="text-on-surface-variant">Explora el flujo de trabajo completo</p>
            </div>
            <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-label-sm font-semibold flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">play_circle</span>
              Video de 3 minutos
            </div>
          </div>
          <div className="relative glass-card rounded-[2.5rem] overflow-hidden aspect-video ambient-glow">
            <img 
              className="w-full h-full object-cover opacity-80" 
              src={videoImage} 
              alt="Video demo preview"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-on-surface/20 hover:bg-on-surface/10 transition-colors cursor-pointer group">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  play_arrow
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectVideo