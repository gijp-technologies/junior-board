import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
// import Nav from "../components/Navbar/Nav";
import Board from "../components/Board/Board";
import "./Style.css";

function Main() {

    return (
        <div className="Main">
            {/* <Nav /> */}
            <Header />
            <Board />
            {/* <Juniors /> */}
            <Footer />
        </div>
    );
}

export default Main;