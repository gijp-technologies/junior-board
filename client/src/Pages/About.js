import React, { Component } from "react";
import Footer from "../components/Footer/Footer";
import "./Style.css";



const About = () => {
    return (
        <footer>
            <img className="background-image" alt="Junior Board" src={logo} />
            <div className="footer">
                Junior Board 2019
            </div>
        </footer>
    )
}

export default Footer;