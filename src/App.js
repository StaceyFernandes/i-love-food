import React, { Component } from 'react';
import logo from './components/images/burgerIcon.png';
import FavoriteFood from './components/FavoriteFood';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">What food do you like?</h1>
        </header>
        <FavoriteFood />
      </div>
    );
  }
}

export default App;
