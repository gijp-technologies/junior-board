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
            <div>
                {JuniorsDevs.map((dev, key) =>
                    <Card className="Card" style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{dev.firstName + " " + dev.lastName}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{dev.city + ", " + dev.state}</Card.Subtitle>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                    </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>

                    </Card>

                )}
            </div>
        );
    }
}

export default Juniors;