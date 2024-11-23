import React, { useEffect, useState } from 'react'
import Header from './header'
import Footer from './footer'

const MainLayout = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 100)
      }
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div>
      <Header isScrolled={isScrolled} />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default MainLayout
