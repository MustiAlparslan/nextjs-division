import React, { useRef } from 'react'
import MainLayout from '../components/MainLayout'
import Hero from '../components/hero'
import Sections from '../components/sections'
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
        <Sections />
      </div>
    </MainLayout>
  )
}

Home.title = 'Division Company - Web ve Mobil Yazılım Çözümleri'
export default Home
