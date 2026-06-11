import { projects } from '../../data/projects'
import ProjectCard from '../common/ProjectCard'

const FeaturedProjects = () => {
  const featuredProjects = projects.filter(p => p.featured)

  return (
    <section className="py-section-padding px-gutter bg-surface-container-low" id="portfolio">
      <div className="max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-stack-md">
          <div className="space-y-2">
            <span className="font-label-sm text-primary uppercase tracking-widest">Trabajos Seleccionados</span>
            <h2 className="font-display-lg text-headline-md md:text-5xl text-on-surface">Artesanía Digital</h2>
          </div>
          <p className="font-body-md text-on-secondary-fixed-variant max-w-md">
            Una colección curada de proyectos donde la funcionalidad se encuentra con narrativas visuales sofisticadas.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjects