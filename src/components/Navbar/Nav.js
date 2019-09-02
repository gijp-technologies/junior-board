import React, { Component } from 'react'
import { Navbar, Button } from "react-bootstrap";
import About from '../../Pages/About';
import "./Style.css";

class Nav extends Component {
    render() {
        return (

            <Navbar className="nav" backgroundColor="transparent">
                <Navbar.Brand href="/"><img id="nav-logo" alt="Jr Board" src={require('../../Images/juniorboardlogo.png')}></img></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                         <Button variant="outline-light" className="google-login nav-btn" href="/form">Login</Button>
                         <Button variant="outline-light" className="nav-btn" href="/About">About</Button>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Nav;