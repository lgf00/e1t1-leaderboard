import React from 'react';
import { Paper, Container, makeStyles, Typography, Box } from '@material-ui/core';

const testData = [["Name One", 91], ["Name Two", 9], ["Name Three", 97], ["Name Four", 19], ["Name Five", 18], ["Name Six", 40], ["Name Seven", 65], ["Name Eight", 84], ["Name Nine", 36], ["Name Ten", 33]];
let maxPoints = 0;

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
  },
  barPaperIntern: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    color: 'white',
    background: theme.palette.primary.dark,
  },
  barPaperTL: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    color: 'white',
    background: theme.palette.secondary.dark,
  },
  name: {
    flexGrow: 1,
  },
  points: {
    textAlign: 'right',
  }
}));

function Bar(props) {
  const classes = useStyles();
  const { name, points, color } = props;
  const width = points / maxPoints;
  return(
    <Box width={width}>
      <Paper elevation={3} className={color}>
          <Typography className={classes.name}> {name} </Typography>
          <Typography> {points} </Typography>
      </Paper>
    </Box>
  );
}

function compareSecondColumn(a, b) {
  if (a[1] === b[1]) {
    return 0;
  }
  else {
    return (a[1] > b[1]) ? -1 : 1;
  }
}

function CreateLeaderboard(props) {
  const classes = useStyles();
  let data = props.data;
  let color = classes.barPaperTL;
  data.sort(compareSecondColumn);

  if (props.page === "interns") {
    data = props.data.slice(0, 3)
    color = classes.barPaperIntern;
  }

  maxPoints = data[0][1];
  return data.map((key, index) => {
    return (
      <Bar name={key[0]} points={key[1]} color={color}/>
    );
  });
}

export default function Leaderboard(props) {
  const classes = useStyles();
  return(
    <Container maxWidth="lg">
      <Paper elevation={2} className={classes.paper}>
          <CreateLeaderboard data={testData} page={props.page} />
      </Paper>
    </Container>
  );
}