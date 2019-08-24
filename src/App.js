import React from "react";
import Header from "./components/Jumbotron/Jumbotron.js";
import Juniors from "./components/Cards/Cards";
import Footer from "./components/Footer/Footer";
import './App.css';
import Nav from './components/Navbar/Nav.js';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Juniors />
      <Footer />
    </div>
  );
}

export default App;
