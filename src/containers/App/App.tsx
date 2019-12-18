/* jslint esversion: 6 */

import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Navbar from './../../components/Navbar/Navbar';
import './App.scss';

function App() {
  return (
    <section id="app">
      <Navbar/>

      <Switch>
        <Route path='/'>
          <Home/>
        </Route>

        <Route exact path='/login'>
          <Login/>
        </Route>

        <Route exact path='/register'>
          <Register/>
        </Route>

      </Switch>
    </section>
  );
}

export default App;

