import React from 'react'
import Hero from '../components/Hero'
import Cardlist from '../components/Cardlist'
import Footer from '../components/Footer'

const Homepage = () => {
  return (
    <div className='p-5' >
        <Hero/>
         <Cardlist title="Popular" category="popular" />

         <Cardlist title="Top Rated" category="top_rated" />

         <Cardlist title="Upcoming" category="upcoming" />
        
          <Footer/>
        </div>
  )
}

export default Homepage