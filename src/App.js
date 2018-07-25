import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./components/contact";
import Header from "./components/header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <div className="container">
          <Contact
            name="john Doe"
            email="Jdoe@gmail.com"
            phone="555-5555-555"
          />
          <Contact
            name="Laura Silva"
            email="Laura@gmail.com"
            phone="555-5445-555"
          />
        </div>
      </div>
    );
  }
}

export default App;
