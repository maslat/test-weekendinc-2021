import React from 'react'
import './CarouselItem.css'

const CarouselItem = (props) => {
    return (
        <div className='carousel-item'>
            <h2>{props.title}</h2>
            <p>{props.subtitle}</p>
        </div>
    )
}

export default CarouselItem
