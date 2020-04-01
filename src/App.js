import React from 'react';
import GitHubAPIView from './Components/GitHubAPIView/GitHubAPIView';
import NavBar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

import './App.css';
import styled from 'styled-components';
import { Switch, Route, Redirect } from 'react-router-dom';



const BodyContainer = styled.div`
    background-color: #242424;
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
        <Switch>
            <Route exact path="/" component={ GitHubAPIView } />
            <Route path="*" render={() => <div>404 Not found</div>} />
        </Switch>
      </BodyContainer>
      <Footer />
    </div>
  );
}

export default App;
/*
<Route exact path="/about" component={ About } />
<Route exact path="/my-cv" component={ MyCV } />
*/