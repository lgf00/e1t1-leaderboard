import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Header from '../components/Header'
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
        <Header name="Team Leaders"></Header>
        <Leadeboard page={"teamleaders"}/>
      </div>
    );
}
