import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
  state = { // state is a reserved word for Component
    persons: [
      { name: 'Francium', age: 99 },
      { name: 'Yui', age: 18 },
      { name: 'Azure', age: 26 },
    ]
  }

  // NOTE :: state can change, if it change it will update the DOM

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}></Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>
      </div>
    );
  }
}

export default App;
