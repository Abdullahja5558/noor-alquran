import React from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import RecitersSection from '@/components/RecitersSection'
import CollectionsSection from '@/components/CollectionsSection'
import Feature from '@/components/Feature'
import Topics from '@/components/Topic'
import Footer from '@/components/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <RecitersSection />
      <CollectionsSection />
      <Feature />
      <Topics />
      <Footer />
    </>
  )
}

export default Home;