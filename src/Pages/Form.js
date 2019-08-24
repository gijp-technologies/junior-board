import React, { Component } from "react";
import { Form, Col, Button, Row } from "react-bootstrap";
// import Row from 'react-bootstrap/Row';


class Nav extends Component {
    state = {
        Name: "",
        LastName: "",
        email: "",
        Link: "",
        Link2: "",
        Link3: "",
        Description: ""
    }
    handleChange = e => {
        const { name, value } = e.target

        this.setState({
            [name]: value
        })
    }
    handleFormSubmit = e => {
        const { name, value } = this.state;
        // this is where we are posting to set network for DB update. When response comes back with new info will update existing profile and display:
        // axios.post("url", {companyName, email, password }).then(res=>{
        // access the response that will be in res.data
        // this.setState({
        // existingProfile:res.data
        // })
        // }).catch(err=>{
        // if err handle err here
        // })
        this.setState({
            firstName: "",
            lastName: "",
            email: "",
            Link: "",
            Link2: "",
            Link3: "",
            Description: ""
        })
    }


    render() {
        return (
            <Form>
                <Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Row>

                <Form.Group controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group controlId="formGridAddress2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>

                <Row>
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Control as="select">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Row>

                <Form.Group id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
  </Button>
            </Form>
        );
    }
}

export default Nav;