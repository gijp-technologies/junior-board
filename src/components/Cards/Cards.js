import React, { Component } from 'react'
import Card from "react-bootstrap/Card";
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
                    <Card style={{ width: '28rem' }}>
                        <Card.Body>
                            <row className="card-top-section">
                                {/* IMAGE GOES HERE: */}
                                <span><div className="image-placeholder" src={dev.picture}></div>
                                <Card.Title className="card-info" as="h4">{dev.firstName + " " + dev.lastName}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted card-info" as="h5">{dev.city + ", " + dev.state}</Card.Subtitle>
                                <Card.Text className="card-info">
                                Phone: {" " + dev.phone }  Email: {" " + dev.email}
                                </Card.Text>
                                </span>
                            </row>

                            <row>
                                <Card.Text className="skillset">
                                Skills: {" " + dev.skillset}
                                </Card.Text>
                                <div className="card-footer">
                                <Card.Link  href={dev.link1} className={dev.link1 ? '' : 'emptyLink'} target="blank">Portfolio</Card.Link>
                                <Card.Link  href={dev.link2} className={dev.link2 ? '' : 'emptyLink'} target="blank">LinkedIn</Card.Link>
                                <Card.Link  href={dev.link3} className={dev.link3 ? '' : 'emptyLink'} target="blank">Github</Card.Link>
                                </div>
                            </row>
                        </Card.Body>
                    </Card>
                )}
            </div>
        );
    }
}

export default Juniors;