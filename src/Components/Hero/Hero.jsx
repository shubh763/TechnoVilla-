import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

function Hero() {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1 className="animated-text">We ensure better education for a better world</h1>
            <p className="animated-text">Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education</p>
            <button className='btn animated-text'>Explore more <img src={dark_arrow} alt="" /></button>
        </div>       
      
    </div>
  )
}

export default Hero
