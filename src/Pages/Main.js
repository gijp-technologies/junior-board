import React from "react";
import Header from "../components/Jumbotron/Jumbotron";
import Juniors from "../components/Cards/Cards";
import Footer from "../components/Footer/Footer";
import Nav from '../components/Navbar/Nav.js';

function Main() {

    return (
        <div className="Main">
            <Nav />
            <Header />
            <Juniors />
            <Footer />
        </div>
    );
}

export default Main;