import React, { Component } from 'react';
import logo from '../../Images/logo.png';
import { Row } from "react-bootstrap";
import './Style.css';

class Footer extends Component {
  render() {
    return (
      <footer className='footer'>
        <Row>
          <img className='footer-image' alt='Junior Board' src={logo} />
        </Row>
        <Row>
          <div className='footer-text'>Junior Board 2019</div>
        </Row>
      </footer>
    );
  }
}
export default Footer;
