import React, { Component } from "react";
import Footer from "../components/Footer/Footer";
import juniorboardlogo from '../Images/juniorboardlogo.png';
import "./Style.css";



const About = () => {
    return (
        <div>
            <img className="jr-board-about" alt="Junior Board" src={juniorboardlogo} />
            <div className="about">
                Junior Board 2019
            </div>
        </div>
    )
}

export default Footer;