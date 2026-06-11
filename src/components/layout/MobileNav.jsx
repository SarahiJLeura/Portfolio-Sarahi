const MobileNav = () => {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full bg-surface/90 backdrop-blur-lg border-t border-outline-variant/30 flex justify-around py-4 z-[110]">
      <a className="flex flex-col items-center gap-1 text-primary" href="#home">
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
        <span className="text-[10px] font-label-sm uppercase tracking-widest">Inicio</span>
      </a>
      <a className="flex flex-col items-center gap-1 text-on-surface-variant" href="#portfolio">
        <span className="material-symbols-outlined">grid_view</span>
        <span className="text-[10px] font-label-sm uppercase tracking-widest">Trabajo</span>
      </a>
      <a className="flex flex-col items-center gap-1 text-on-surface-variant" href="#">
        <span className="material-symbols-outlined">mail</span>
        <span className="text-[10px] font-label-sm uppercase tracking-widest">Contacto</span>
      </a>
    </nav>
  )
}

export default MobileNav