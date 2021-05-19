import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const handleSubmit = (event) => {
  event.preventDefault();
  window.location.href="https://www.facebook.com/SLICE-Catering-646825582602864"
}

function Nav() {
  const classes = useStyles();

  return (
    <nav id="nav-wrap">
<a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
<a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
<ul id="nav" className="nav">
   <li className="current"><a className="smoothscroll" href="https://www.instagram.com/s.l.i.c.e.catering/">
     S.L.I.C.E. Catering</a>
   </li>
   <li> <Button type="submit" onClick={handleSubmit} class="material-icons">facebook</Button></li>
   <li><a className="smoothscroll" href="/contact">Contact</a></li>
</ul>
<link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"></link>
</nav>
    // <div className={classes.root}>
    //   <AppBar position="static">
    //     <Toolbar>
    //       <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
    //         <MenuIcon />
    //       </IconButton>
    //       <Typography variant="h6" className={classes.title}>
    //         S.L.I.C.E. Catering
    //       </Typography>
    //       <Button type="submit" size="small" color="submit" onClick={handleSubmit}>
    //       Learn More
    //     </Button>
    //     </Toolbar>
    //   </AppBar>
    // </div>
  );
}
export default Nav;