import React from 'react'
import "./HeroSection.css"
import lego from '../images/bitmap.png'

const HeroSection = () => {
    return (
        <section className='hero'>
            <h1>Weekend From Home</h1>
            <h4>Stay active with a little workout.</h4>
            <img src={lego} alt="Lego" />
            <button>Let's Go</button>
        </section>
    )
}

export default HeroSection
