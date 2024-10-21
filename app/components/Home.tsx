import React from 'react'
import Hero from './Hero/Hero'
import Features from './Features/Features'
import PopularBurger from './PopularBurger/PopularBurger'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <Features/>
      <PopularBurger/>
    </div>
  )
}

export default Home