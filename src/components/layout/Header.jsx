import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 w-full z-[100] border-b border-on-surface/10 bg-surface/80 backdrop-blur-xl transition-all duration-300 ${scrolled ? 'shadow-sm' : ''}`}>
      <div className="flex justify-between items-center h-20 px-gutter max-w-container-max mx-auto">
        <Link to="/" className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-2xl">blur_on</span>
          <span className="font-display-lg text-headline-md tracking-tight text-on-surface">Sarahi.dev</span>
        </Link>
        <nav className="hidden md:flex items-center gap-stack-lg">
          <a className="text-primary font-semibold border-b border-primary transition-colors py-1" href="#home">Inicio</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors py-1" href="#portfolio">Portafolio</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors py-1" href="#process">Proceso</a>
        </nav>
        <button className="px-6 py-2 rounded-full bg-inverse-surface text-inverse-on-surface font-label-sm uppercase tracking-wider hover:-translate-y-0.5 transition-transform duration-200">
          Contacto
        </button>
      </div>
    </header>
  )
}

export default Header