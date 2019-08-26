import React, { Component } from 'react'
import Card from "react-bootstrap/Card";
import './Style.css';
// import JuniorDevs from "../API/JuniorDevs.json";

const JuniorsDevs = require("../API/JuniorsDevs.json");

class Juniors extends Component {

    componentDidMount() {
        this.setState({
            existingProfile: "mock"

        })
    }

    render() {
        return (
            <div className="JrCard">
                {JuniorsDevs.map((dev, key) =>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <row>

                                <Card.Title>{dev.firstName + " " + dev.lastName}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{dev.city + ", " + dev.state}</Card.Subtitle>
                                <Card.Text>
                                    Phone: {" " + dev.phone}
                                </Card.Text>
                                <Card.Text>
                                    Email: {" " + dev.email}
                                </Card.Text>
                            </row>

                            <row>
                                <Card.Text>
                                    Skills: {" " + dev.skillset}
                                </Card.Text>
                                <Card.Link href={dev.link1} target="blank">Card Link</Card.Link>
                                <Card.Link href={dev.link2} target="blank">Another Link</Card.Link>
                                <Card.Link href={dev.link3} target="blank">Link 3</Card.Link>
                            </row>
                        </Card.Body>
                    </Card>
                )}
            </div>
        );
    }
}

export default Juniors;