import React from 'react'
import logo from '../images/bitmap_2.png'
import './Navbar.css'

const Navbar = () => {
    return (
            <div className="navbar">
                <div className="grid-container">
                    <div className="logo">
                        <img src={logo} alt="Brands Logo" />
                    </div>
                    <div className="text">
                        <p>Good Morning</p>
                        <h4>Fellas</h4>
                    </div>

                </div>
            </div>
    )
}

export default Navbar
