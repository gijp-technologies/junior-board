import React, { Component } from "react";
import { Form, Col, Button, Row } from "react-bootstrap";
import "./Style.css";
import Footer from '../components/Footer/Footer';
import Nav from '../components/Navbar/Nav';
import formAboutNav from '../Images/formAboutNav.png';
import axios from 'axios';
import { withRouter } from "react-router";

class JuniorForm extends Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        city: "",
        state: "",
        zipcode: "",
        picture: "",
        link1: "",
        link2: "",
        link3: "",
        skillset: ""
    }

    handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
    };

    submit = e => {
        e.preventDefault();
        const { firstName, lastName, email, phone, city, state, picture, link1, link2, link3, skillset } = this.state;
        axios({
            url: '/add',
            method: 'POST',
            data: {
                firstName,
                lastName,
                email,
                phone,
                city,
                state,
                picture,
                link1,
                link2,
                link3,
                skillset
            }
        })
            .then(() => {
                this.setState({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    city: '',
                    state: '',
                    picture: '',
                    link1: '',
                    link2: '',
                    link3: '',
                    skillset: ''
                });
                return this.props.history.push("/");
            })
            .catch(() => alert('Failed uploading data'))
    };

    render() {
        return (
            <div className="form-area">
                <img src={formAboutNav} alt="" className="form-nav" />
                <Nav />
                <div className="welcome-message"><h1>Welcome to Junior Board</h1></div>
                <div className="form-instructions"><h5>Please enter the information you would like recruiters to know about you</h5></div>
                <form className="form">
                    <Row>
                        <Form.Group as={Col} controlId="formGridfirstName">
                            <Form.Label> First Name </Form.Label>
                            <Form.Control type="name" name="firstName" placeholder="First Name" value={this.state.firstName} onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridlastName">
                            <Form.Label> Last Name </Form.Label>
                            <Form.Control type="name" name="lastName" placeholder="Last Name" value={this.state.lastName} onChange={this.handleChange} />
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label> Email </Form.Label>
                            <Form.Control type="email" name="email" placeholder="Email Address" value={this.state.email} onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPhone">
                            <Form.Label> Phone Number </Form.Label>
                            <Form.Control type="text" name="phone" placeholder="555-555-5555" value={this.state.phone} onChange={this.handleChange} />
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label> City </Form.Label>
                            <Form.Control type="text" name="city" placeholder="City" value={this.state.city} onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label> State </Form.Label>
                            <Form.Control type="text" name="state" placeholder="State" value={this.state.state} onChange={this.handleChange}>
                                {/* <option>Choose...</option>
                                <option>...</option> */}
                            </Form.Control>
                        </Form.Group>

                    </Row>

                    <Row>
                        <Form.Group as={Col} controlId="formGridpicture">
                            <Form.Label> Link to your picture </Form.Label>
                            <Form.Control type="text" name="picture" placeholder="Link to picture" value={this.state.picture} onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridlink1">
                            <Form.Label> Link </Form.Label>
                            <Form.Control type="text" name="link1" placeholder="Portfolio, LinkedIn, github" value={this.state.link1} onChange={this.handleChange} />
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as={Col} controlId="formGridlink1">
                            <Form.Label> Link </Form.Label>
                            <Form.Control type="text" name="link2" placeholder="Portfolio, LinkedIn, github" value={this.state.link2} onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridlink2">
                            <Form.Label> Link </Form.Label>
                            <Form.Control type="text" name="link3" placeholder="Portfolio, LinkedIn, github" value={this.state.link3} onChange={this.handleChange} />
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                            <Form.Label> Skillset </Form.Label>
                            <Form.Control name="skillset" as="textarea" rows="4" value={this.state.link3} onChange={this.handleChange} />
                        </Form.Group>
                    </Row>

                    <Button variant="primary" type="submit" onClick={this.submit}>
                        Submit
                </Button>
                </form>
                <Footer />
            </div>
        );
    }
}

export default JuniorForm;