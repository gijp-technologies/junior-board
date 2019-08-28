import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

// Import pages
import DisplayUsers from './pages/DisplayUsers';
import Form from './pages/Form';
import EditForm from './pages/EditForm';

// Import components
import Navbar from './components/Navbar/Navbar';

class App extends Component {
  state = {
    user: ''
  }

  render() {
    return (
      <div className="App">

        <Router>
          <div className="container">
            <Navbar />

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
