import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main";
import Form from "./Pages/Form";
import About from "./Pages/About";
import EditForm from "./Pages/EditForm";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

library.add( fab, faGithubSquare, faLinkedin );
// library.add( fab,  );

function App() {
  return (
      <Router>
        <Route exact path="/" component={Main} />
        <Route exact path="/form" component={Form} />
        <Route exact path="/about" component={About} />
        <Route exact path="/update/:email" component={EditForm} />
      </Router>
  );
}

export default App;
