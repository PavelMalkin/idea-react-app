import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter, NavLink, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import User from "./components/User";
import jwtDecode from 'jwt-decode'
import axios from 'axios'
// REDUX
import store from "./redux/store";
// import { getData, getUserData } from './redux/userActions'


const token = localStorage.FBToken;
if (token){
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 > Date.now()){
      axios.defaults.headers.common['Authorization'] = token;
      //getData();
     store.dispatch({type: 'LOADING_USER', username: 'Pasha'});
  }
}

function App() {
  return (

          <div>
              <BrowserRouter>
                  <Navbar/>
                  <Switch>
                      <Route exact path='/' component={Home}/>
                      <Route path='/login' component={LogIn}/>
                      <Route path='/signup' component={SignUp}/>
                      <Route path='/user' component={User}/>
                  </Switch>
              </BrowserRouter>
          </div>

  );
}

export default App;
