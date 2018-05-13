import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    // return (
    //   <div className="App">
    //     <h1>Hi, I'm a React App</h1>
    //   </div>
    // );
    let h1Tag = React.createElement('h1', null, 'Does this work now?');
    return React.createElement('div', {className: 'App'}, h1Tag);
  }
}

export default App;
