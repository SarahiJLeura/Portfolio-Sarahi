const Footer = () => {
  return (
    <footer className="w-full py-section-padding bg-surface-container-lowest border-t border-outline-variant">
      <div className="flex flex-col md:flex-row justify-between items-center px-gutter gap-stack-md max-w-container-max mx-auto">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-2xl">blur_on</span>
            <span className="font-display-lg text-headline-md text-on-surface">Sarahi.dev</span>
          </div>
          <p className="text-on-secondary-fixed-variant font-body-md">
            © 2024 Digital Atelier. Crafted with precision.
          </p>
        </div>
        <div className="flex gap-8">
          <a className="text-on-secondary-fixed-variant hover:text-primary transition-colors font-body-md" href="#portfolio">Portafolio</a>
          <a className="text-on-secondary-fixed-variant hover:text-primary transition-colors font-body-md" href="#">Servicios</a>
          <a className="text-on-secondary-fixed-variant hover:text-primary transition-colors font-body-md" href="#">Proceso</a>
          <a className="text-on-secondary-fixed-variant hover:text-primary transition-colors font-body-md" href="#">Contacto</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer