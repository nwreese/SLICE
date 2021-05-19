import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import img from "./tig3.png";
import './Contact.css'
import Carousel, { slidesToShowPlugin }  from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import imageOne from './tig4.png'
import imageTwo from './tig6.png'
import imageThree from './tig7.png'

 class Contact extends Component {
   
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    }
  }
  onChange = e => this.setState({ value: e.target ? e.target.value : e });

  render() {
    
// class Contact extends Component {
//   constructor(props){
//     super(props);
//     this.state={
//       foo: 'bar',
//       data: {}
//     }
//   }
//   getData(){
//     const data = {
//       "main":{
//         "social": [
//           {
//             "name": "instagram",
//             "url": "http://instagram.com/walkinshred",
//             "className": "fa fa-instagram"
//           },
//         ]
//       }
//     }
//     this.setState({data: data});
//   }
//   componentDidMount(){
//     this.getData();
//   }
// render() {
//   if(this.props.data){
//   var networks= this.props.data.social.map(function(network){
//     return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
//   })
// }

return (
  <div className="register-image" style={{ 
        backgroundImage: `url(${img})` 
      }}>
  {/* <input value={this.state.value} onChange={this.onChange} type="number" /> */}
      <Carousel
     plugins={[
      'centered',
      'infinite',
      'arrows',
      {
        resolve: slidesToShowPlugin,
        options: {
         numberOfSlides: 1,
        },
      },
    ]}   
        // value={this.state.value}
        // onChange={this.onChange}
      >
        <img src={`${imageOne}`} />
        <img src={`${imageTwo}`} />
        <img src={`${imageThree}`} />
      </Carousel>
  </div>
  
)
    }
  } 
  
           
       
   
   
   export default Contact