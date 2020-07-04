import React from 'react';
import { makeStyles } from '@material-ui/core';
import Header from '../components/Header';
import Leadeboard from '../components/Leaderboard'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
}));

export default function Home(){
    const classes = useStyles();
    return (
      <div classname={classes.root}>
        <Header name="Interns"></Header>
        <Leadeboard page={"interns"}/>
      </div>
    );
}
