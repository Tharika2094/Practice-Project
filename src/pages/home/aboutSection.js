import React from 'react'
import founder from '../../asserts/founder.jpeg'

function AboutSection() {
  return (
    <div className='aboutSection'>
      <div className='aboutText'>
        <span className='aboutHead'>Architecture That Speaks with Light and Form</span>
        <span className='aboutDescription'>Established in Sri Lanka, our practice is led by a Chartered Architect registered with the Sri Lanka Institute of Architects (SLIA) and a member of the Royal Institute of British Architects (RIBA). Based in Colombo with international experience in Canada, we create contemporary, 
          context-sensitive architecture that responds to place, climate, and culture with precision and purpose.</span>
          <span className='quote'><i>“We believe architecture should speak softly and live boldly”</i></span>
          <button className='aboutBtn'>About Us</button>
      </div>
      <div className='founderImgSection'>
        <img src={founder} className='founderImg'></img>
        <div className='founderDetails'>
          <span>founder director</span>
          <span>Nadeeshan Vijayanga</span>
          <span>Chartered Architect AIA(SL), RIBA(UK)</span>
        </div>
      </div>
    </div>
  )
}

export default AboutSection