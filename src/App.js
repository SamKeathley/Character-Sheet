import React, { Component } from 'react';
import dotenv from 'dotenv';
import './App.css';
import CharacterPage from './components/CharacterPage';
import Skills from './components/Skills';
import Stats from './components/Stats';
import Battle from './components/Battle';
import Feats from './components/Feats';
import TabLists from './components/TabLists';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Character Sheet</h2>
          <ul className="icons">
            <li><i className="fa fa-plus fa-lg" aria-hidden="true"></i></li>
            <li><i className="fa fa-pencil fa-lg" aria-hidden="true"></i></li>
          </ul>
        </div>
        <CharacterPage />
      </div>
    );
  }
}

export default App;
