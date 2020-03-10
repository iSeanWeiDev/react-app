import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound'

export default () => (
  <Router>
    <Switch>
      <Route path='/register'>
        <Register />
      </Route>
      <Route path='/pricing'>
        <Pricing />
      </Route>
      <Route path='/login'>
        <Login />
      </Route>
      <Route path='/dashboard'>
        <Dashboard />
      </Route>
      <Route path='/'>
        <Home />
      </Route>
      <Route path="/**.*">
        <NotFound />
      </Route>
    </Switch>
  </Router>
);
