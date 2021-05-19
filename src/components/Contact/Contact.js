import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import img from "./tig3.png";
import './Contact.css'

class Contact extends Component {
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
render() {
  if(this.props.data){
  var networks= this.props.data.social.map(function(network){
    return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
  })
}
return (
  <>
    <div className="register-image" style={{ 
        backgroundImage: `url(${img})` 
      }}>
 </div>
  <div>
  <ul className="social">
               {networks}
            </ul>
  </div>
  </>
)
    }
   }
           
       
   
   
   export default Contact