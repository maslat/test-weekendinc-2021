import React from 'react'
import image from '../images/group-4.png'
import circle from '../images/oval.png'
import './DefSection.css'

const DefSection = () => {
    return (
        <section className='defsection'>
            <img className='lego-defsection' src={image} alt="Lego2" />
            <p><span>Deffinition;</span> a practice or exercise to test or improve one's fitness for athletic competition, ability, or performance to exhaust (something, such as a mine) by working to devise, arrange, or achieve by resolving difficulties. Merriam-Webster.com Dictionary.</p>
            <p className='quote'>-weekend team</p>
            <img className='circle' src={circle} alt="Oval shape" />

        </section>
    )
}

export default DefSection
