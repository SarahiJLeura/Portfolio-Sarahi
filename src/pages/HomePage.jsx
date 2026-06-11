import { useEffect } from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import MobileNav from '../components/layout/MobileNav'
import Hero from '../components/home/Hero'
import FeaturedProjects from '../components/home/FeaturedProjects'
import CTA from '../components/home/CTA'

const HomePage = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0')
          entry.target.classList.remove('opacity-0', 'translate-y-8')
        }
      })
    }, observerOptions)

    document.querySelectorAll('section, .group').forEach(el => {
      el.classList.add('transition-all', 'duration-1000', 'ease-out', 'opacity-0', 'translate-y-8')
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Header />
      <main className="relative">
        <Hero />
        <FeaturedProjects />
        <CTA />
      </main>
      <Footer />
      <MobileNav />
    </>
  )
}

export default HomePage