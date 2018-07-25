import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    let showHello = true;

    return (
      <div className="App">
        <h1>The app component</h1>
        {showHello ? <h3>Hello mickey</h3> : <h3>No show</h3>}
      </div>
    );
  }
}

export default App;
