import React, { Component } from 'react'
import "./Style.css";
import { Row, Col } from 'react-bootstrap';

class Description extends Component {
    render() {
        return (

            <div className="description-area">
                <Row>
                <Col xs={12} md={8}>
                    <h1>Junior Board</h1>
                    <p>
                        This is a modified jumbotron that occupies the entire horizontal space of
                        its parent.
              </p>
              </Col>
                </Row>
            </div>
        );
    }
}

export default Description;