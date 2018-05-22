import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: 'Francium', age: 99 },
      { name: 'Yui', age: 18 },
      { name: 'Azure', age: 26 },
    ],
    otherState: 'some other value'
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: 'Xen Ace', age: 999 },
        { name: 'Not Found', age: 18 },
        { name: 'Mystogan', age: 26 },
      ]
    });
    // this.state.persons[2].name = "AzureRedFrame"; // THIS DOES NOT WORK FOR DOM UPDATING
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Xen Ace', age: 999 },
        { name: event.target.value, age: 18 },
        { name: 'Mystogan', age: 26 },
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} 
          click={this.switchNameHandler}>
        </Person>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} 
          click={this.switchNameHandler}
          changed={this.nameChangedHandler}
          >
        </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} 
          click={this.switchNameHandler}>
        </Person>
      </div>
    );
  }
}

export default App;
