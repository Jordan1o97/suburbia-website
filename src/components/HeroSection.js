import React from 'react'
import { Button } from './Button'
import './HeroSection.css'
import '../App.css'

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/preview.mp4" type="video/mp4" autoPlay loop muted />
            <h1>SUBURBIA</h1>
            <p>Clothing Label</p>
            
        </div>
    )
}

export default HeroSection