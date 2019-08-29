import React, { Component } from 'react';
import logo from '../../Images/logo.png';
import { Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Style.css';


class Footer extends Component {
    render() {
        return (
            <footer className='footer'>
                    <img className='footer-image' alt='Junior Board' src={logo} />
                    <div className='footer-text'>Junior Board 2019</div>
                    <div className="icons-area">
                    <FontAwesomeIcon icon={faGithubSquare} className="icons" />
                    <FontAwesomeIcon icon={faLinkedin} className="icons" />
                    </div>
            </footer>
        );
    }
}
export default Footer;
