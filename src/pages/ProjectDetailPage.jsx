import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import MobileNav from '../components/layout/MobileNav'
import ProjectHero from '../components/project/ProjectHero'
import ProjectGallery from '../components/project/ProjectGallery'
import ProjectVideo from '../components/project/ProjectVideo'
import ProjectArchitecture from '../components/project/ProjectArchitecture'
import { projectDetail } from '../data/projects'

const ProjectDetailPage = () => {
  //const { id } = useParams()

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

    document.querySelectorAll('section').forEach(section => {
      section.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-8')
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Header />
      <main className="pt-24 pb-12">
        <ProjectHero project={projectDetail} />
        <ProjectGallery images={projectDetail.images} />
        <ProjectVideo videoImage={projectDetail.videoImage} />
        <ProjectArchitecture />
      </main>
      <Footer />
      <MobileNav />
    </>
  )
}

export default ProjectDetailPage