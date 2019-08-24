import React, { Component } from 'react'
import Card from "react-bootstrap/Card";
<<<<<<< HEAD
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
=======

class Juniors extends Component {
    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>

>>>>>>> c40299f... components created: nav, jumbotron, card, footer. working
        );
    }
}

export default Juniors;