import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PersonList from './Component/PersonList.js';
import PersonInput from './Component/PersonInput.js';

class App extends Component {
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         <h1 className = "App-title">Welcome to React</h1>
      </header>
      <PersonInput />
      <PersonList />
    </div>
  );
}
}

export default App;
