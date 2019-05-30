import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'; import
FirstComponent from './FirstComponent'
class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <FirstComponent displaytext="Hello from first component and Welcome to React" />
                </header>
            </div>
        );
    }
}
export default App;