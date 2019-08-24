import React, { Component } from 'react'


class Navbar extends Component {
    render() {
        return (
        <Navbar>
            <Navbar.Brand href="#home">Logo</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    Signed in as: <a href="#login">user</a>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    );
}
}

export default Navbar;