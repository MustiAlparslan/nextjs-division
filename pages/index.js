import React, { useRef } from 'react'
import MainLayout from '../components/MainLayout'
import Hero from '../components/hero'
import HomeContent from '../components/home'
const Home = () => {
  const sectionsRef = useRef(null)

  // Scroll fonksiyonu
  const scrollToSections = () => {
    if (sectionsRef.current) {
      sectionsRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <MainLayout>
      <Hero scrollToSections={scrollToSections} />
      <div ref={sectionsRef}>
        <HomeContent />
      </div>
    </MainLayout>
  )
}

Home.title = 'Division Company - Web ve Mobil Yazılım Çözümleri'
export default Home
