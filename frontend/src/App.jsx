import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from "react-router-dom";
import Home from './components/home';
import Register from './components/register';
import NavBar from './components/navBar';
import Login from './components/login';
import Logout from './components/logout';

function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <main className="container">
        
        <Switch>
      
      <Route path='/register' component={Register} />
      <Route path='/login' component={Login} />
      <Route path='/logout' component={Logout} />
      <Route path="/" component={Home} />
      <Redirect to="/" />
      </Switch>
      
      </main>
    </React.Fragment>
  );
}

export default App;
