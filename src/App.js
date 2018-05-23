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
    showPerson: false
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

  togglePersonsHandler = () => {

  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
          style={style}
          onClick={this.switchNameHandler}>Switch Name</button>
        {
          this.state.showPerson ?
          <div>
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
          </div> : null
        }
      </div>
    );
  }
}

export default App;
