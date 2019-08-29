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
                    <img alt="Greg Baker" src=""></img>
                </div>
                <div className='Ileana'>
                    <img alt="Ileana Mandigo" src=""></img>
                </div>
                <div className='Priscila'>
                    <img alt="Priscila Heller" src=""></img>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default About;
