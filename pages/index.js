import React from 'react'
import MainLayout from '../components/MainLayout'
import Hero from '../components/hero'
import Sections from '../components/sections'

const MainPage = () => {
  return (
    <MainLayout>
      <div>
        <Hero />
        <Sections />
      </div>
    </MainLayout>
  )
}

export default MainPage
