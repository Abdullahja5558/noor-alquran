import React from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import RecitersSection from '@/components/RecitersSection'
import CollectionsSection from '@/components/CollectionsSection'
import Testimonials from '@/components/Testimonials'
import Topics from '@/components/Topic'
import Footer from '@/components/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <RecitersSection />
      <CollectionsSection />
      <Testimonials />
      <Topics />
      <Footer />
    </>
  )
}

export default Home;