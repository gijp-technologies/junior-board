import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

// Import Components
import DisplayUsers from './components/DisplayUsers';
import Form from './components/Form'
import EditForm from './components/EditForm'

class App extends Component {
  state = {
    user: ''
  }

  render() {
    return (
      <div className="App">

        <Router>
          <div className="container">
            {/* Navbar here */}

            {/* Jumbotron here */}

            <Route path="/" exact component={DisplayUsers} />
            <Route path="/create" component={Form} />
            <Route path="/update/:email" component={EditForm} />

            {/* Footer here */}
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
