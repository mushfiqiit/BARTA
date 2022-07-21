import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from './components/home';
import Register from './components/register';
import NavBar from './components/navBar';

function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <main className="container">
        
        <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path='/register' component={Register} />
      </Switch>
      
      </main>
    </React.Fragment>
  );
}

export default App;
