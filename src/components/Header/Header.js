import React, { Component } from 'react';
import './Style.css';
import Nav from '../components/Navbar/Nav.js';
// import background from "../../Images/background.png";

let background=require("../../Images/background.png");

class Header extends Component {
    render() {
        return (
            <div className="header">
                <Nav />
                <div className='background-image' style ={ { backgroundImage: "url("+background+")" } }></div>
            </div>
        );
    }
}

export default Header;
