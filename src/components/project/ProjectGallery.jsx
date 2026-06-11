//import GlassCard from '../common/GlassCard'

const ProjectGallery = ({ images }) => {
  return (
    <section className="px-6 md:px-gutter max-w-container-max mx-auto py-12">
      <div className="flex flex-col gap-8">
        <div className="flex items-baseline justify-between">
          <h2 className="font-headline-md text-headline-md text-on-surface">Galería</h2>
          <span className="text-on-surface-variant opacity-60 font-label-sm">{images.length} capturas</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="col-span-2 row-span-2 glass-card rounded-3xl overflow-hidden aspect-square md:aspect-video">
            <img 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
              src={images[0]} 
              alt="Project screenshot"
            />
          </div>
          <div className="glass-card rounded-3xl overflow-hidden aspect-square">
            <img 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
              src={images[1]} 
              alt="Project screenshot"
            />
          </div>
          <div className="glass-card rounded-3xl overflow-hidden aspect-square">
            <img 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
              src={images[2]} 
              alt="Project screenshot"
            />
          </div>
          <div className="col-span-2 glass-card rounded-3xl overflow-hidden aspect-[2/1] md:aspect-auto">
            <img 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
              src={images[3]} 
              alt="Project screenshot"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectGallery