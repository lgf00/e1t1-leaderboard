import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import { Paper, Typography, Box, } from '@material-ui/core';

const useStyles = theme => ({
    paper: {
      paddingRight: theme.spacing(4),
      paddingLeft: theme.spacing(4),
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
      margin: theme.spacing(2),
    },
    barPaper: {
        padding: theme.spacing(2),
        margin: '20px 0px 20px 0px',
        display: 'flex',
        flexDirection: 'row',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        color: 'white',
        background: theme.palette.primary.dark,
    },
    barPaperComplete: {
        padding: theme.spacing(2),
        margin: '20px 0px 20px 0px',
        display: 'flex',
        flexDirection: 'row',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        color: 'white',
        background: 'green',
    },
    barPaperGold: {
        padding: theme.spacing(2),
        margin: '20px 0px 20px 0px',
        display: 'flex',
        flexDirection: 'row',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        color: 'white',
        background: '#ffc107',
        boxShadow: '0 0 10px 5px #fff',
    },
    name: {
      flexGrow: 1,
    },
});

class TotalView extends Component {

    Bar(props) {
        const { name, points, classes, max } = props;
        
        let width = points / max;
        
        if (window.location.pathname === "/e1t1-leaderboard/current-week") {
            width = (points > 1000) ? 1 : (points < 100) ? 0.09 : points / 1000;
        }
        
        let style = classes.barPaper;
        if (points === max && window.location.pathname !== "/e1t1-leaderboard/team-leaders") {
            style = classes.barPaperGold;
        }
        if (points >= 1000 && window.location.pathname === "/e1t1-leaderboard/current-week") {
            style = classes.barPaperComplete;
        }

        return(
            <Box width={width}>
                <Paper elevation={3} className={style}>
                    <Typography className={classes.name}> {name} </Typography>
                    <Typography> {points} </Typography>
                </Paper>
            </Box>
        );
    }

    comparePoints(a, b) {
        if (a.points === b.points) {
          return 0;
        }
        else {
          return (a.points > b.points) ? -1 : 1;
        }
    }

    render() {
        const { isLoading, data, classes } = this.props;

        let interns = [...data];
        interns.sort(this.comparePoints);
        let maxPoints = 1;
        
        if (!isLoading) {
            maxPoints = interns[0].points;
        }

        return (
            <div>
                {interns.map((intern, key) => (
                    <this.Bar key={key} name={intern.name} points={intern.points} classes={classes} max={maxPoints}/>
                ))}
            </div>
        );
    }
}

TotalView.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    data: PropTypes.array.isRequired,
    classes: PropTypes.object.isRequired,
}

export default withStyles(useStyles)(TotalView);