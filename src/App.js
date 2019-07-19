import React from 'react';
import logo from './logo.svg';
import NavBar from './Components/Navbar/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar>Good</NavBar>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>This is my paragraph. Welcome to sdg.is</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
