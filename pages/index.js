import React, { useRef } from 'react'
import MainLayout from '../components/MainLayout'
import Hero from '../components/hero'
import Sections from '../components/sections'
const MainPage = () => {
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

export default MainPage
