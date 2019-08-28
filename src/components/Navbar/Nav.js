import React, { Component } from 'react'
import Navbar from "react-bootstrap/Navbar";
import "./Style.css";

class Nav extends Component {
    render() {
        return (

            <Navbar className="nav">
                <Navbar.Brand href="#home"><img id="nav-logo" alt="Jr Board" src={require('../../Images/juniorboardlogo.png')}></img></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text className="login-button">
                        Login <a href="#login">user</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Nav;