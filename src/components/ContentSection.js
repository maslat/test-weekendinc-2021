import React, {useState,useEffect} from 'react'
import axios from 'axios'
import PropagateLoader from 'react-spinners/PropagateLoader'
import { css } from "@emotion/core";

import './ContentSection.css'

import Testimonial from './Testimonial';
import Cards from './Cards';

import legoImage from '../images/group-3.png'

// import card1 from '../images/image.png'
// import card2 from '../images/image_2.png'
// import card3 from '../images/image_3.png'
const override = css`
  display: block;
  margin: 75px auto;
  size: 300px;
  text-align: center;
  `;

const ContentSection = () => {
    const [data, setData] = useState();

    useEffect(() => {
        const fetchData = async () => {
        const result = await axios(
            "https://wknd-take-home-challenge-api.herokuapp.com/help-tips"
        );
        setData(result.data);
        };
        fetchData();
    }, []);
    return (
        <section className='contents'>
            <Testimonial />
            <div className="content">
                <h1>POV</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
            </div>
            <div className="content">
                <h1>Resource</h1>
                <p>These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best</p>
            </div>
            <div className="card-content">
                <h1>Help &amp; Tips</h1>
                <div className="card-container">
                    
                    {
                        data ? data.map(item => {
                            return(
                                <Cards key={item.id} image={item.image} subtitle={item.title} />
                            )
                        }) : <PropagateLoader color="#fff" css={override}/> 
                    }
                </div>
            </div>
            <div className="content">
                <h1>You’re all set.</h1>
                <p>The wise man therefore always holds in these matters to this principle of selection.</p>
            </div>
            <img className='legoDown' src={legoImage} alt="Lego upside down" />
        </section>
    )
}

export default ContentSection
