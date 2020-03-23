import React from 'react';
import GitHubAPIView from './Components/GitHubAPIView/GitHubAPIView';
import NavBar from './Components/Navbar/Navbar';
import './App.css';
import styled from 'styled-components';
import { Switch, Route, Redirect } from 'react-router-dom';



const BodyContainer = styled.div`
    background-color: #f5f5f5;
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
    </div>
  );
}

export default App;
/*
<Route exact path="/about" component={ About } />
<Route exact path="/my-cv" component={ MyCV } />
<Route path="*" render={() => <div>404 Not found</div>} />
*/