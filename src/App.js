import './App.css';
import React, {Component} from 'react';
import Landing from './components/Landing/Landing';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import { AppBar } from '@material-ui/core';
import Nav from './components/Nav/Nav';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer'

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      foo: 'bar',
      data: {}
    }
  }
  getData(){
    const data = {
      "main":{
        "social": [
          {
            "name": "instagram",
            "url": "http://instagram.com/walkinshred",
            "className": "fa fa-instagram"
          },
        ]
      }
    }
    this.setState({data: data});
  }
  componentDidMount(){
    this.getData();
  }

  render(){
  return(
    <Router>
      <Nav />
      <Switch>
      <Route exact path="/">
        <Landing />
      </Route>
        <Route exact path="/Contact">
        <Contact  />
          </Route>
      </Switch>
      <Footer />
    </Router>
  )
  }}

export default App;
