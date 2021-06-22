import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import img from "./tig13.png";
import './Contact.css'
import Carousel, { slidesToShowPlugin }  from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import imageOne from './tig4.png'
import imageTwo from './tig6.png'
import imageThree from './tig7.png'
import imageFour from './tig.png'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { SocialIcon } from 'react-social-icons';
import logo from './tig.png';
import logo2 from './tig6.png';
import logo3 from './tig3.png';
import logo4 from './tig10.png';
import logo5 from './tig11.png';
import logo6 from './tig17.jpg';
import logo7 from './tig16.jpg';
import logo8 from './tig15.png.jpg';
import logo9 from './tig18.jpg';

const useStyles = makeStyles({
  root: {
    // maxWidth: 400,
    margin: 'auto',
    backgroundColor: 'rgba(52, 52, 52, 1)',
    color: 'rgba(255, 99, 71, 1)'
  },
  media: {
    height: 240,
    marginTop: 100,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  button: {
    color: 'rgba(255, 99, 71, 1)',
    margin: 'auto'
  }
});

 function Contact() {
   
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     value: 0,
  //   }
  // }
  // onChange = e => this.setState({ value: e.target ? e.target.value : e });

  // return {
    
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
const classes = useStyles();
return (
  
  <div className="register-image" 
  
  style={{ 
        backgroundImage: `url(${img})` 
      }}
      >
  {/* <input value={this.state.value} onChange={this.onChange} type="number" /> */}
  {/* <div style={{ display: 'flex', justifyContent: 'center', flexFlow: 'row', alignContent: 'center', textAlign: 'center' }}> */}
  <div className= "row">
  <div className="contact-text">Email Chef Tig at slicecateringohio@gmail.com</div>
  </div>
      <Carousel
     plugins={[
      'arrows',
      'infinite',
      {
        resolve: slidesToShowPlugin,
        options: {
         numberOfSlides: 3
        }
      },
    ]}
    breakpoints={{
      640: {
        plugins: [
          'arrows',
          'infinite',
         {
           resolve: slidesToShowPlugin,
           options: {
            numberOfSlides: 1
           }
         },
       ]
      },
      900: {
        plugins: [
          'arrows',
          'infinite',
         {
           resolve: slidesToShowPlugin,
           options: {
            numberOfSlides: 2
           }
         },
       ]
      }
    }}
        // value={this.state.value}
        // onChange={this.onChange}
      >

        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={logo}
          title="Miso corn scallops"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Miso Corn Scallops
          </Typography>Miso corn scallops, carrot bacon hash and beech mushroom
          <Typography variant="body2" color="textSecondary" component="p">
           
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        View on
        <br></br>
      <SocialIcon  bgColor="#F06000" style={{height: 30, width: 30}} url="https://www.instagram.com/p/COoCb02Hlv9/" />
      </CardActions>
    </Card>

    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={logo2}
          title="Watermellon Carpaccio"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Watermelon Carpaccio
          </Typography>Watermelon carpaccio/ bocconcini/ fennel/ mint/ basil/ coconut chips/ watermelon radish/ coconut vinaigrette
          <Typography variant="body2" color="textSecondary" component="p">
           
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        View on
        <br></br>
      <SocialIcon  bgColor="#F06000" style={{height: 30, width: 30}} url="https://www.instagram.com/p/COUcGYwHjVm/" />
      </CardActions>
    </Card>

    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={logo3}
          title="Watermellon Carpaccio"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Miso Caramel SLICE Cream
          </Typography>Miso caramel SLICE Cream/ caramelized banana/ strawberry puree/ candied pistachio/ phyllo crisp/ 5 spice whip cream
          <Typography variant="body2" color="textSecondary" component="p">
           
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        View on
        <br></br>
      <SocialIcon  bgColor="#F06000" style={{height: 30, width: 30}} url="https://www.instagram.com/p/CNEfKB4HQwu/" />
      </CardActions>
    </Card>

    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={logo9}
          title="Vegan Dish"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          New Vegan Dish
          </Typography>Spiced heirloom carrots/ lemon tahini/ pomegranate redux/ mint/ toasted cashews/ pomegranate seeds/ carrot top oil 
          <Typography variant="body2" color="textSecondary" component="p"> 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        View on
        <br></br>
      <SocialIcon  bgColor="#F06000" style={{height: 30, width: 30}} url="https://www.instagram.com/p/CQEqootn22S/" />
      </CardActions>
    </Card>

    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={logo4}
          title="Party Menu"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          I had a blast with last night's party
          </Typography> Here's what's on the menu and pics of the courses
          <Typography variant="body2" color="textSecondary" component="p"> 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        View on
        <br></br>
      <SocialIcon  bgColor="#F06000" style={{height: 30, width: 30}} url="https://www.instagram.com/p/CMr7T9cHXV1/" />
      </CardActions>
    </Card>

    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={logo5}
          title="Roasted Halibut"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Roasted Halibut
          </Typography> Roasted halibut cheeks/ carrot bacon hash/ beech mushrooms/ miso corn sauce
          <Typography variant="body2" color="textSecondary" component="p"> 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        View on
        <br></br>
      <SocialIcon  bgColor="#F06000" style={{height: 30, width: 30}} url="https://www.instagram.com/p/CPCfTgCHVJk/" />
      </CardActions>
    </Card>

    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={logo6}
          title="Roasted Halibut"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          John Dory
          </Typography> Crispy skin John Dory, potato fava bean succotash with chorizo, romesco, broccolini and pickled heirloom carrots
          <Typography variant="body2" color="textSecondary" component="p"> 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        View on
        <br></br>
      <SocialIcon  bgColor="#F06000" style={{height: 30, width: 30}} url="https://www.instagram.com/p/CNCH065HcKc/" />
      </CardActions>
    </Card>


   <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={logo7}
          title="Roasted Halibut"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Braised Short Ribs
          </Typography> Braised short ribs/ roasted squash puree/ baby rainbow carrots/ black garlic puree/ pickled mustard seed/ charred cippolini
          <Typography variant="body2" color="textSecondary" component="p"> 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        View on
        <br></br>
      <SocialIcon  bgColor="#F06000" style={{height: 30, width: 30}} url="https://www.instagram.com/p/CMjAVJIHV2l/" />
      </CardActions>
    </Card>

    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={logo8}
          title="Roasted Halibut"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
        Crispy Skin Walleye
          </Typography> Walleye / Clams / Shrimp / Broccolini / Corn / White Wine Butter Broth
          <Typography variant="body2" color="textSecondary" component="p"> 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        View on
        <br></br>
      <SocialIcon  bgColor="#F06000" style={{height: 30, width: 30}} url="https://www.instagram.com/p/CMEic-aHAwD/" />
      </CardActions>
    </Card>
     {/* <img src={`${imageFour}`} />
        <img src={`${imageOne}`} />
        <img src={`${imageTwo}`} />
        <img src={`${imageThree}`} /> */}
      </Carousel>
      {/* <div className="contact-text">Email Chef Tig at slicecateringohio@gmail.com</div> */}
  </div>
  // </div>
)
    }
  
  
           
       
   
   
   export default Contact