import React from 'react'
import HeroSection from '../components/HeroSection'
import FeatureSection from '../components/FeatureSection'
import Workflow from '../components/Workflow'
import Pricing from '../components/Pricing'

const HomePage = () => {
  return (
    <>
        <HeroSection />
        <FeatureSection />
        <Workflow />
        <Pricing />
        <Testimonials />
        <Footer />
    </>
  )
}

export default HomePage
