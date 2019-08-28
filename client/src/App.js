import React, { Component } from 'react';
import Form from './components/Form';
import DisplayUsers from './components/DisplayUsers';
import axios from 'axios';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {
    users: []
  }

  componentDidMount = () => {
    this.fetchUsers();
  };

  fetchUsers = () => {
    axios.get('/users')
      .then((response) => {
        const { users } = response.data;
        this.setState({ users: [...this.state.users, ...users] })
      })
      .catch(() => alert('Error fetching new users'));
  };


  addUser = ({ firstName, lastName, email, phone, city, state, picture, link1, link2, link3, skillset }) => {
    this.setState({
      users: [...this.state.users, { firstName, lastName, email, phone, city, state, picture, link1, link2, link3, skillset }]
    });
  };

  render() {
    return (
      <div className="App">
        <Form addUser={this.addUser}/>
        < DisplayUsers users={this.state.users} />

      </div>
    );
  }
}

export default App;
