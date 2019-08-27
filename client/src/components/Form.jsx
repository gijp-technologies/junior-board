import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core';
import axios from 'axios';

class Form extends Component {
  state = {
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
  };

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
      .then((response) => {
        this.props.addUser(response.data);
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
      })
      .catch(() => alert('Failed uploading data'))
  };
  render() {
    return (
      <form className="form noValidate" autoComplete="off" onSubmit={this.submit}>
        <h2>Fill in your info card.</h2>
        <TextField
          id="standard-dense"
          value={this.state.firstName}
          label="First Name"
          name="firstName"
          onChange={this.handleChange}
        />

        <TextField
          id="standard-dense"
          value={this.state.lastName}
          label="Lasr Name"
          name="lastName"
          onChange={this.handleChange}
        />

        <TextField
          id="standard-dense"
          value={this.state.email}
          label="Email"
          name="email"
          onChange={this.handleChange}
        />

        <TextField
          id="standard-dense"
          value={this.state.phone}
          label="Phone Number"
          name="phone"
          onChange={this.handleChange}
        />

        <TextField
          id="standard-dense"
          value={this.state.city}
          label="City"
          name="city"
          onChange={this.handleChange}
        />

        <TextField
          id="standard-dense"
          value={this.state.state}
          label="State"
          name="state"
          onChange={this.handleChange}
        />

        <TextField
          id="standard-dense"
          value={this.state.picture}
          label="Picture Url"
          name="picture"
          onChange={this.handleChange}
        />

        <TextField
          id="standard-dense"
          value={this.state.link1}
          label="LinkedIn Url"
          name="link1"
          onChange={this.handleChange}
        />

        <TextField
          id="standard-dense"
          value={this.state.link2}
          label="Github Url"
          name="link2"
          onChange={this.handleChange}
        />

        <TextField
          id="standard-dense"
          value={this.state.link3}
          label="Portfolio Url"
          name="link3"
          onChange={this.handleChange}
        />

        <TextField
          id="standard-dense"
          value={this.state.skillset}
          label="Brief Skillset Description"
          name="skillset"
          onChange={this.handleChange}
        />

        <Button variant="contained" color="primary" onClick={this.submit}> Submit </Button>

      </form>
    );
  }
}

export default Form;
