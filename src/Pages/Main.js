import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ScrollIndex from "../components/ScrollButton/Scroll";
import Board from "../components/Board/Board";
import "./Style.css";

function Main() {

    return (
        <div className="Main">
            <Header />
            <Board />
            <ScrollIndex/>
            <Footer />
        </div>
    );
}

export default Main;