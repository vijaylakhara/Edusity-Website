import React from 'react'
import './Hero.css'
import dark_arrow from "../../assets/dark-arrow.png"
export const Heros = () => {
  return (
    <div className='hero container'>
       <div className="hero-text">
        <h1>We Ensure better eduction for a better world </h1>
        <p>Our cutting-edge curriculum is designed to empower students with the kwonledge ,skills, and expriences needed to excel in the dynamic field of eduction</p>
        <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
       </div>
        </div>
  )
}
 