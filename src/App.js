import React from "react";
// import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main";
import Form from "./Pages/Form";


function App() {
  return (
      <Router>
        <Route exact path="/" component={Main} />
        <Route exact path="/form" component={Form} />
      </Router>
  );
}

export default App;
