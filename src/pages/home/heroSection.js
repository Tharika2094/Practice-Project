import React from 'react'
import './home.css'
import {Link} from 'react-router-dom'

function HeroSection() {
  return (
   <div className='homeBody'>
         <div className='heroSection'>
           <div className='hero-text'>
             <span className='welcomeText'>Welcome to Verda Studio</span>
             <div className='hero-text-div'>
               <span className='hero-text1'>Architectural, Interior, Landscape Design & Build In a One Stop Solution</span>
               <span className='hero-text2'>Offering a one-stop solution to simply your journey from concept to completion.</span>
             </div>
             <Link to="/projects"><button className='hero-button'>Explore Our Work</button></Link>
           </div>
         </div>
       </div>
  )
}

export default HeroSection;