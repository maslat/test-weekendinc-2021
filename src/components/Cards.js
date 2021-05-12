import React from 'react'
import './Cards.css'
import arrowImage from '../images/oval-icon.png'

const Cards = (props) => {
    return (
        <div className="card">
            <img className='card-image'  src={props.image} alt="Card" />
            <div className="container">
                <h4><b>{props.subtitle}</b></h4>
                <a href='/'><img className='card-button-image' src={arrowImage} alt="Next" /></a>     
            </div>
        </div>
    )
}

export default Cards
