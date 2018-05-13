import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <Person name="Francium" age="99">Ex evil lord but still evil</Person>
        <Person name="Yui" age="18">I am an Angel</Person>
        <Person name="AzureRedFrame" age="0.1"/>
      </div>
    );
  }
}

export default App;
