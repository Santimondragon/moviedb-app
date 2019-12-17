/* jslint esversion: 6 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './../../components/Home/Home';
import Navbar from './../../components/Navbar/Navbar';
import './App.scss';

function App() {
  return (
    <section id="name">
      <Navbar/>
      <Switch>
        <Route exact path='/'>
          <Home/>
          <Home/>
        </Route>
        <Route path='/home' component={Home}/>
        <Route path='/movie' component={Home}/>
      </Switch>
    </section>
  );
}

export default App;

