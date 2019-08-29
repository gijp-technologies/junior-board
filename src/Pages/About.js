import React, { Component } from 'react';
import Nav from '../components/Navbar/Nav';
import Footer from '../components/Footer/Footer';
import juniorboardlogo from '../Images/juniorboardlogo.png';
import './Style.css';

const About = () => {
    return (
        <div>
            <Nav />
            <img className='jr-board-about' alt='Junior Board' src={juniorboardlogo} />
            <div className='about'>
                <div className='Greg'>
                    <div className="picture">
                        < img alt="Greg Baker" src="" className="Greg-photo"></img>
                    </div>
                    <div className="picture">
                        <div className='Ileana'>

                            <img alt="Ileana Mandigo" src=""></img>
                        </div>
                        <div className='Priscila'>
                            <img alt="Priscila Heller" src=""></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default About;
