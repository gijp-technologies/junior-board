import React from "react";
import "./Style.css";

function Navbar() {
    return (
        <Navbar>
            <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    Signed in as: <a href="#login">Your name</a>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>

    );
}
export default Navbar;