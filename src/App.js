import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter, NavLink, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";

function App() {
  return (
      <div>
        <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/login' component={LogIn}/>
          <Route path='/signup' component={SignUp}/>
        </Switch>
        </BrowserRouter>


      </div>
  );
}

export default App;
