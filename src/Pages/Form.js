import React, { Component } from "react";
import { Form, Col, Button, Row } from "react-bootstrap";
import "./Style.css";
import "../App.css";
import Footer from '../components/Footer/Footer';
import Nav from '../components/Navbar/Nav';
import formAboutNav from '../Images/formAboutNav.png';
// import axios from 'axios';

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
    handleInputChange = e => {
        let value = e.target.value
        const name = e.target.name

        this.setState({
            [name]: value
        });
    }
    handleFormSubmit = e => {
        e.preventDefault();
        console.log(e);
        // const { name, value } = this.state;
        // this is where we are posting to set network for DB update. When response comes back with new info will update existing profile and display:

        // axios.post("url", {
        //     firstName: this.state.firstName,
        //     lastName: this.state.lastName,
        //     email: this.state.email,
        //     phone: this.state.phone,
        //     city: this.state.city,
        //     state: this.state.state,
        //     picture: this.state.picture,
        //     link1: this.state.link1,
        //     link2: this.state.link2,
        //     link3: this.state.link2,
        //     skillset: this.state.skillset
        // }).then(res=>{
        //     console(res);

        // access the response that will be in res.data
        // this.setState({
        // existingProfile:res.data
        // })
        // }).catch(err=>{
        // if err handle err here
        // })

        // this.setState({
        //     firstName: "",
        //     lastName: "",
        //     email: "",
        //     phone: "",
        //     city: "",
        //     state: "",
        //     zipcode: "",
        //     picture: "",
        //     link1: "",
        //     link2: "",
        //     link3: "",
        //     skillset: ""
        // })
    }


    render() {
        return (
            <div className="form-area">
                <img src={formAboutNav} alt="" className="form-nav" />
                <Nav />
                <div className="welcome-message"><h1>Welcome to Junior Board</h1></div>
                <div className="form-instructions"><h5>Please enter the information you would like recruiters to know about you:</h5></div>
                <form className="form">
                    <Row>
                        <Form.Group as={Col} controlId="formGridfirstName">
                            <Form.Label> First Name </Form.Label>
                            <Form.Control type="name" name="firstName" placeholder="First Name" value={this.state.firstName} onChange={this.handleInputChange} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridlastName">
                            <Form.Label> Last Name </Form.Label>
                            <Form.Control type="name" name="lastName" placeholder="Last Name" value={this.state.lastName} onChange={this.handleInputChange} />
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label> Email </Form.Label>
                            <Form.Control type="email" name="email" placeholder="Email Address" value={this.state.email} onChange={this.handleInputChange} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPhone">
                            <Form.Label> Phone Number </Form.Label>
                            <Form.Control type="text" name="phone" placeholder="555-555-5555" value={this.state.phone} onChange={this.handleInputChange} />
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label> City </Form.Label>
                            <Form.Control type="text" name="city" placeholder="City" value={this.state.city} onChange={this.handleInputChange} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label> State </Form.Label>
                            <Form.Control type="text" name="state" placeholder="State" value={this.state.state} onChange={this.handleInputChange}>
                                {/* <option>Choose...</option>
                                <option>...</option> */}
                            </Form.Control>
                        </Form.Group>

                    </Row>

                    <Row>
                        <Form.Group as={Col} controlId="formGridpicture">
                            <Form.Label> Link to your LinkedIn picture </Form.Label>
                            <Form.Control type="text" name="picture" placeholder="Link to linkedIn picture" value={this.state.picture} onChange={this.handleInputChange} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridlink1">
                            <Form.Label> Link to LinkedIn</Form.Label>
                            <Form.Control type="text" name="link1" placeholder="LinkedIn" value={this.state.link1} onChange={this.handleInputChange} />
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as={Col} controlId="formGridlink1">
                            <Form.Label> Link to Github </Form.Label>
                            <Form.Control type="text" name="link2" placeholder="Github" value={this.state.link2} onChange={this.handleInputChange} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridlink2">
                            <Form.Label> Link to Portfolio</Form.Label>
                            <Form.Control type="text" name="link3" placeholder="Portfolio" value={this.state.link3} onChange={this.handleInputChange} />
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                            <Form.Label> Skillset </Form.Label>
                            <Form.Control name="skillset" as="textarea" rows="4" maxlength = "200" placeholder="Max 200 characters"/>
                        </Form.Group>
                    </Row>

                    <Button className="submit-btn" type="submit" onClick={this.handleFormSubmit}>
                        Submit
                </Button>
                </form>
                <Footer />
            </div>
        );
    }
}

export default JuniorForm;