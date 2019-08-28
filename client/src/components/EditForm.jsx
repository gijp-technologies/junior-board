import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core';
import axios from 'axios';

class EditForm extends Component {
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

  componentDidMount() {
    axios.get('/edit/' + this.props.match.params.email)
        .then(response => {
          console.log(response);
            this.setState({
                firstName: response.data.firstName,
                lastName: response.data.lastName,
                email: response.data.email,
                phone: response.data.phone,
                city: response.data.city,
                state: response.data.state,
                picture: response.data.picture,
                link1: response.data.link1,
                link2: response.data.link2,
                link3: response.data.link3,
                skillset: response.data.skillset
            })
        })
        .catch(function (error) {
            console.log(error);
        });
}

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };

  submit = e => {
    e.preventDefault();
    const obj = { 
      firstName: this.state.firstName, 
      lastName: this.state.lastName, 
      email: this.state.email, 
      phone: this.state.phone, 
      city: this.state.city, 
      state: this.state.state, 
      picture: this.state.picture, 
      link1: this.state.link1, 
      link2: this.state.link2, 
      link3: this.state.link3, 
      skillset: this.state.skillset
     };

    axios.post('/edit/' + this.props.match.params.email, obj)
            .then(res => {
                console.log(res.data)
                this.props.history.push('/');
            });

    // axios({
    //   url: '/edit',
    //   method: 'POST',
    //   data: {
    //     firstName,
    //     lastName,
    //     email,
    //     phone,
    //     city,
    //     state,
    //     picture,
    //     link1,
    //     link2,
    //     link3,
    //     skillset
    //   }
    // })
    //   .then(() => {
    //     this.setState({
    //       firstName: '',
    //       lastName: '',
    //       email: '',
    //       phone: '',
    //       city: '',
    //       state: '',
    //       picture: '',
    //       link1: '',
    //       link2: '',
    //       link3: '',
    //       skillset: ''
    //     });
    //   })
    //   .catch(() => alert('Failed uploading data'))
  };
  render() {
    return (
      <form className="form noValidate" autoComplete="off" onSubmit={this.submit}>
        <h2>Edit your information.</h2>
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
          label="Last Name"
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
          label="Short Skillset Description"
          name="skillset"
          onChange={this.handleChange}
        />

        <Button variant="contained" color="primary" onClick={this.submit}> Submit </Button>

      </form>
    );
  }
}

export default EditForm;
