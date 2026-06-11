const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-gutter pt-20 relative overflow-hidden" id="home">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="max-w-4xl text-center space-y-stack-lg">
        <div className="inline-block px-4 py-1.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm mb-4">
          DISPONIBLE PARA NUEVOS PROYECTOS
        </div>
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface max-w-3xl mx-auto">
          Hola, soy Sarahi. <br/>
          <span className="italic text-primary">Fullstack Developer</span>
        </h1>
        <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          Artesana digital dedicada a construir experiencias web refinadas y técnicamente impecables. 
          Combino la precisión del código con una estética editorial para crear productos que respiran.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-stack-md pt-4">
          <a 
            className="w-full md:w-auto px-10 py-4 rounded-full bg-inverse-surface text-inverse-on-surface font-label-sm tracking-widest hover:shadow-xl transition-all duration-300" 
            href="#portfolio"
          >
            VER PROYECTOS
          </a>
          <a 
            className="w-full md:w-auto px-10 py-4 rounded-full border border-outline-variant text-on-surface-variant font-label-sm tracking-widest hover:bg-surface-container-low transition-all" 
            href="#"
          >
            MI PROCESO
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="font-label-sm uppercase tracking-tighter">Scroll</span>
        <div className="w-px h-12 bg-on-surface/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-primary animate-[bounce_2s_infinite]"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero