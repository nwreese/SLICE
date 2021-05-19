import logo from './tig.png';
import './Landing.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import img from "./tig2.png";
import clsx from 'clsx';
import { SocialIcon } from 'react-social-icons';

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
    margin: 'auto',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    color: 'rgba(255, 99, 71, 1)'
  },
  media: {
    height: 240,
    marginTop: 200,
  },
  button: {
    color: 'rgba(255, 99, 71, 1)',
    margin: 'auto'
  }
});

const handleSubmit = (event) => {
  event.preventDefault();
  window.location.href="https://www.instagram.com/p/COoCb02Hlv9/"
}

function Landing() {
  const classes = useStyles();

  return (
     <div className="background-image" style={{ 
                backgroundImage: `url(${img})` 
              }}>
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
    </div>
  );
}

export default Landing;
