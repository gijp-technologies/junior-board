import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import "./Style.css";

class Navbar extends Component {
    render() {
        return (
            <Navbar className="nav" backgroundColor="transparent">
                <Navbar.Brand href="#home"><img id="nav-logo" alt="Jr Board" src={require('../../images/LogoNav.png')}></img></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Button variant="outline-light" className="google-login nav-btn" href="#login">Login</Button>
                    <Button variant="outline-light" className="nav-btn" href="#About">About</Button>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navbar;