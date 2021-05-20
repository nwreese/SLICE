import './App.css';
import React, {Component} from 'react';
import Landing from './components/Landing/Landing';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import { AppBar } from '@material-ui/core';
import Nav from './components/Nav/Nav';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer'

function App() {

  // constructor(props){
  //   super(props);
  //   this.state={
  //     foo: 'bar',
  //     data: {}
  //   }
  // }
  // getData(){
  //   const data = {
  //     "main":{
  //       "social": [
  //         {
  //           "name": "instagram",
  //           "url": "http://instagram.com/walkinshred",
  //           "className": "fa fa-instagram"
  //         },
  //       ]
  //     }
  //   }
  //   this.setState({data: data});
  // }
  // componentDidMount(){
  //   this.getData();
  // }

  return(
    <>
      <Nav />
      
      <Route exact path="/" component={ Landing}/>
      <Route exact path="/Contact" component={ Contact}/>
      <Footer />
  
    </>
  )
  }

export default App;
