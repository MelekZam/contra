import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '130%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    padding: '10px',
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function DrawerList({onClick}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav">
        <ListItemLink href="#welcome" onClick={onClick}>
          <ListItemText primary="Welcome" />
        </ListItemLink>
        <ListItemLink href="#about" onClick={onClick}>
          <ListItemText primary="About" />
        </ListItemLink>
        <ListItemLink href="#contact" onClick={onClick}>
          <ListItemText primary="Contact" />
        </ListItemLink>
      </List>
      <Divider />
      <List component="nav">
        <ListItem button>
          <ListItemText primary="Log In" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Sign Up" />
        </ListItem>
      </List>
    </div>
  );
}