import React, { Component } from 'react';
import Nav from '../components/Navbar/Nav';
import Footer from '../components/Footer/Footer';
import logo from '../Images/logo.png';
import formAboutNav from '../Images/formAboutNav.png';
import './Style.css';

const About = () => {
    return (
        <div>
            <img src={formAboutNav} alt='' className='form-nav' />
            <Nav />
            <div className="about-header">
                <h3>Meet the juniors behind Junior Board</h3>
                <div className="about-header-underline"></div>
            </div>
            {/* <img className='about-logo' alt='Junior Board' src={logo} /> */}
            <div className='about'>
                <div className='Greg'>
                    <div className='picture'>
                        <div className="image-placeholder"><img alt='Greg Baker' src='' className='Greg-photo' /></div>
                    </div>
                </div>

                <div className='Ileana'>
                    <div className='picture'>
                    <div className="image-placeholder"><img alt='Ileana Mandigo' src=''/></div>
                    </div>
                </div>

                <div className='Priscila'>
                    <div className='picture'>
                    <div className="image-placeholder"><img alt='Priscila Heller' src=''/></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
