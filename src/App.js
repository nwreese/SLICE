import './App.css';
import React from 'react';
import Landing from './components/Landing/Landing';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import { AppBar } from '@material-ui/core';
import Nav from './components/Nav/Nav';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer'

function App() {
  return(
    <Router>
      <Nav />
      <Switch>
      <Route exact path="/">
        <Landing />
      </Route>
        <Route exact path="/Contact">
        <Contact />
          </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App;
