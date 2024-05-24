import React from 'react'
import HeroSection from '../SubComponents/HeroSection'
import Specialities from '../SubComponents/Specialites'
import Reviews from '../SubComponents/Reviews'
import Products from '../SubComponents/Products'
// import AboutUs from './AboutUs'

const Home = () => {
  return (
    <>
      <HeroSection />
      {/* <AboutUs /> */}
      <Specialities />
      <Products />
      <Reviews />


    </>
  )
}
export default Home
