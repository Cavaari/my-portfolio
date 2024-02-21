import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Hero.css';

function Hero() {
  console.log('Rendering Hero component');
  return (
    <>
      <div className='background'></div>
      <div className='hero-container'>
      <h1>Navigating My Tech Realm</h1>
      <p>Software Engineer</p>
      <div className='hero-btns'>
          <Button
              className='btns'
              buttonStyle='btn--outline'
              buttonSize='btn--large'
          > 
            About Me
          </Button>
      </div> 
      </div>
    </>
  )
}

export default Hero