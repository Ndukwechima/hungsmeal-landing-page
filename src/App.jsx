import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import RoomsFacilities from './components/RoomsFacilities'
import GallerySection from './components/GallerySection'
import TestimonialsSection from './components/Testimonials'
import SpecialOffersSection from './components/SpecialOffersSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import TextVideoSection from './components/TextVideoSection'

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <RoomsFacilities />
      <GallerySection />
      <TestimonialsSection />
      <SpecialOffersSection />
      <ContactSection />
      <TextVideoSection />
      <Footer />
    </div>
  )
}

export default App