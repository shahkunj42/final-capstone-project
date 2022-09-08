import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'

function HeroSection({user}) {

  if (!user){
  return (
    <div className='hero-container'>
        <h1>DESIGNS BY SHAI</h1>
        <p>You Dream it We can Make it</p>
        <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--outline'
            buttonSize='btn--large'>SIGN IN</Button>
        </div>
    </div>
  )
  }
  else{
  return (
    <div className='hero-container'>
        <h1>DESIGNS BY SHAI</h1>
        <p>You Dream it We can Make it</p>
    </div>
    )
  }
}

export default HeroSection