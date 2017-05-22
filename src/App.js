import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Skills from './components/Skills';
import Stats from './components/Stats';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Character Sheet</h2>
        </div>
        <Skills />
      </div>
    );
  }
}

export default App;
