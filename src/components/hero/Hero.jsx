import React from 'react'
import './Hero.css'
import { BiSearchAlt2 } from 'react-icons/bi';

const Hero = () => {
  return (
    <div className="hero d-flex flex-column align-items-center ">
      <div>
        <h2 className=" " >Find your <span className='recipe-head'>Recipe</span> for today</h2>
      </div>
      
      <div className='searchbar-container'>
        <input type='text' className='hero-search'></input>
        <BiSearchAlt2 className='icon'/>
      </div>
      
    </div>
  )
}

export default Hero