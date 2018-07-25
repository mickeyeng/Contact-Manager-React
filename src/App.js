import React, { Component } from "react";
import "./App.css";
import Contact from "./components/contact";
import Header from "./components/header";

class App extends Component {
  render() {
    let showHello = true;

    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <Contact name="john Doe" email="Jdoe@gmail.com" phone="555-5555-555" />
        <Contact
          name="Laura Silva"
          email="Laura@gmail.com"
          phone="555-5445-555"
        />
      </div>
    );
  }
}

export default App;
