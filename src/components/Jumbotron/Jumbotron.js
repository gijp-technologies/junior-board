import React, { Component } from 'react'
import Jumbotron from "react-bootstrap/Jumbotron";

class Header extends Component {
    render() {
        return (

            <Jumbotron fluid>
                <div>
                    <h1>Fluid jumbotron</h1>
                    <p>
                        This is a modified jumbotron that occupies the entire horizontal space of
                        its parent.
              </p>
                </div>
            </Jumbotron>
        );
    }
}

export default Header;