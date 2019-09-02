import React, { Component } from 'react';
import logo from '../../Images/logo.png';
import { Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import './Style.css';
import "../../App.css";


class Footer extends Component {
    render() {
        return (
            <footer className='footer'>
                    <img className='footer-image' alt='Junior Board' src={logo} />
                    <div className='footer-text'>Junior Board 2019</div>
                    <div className="icons-area">
                    <a href="https://github.com/gijp-technologies/junior-board" target="blank"><FontAwesomeIcon icon={faGithubSquare} className="icons" /></a>
                    </div>
            </footer>
        );
    }
}
export default Footer;
