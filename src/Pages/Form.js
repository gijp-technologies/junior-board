import React, { Component } from "react";
import { Form, Col, Button, Row } from "react-bootstrap";
import './style.css';

class JuniorForm extends Component {
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
            phone: "",
            city: "",
            state: "",
            picture: "",
            link1: "",
            link2: "",
            link3: "",
            skillset: ""
        })
    }


    render() {
        return (
            <form className="form">
                <Row>
                    <Form.Group as={Col} controlId="formGridfirstName">
                        <Form.Label> First Name </Form.Label>
                        <Form.Control type="name" placeholder="First Name" value={this.state.firstName} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridlastName">
                        <Form.Label> Last Name </Form.Label>
                        <Form.Control type="name" placeholder="Last Name" value={this.state.lastName} onChange={this.handleInputChange} />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label> Email </Form.Label>
                        <Form.Control type="email" placeholder="Email Address" value={this.state.email} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPhone">
                        <Form.Label> Phone Number </Form.Label>
                        <Form.Control type="text" placeholder="555-555-5555" value={this.state.phone} onChange={this.handleInputChange} />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label> City </Form.Label>
                        <Form.Control type="text" placeholder="City" value={this.state.city} onChange={this.handleInputChange} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label> State </Form.Label>
                        <Form.Control type="text" placeholder="State" value={this.state.state} onChange={this.handleInputChange}>
                            {/* <option>Choose...</option>
                                <option>...</option> */}
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label> Zipcode </Form.Label>
                        <Form.Control type="text" placeholder="Zipcode" value={this.state.zipcode} onChange={this.handleInputChange} />
                    </Form.Group>
                    </Row>

                    <Row>
                    <Form.Group as={Col} controlId="formGridpicture">
                        <Form.Label> Link to your picture </Form.Label>
                        <Form.Control type="text" placeholder="Link to picture" value={this.state.picture} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridlink1">
                        <Form.Label> Link </Form.Label>
                        <Form.Control type="text" placeholder="Portfolio, LinkedIn, github" value={this.state.link1} onChange={this.handleInputChange} />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col} controlId="formGridlink1">
                        <Form.Label> Link </Form.Label>
                        <Form.Control type="text" placeholder="Portfolio, LinkedIn, github" value={this.state.link2} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridlink2">
                        <Form.Label> Link </Form.Label>
                        <Form.Control type="text" placeholder="Portfolio, LinkedIn, github" value={this.state.link3} onChange={this.handleInputChange} />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                        <Form.Label> Skillset </Form.Label>
                        <Form.Control as="textarea" rows="4" />
                    </Form.Group>
                </Row>

                <Button variant="primary" type="submit" onClick={this.handleFormSubmit}>
                    Submit
                </Button>
            </form>
        );
    }
}

export default JuniorForm;