import React from 'react';
import logo from './logo.svg';
import NavBar from './Components/Navbar/Navbar';
import './App.css';
import styled from 'styled-components';

const BodyContainer = styled.div`
    background-color: lightblue;
    display: flex;
    flex-direction: row;

    justify-content: center;
    align-item: center;
`

function App() {
  return (
    <div className="App">
      <NavBar />
      <BodyContainer>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </BodyContainer>
    </div>
  );
}

export default App;
