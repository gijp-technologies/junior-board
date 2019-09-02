import React, { Component } from 'react';
import './Style.css';
import "../../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Juniors from "../Cards/Cards";

class Board extends Component {
    render() {
        return (
            <div className="board-card">
                <Juniors />
            </div>
        );
    }
}

export default Board;