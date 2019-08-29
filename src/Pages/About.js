import React, { Component } from 'react';
import Nav from '../components/Navbar/Nav';
import logo from '../Images/logo.png';
import formAboutNav from '../Images/formAboutNav.png';
import './Style.css';

const About = () => {
    return (
        <div>
            <img src={formAboutNav} alt='' className='form-nav' />
            <Nav />
            <div className='about-area'>
                <div className='about-header'>
                    <h3>Meet the juniors behind Junior Board</h3>
                    <div className='about-header-underline'></div>
                </div>
                {/* <img className='about-logo' alt='Junior Board' src={logo} /> */}
                <div className='about'>
                    <div className='team-cards'>
                        <div className='team-card-header'>
                            <div className='image-placeholder-about'>
                                <img alt='Ileana Mandigo' src='' className='' />
                            </div>
                            <h4 className="member-name">Ileana Mandigo</h4>
                            <h6>Front-End Developer</h6>
                            <h6>Phone: 407-259-7239</h6>
                            <h6>ilyrodriguez@gmail.com</h6>

                        </div>
                    </div>

                    <div className='team-cards'>
                        <div className='team-card-header'>
                            <div className='image-placeholder-about'>
                                <img alt='Greg Baker' src='' />
                            </div>
                            <h4 className="member-name">Greg Baker</h4>
                            <h6>Back-End Developer</h6>
                            <h6>Phone: 407-259-7239</h6>
                            <h6>semperfifcd@gmail.com</h6>
                        </div>
                    </div>

                    <div className='team-cards'>
                        <div className='team-card-header'>
                            <div className='image-placeholder-about'>
                                <img alt='Priscila Heller' src='' />
                            </div>
                            <h4 className="member-name">Priscila Heller</h4>
                            <h6>Google Authentication</h6>
                            <h6>Phone: 407-259-7239</h6>
                            <h6>priscila.x.p.r@gmail.com</h6>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;
