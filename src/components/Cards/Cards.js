import React, { Component } from 'react'
import './Style.css';
// import axios from "axios";
const JuniorsDevs = require("../API/JuniorsDevs.json");

class Juniors extends Component {

    componentDidMount() {
        this.setState({
            existingProfile: "mock"

        })
    }

    render() {
        return (
            <div>
                {JuniorsDevs.map((dev, key) =>
                    <div className="junior-card" style={{ width: '27rem' }}>
                        <row>
                            {/* IMAGE GOES HERE: */}
                            <div className="card-background">
                                <div className="image-placeholder"><img src={dev.picture} alt={dev.firstName}></img></div>
                                <div className="card-info" >
                                    <h4 className="junior-name">{dev.firstName + " " + dev.lastName}</h4>
                                    <h5 className="junior-location">{dev.city + ", " + dev.state}</h5>
                                    <p>
                                        Phone: {" " + dev.phone}
                                        <br />
                                        Email: {" " + dev.email}
                                    </p>
                                </div>
                            </div>
                        </row>
                        <div className="bottom-section">
                            <row>
                                <p className="skillset">
                                    <h6>Skills:</h6> {" " + dev.skillset}
                                </p>
                                <div className="card-footer">
                                    <a href={dev.link1} className={dev.link1 ? '' : 'emptyLink'} target="blank">LinkedIn</a>
                                    <a href={dev.link2} className={dev.link2 ? '' : 'emptyLink'} target="blank">Github</a>
                                    <a href={dev.link3} className={dev.link3 ? '' : 'emptyLink'} target="blank">Portfolio</a>
                                </div>
                            </row>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default Juniors;