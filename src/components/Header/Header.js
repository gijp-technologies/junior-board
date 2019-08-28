import React, { Component } from 'react';
import './Style.css';
import Nav from '../Navbar/Nav';
import background from "../../Images/background.png";
import Description from '../Description/Description';

// let background=require("../../Images/background.png");


class Header extends Component {
    render() {
        return (
            <div className="container-fluid">
            <div className="header">
                <img className="background-image" alt="" src={background} />
                <Nav />
                <Description />
            </div>
            </div>
        );
    }
}

export default Header;
