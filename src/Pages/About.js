import React, { Component } from 'react';
import Nav from '../components/Navbar/Nav';
import logo from '../Images/logo.png';
import formAboutNav from '../Images/formAboutNav.png';
import './Style.css';

const About = () => {
    return (
        <div className='about-section'>
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
                                <img alt='Ileana Mandigo' src={require('../Images/ileana.jpg')} className='member-pic' />
                            </div>
                            <div className="member-info">
                                <h4>Ileana Mandigo</h4>
                                <h6>Front-End Developer</h6>
                                <h6>Phone: 407-259-7239</h6>
                                <h6>ilyrodriguez@gmail.com</h6>
                            </div>
                        </div>
                        <div className="responsabilies">
                            <p>Ileana is a graphic designer with a passion for creativity, arts, and design.
                            She worked on the Front-end process of this project: UI/UX design and logo; using React, Bootstrap and Photoshop.</p>

                        </div>
                        <div className="member-footer">
                            <a href="https://www.linkedin.com/in/ileana-mandigo/" target="blank">LinkedIn</a>
                            <a href="https://github.com/ilyrodriguez" target="blank">Github</a>
                            <a href="https://ilyrodriguez.github.io/portfolio/" target="blank">Portfolio</a>
                        </div>
                    </div>

                    <div className='team-cards Greg'>
                        <div className='team-card-header'>
                            <div className='image-placeholder-about'>
                                <img alt='Greg Baker' src={require('../Images/greg.jpg')} className='member-pic' />
                            </div>
                            <div className="member-info">
                                <h4 >Greg Baker</h4>
                                <h6>Back-End Developer</h6>
                                <h6>Phone: 407-259-7239</h6>
                                <h6>semperfifcd@gmail.com</h6>
                            </div>
                        </div>
                        <div className="responsabilies">
                            <p>Greg has highly analitical skills and passion for technology.
                                He worked on the Back-end process of this project: Routes, Database, Deployment and Authentication;
                                using MongoDB, Heroku and NodeJs.
                            </p>

                        </div>
                        <div className="member-footer">
                            <a href="https://www.linkedin.com/in/greg-baker-48ab9717b/" target="blank">LinkedIn</a>
                            <a href="https://github.com/BakedALake" target="blank">Github</a>
                            <a href="https://bakedalake.github.io/BakedALake/portfolio.html" target="blank">Portfolio</a>
                        </div>
                        <div className="about-footer"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
