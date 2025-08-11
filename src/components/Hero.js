import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Hero.css';

const Hero = () => {
  return (
    <div className='hero-container'>
      <h1>Cavaari Taylor</h1>
      <p>A front-end developer passionate about building accessible and user-friendly web applications.</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--solid'
          buttonSize='btn--large'
          linkTo='/experience'
        > 
          View My Work
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          linkTo='/aboutme'
        > 
          About Me
        </Button>
      </div> 
    </div>
  );
};

export default Hero;