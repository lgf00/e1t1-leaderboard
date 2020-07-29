import React, { Component } from 'react';
import PropTypes from 'prop-types';
import load from './helpers/load';
import config from '../resources/config';
import { withStyles } from '@material-ui/styles';
import { Paper, Container, Typography, Box, LinearProgress, Fade } from '@material-ui/core';

const useStyles = theme => ({
    paper: {
      padding: theme.spacing(2),
    },
    barPaper: {
      padding: theme.spacing(2),
      margin: theme.spacing(2),
      display: 'flex',
      flexDirection: 'row',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      color: 'white',
      background: theme.palette.primary.dark,
    },
    barPaperComplete: {
        padding: theme.spacing(2),
        margin: theme.spacing(2),
        display: 'flex',
        flexDirection: 'row',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        color: 'white',
        background: 'green',
      },
    name: {
      flexGrow: 1,
    },
    loading: {
        margin: theme.spacing(2),
    },
    notLoading: {
        padding: 0.0,
    }
});

class Leaderboard extends Component {
    
    state = {
        interns: [],
        error: null,
        loading: true,
    }

    componentDidMount() {
        window.gapi.load("client", this.initClient);
    }

    onLoad = (data, error) => {
        if (data) {
            const interns = data.fullSend;
            this.setState({ interns });
            this.setState({ loading: false});
        } else {
            this.setState({ error });
        }
    };

    initClient = () => {
        window.gapi.client.init({
            apiKey: config.apiKey,
            discoveryDocs: config.discoveryDocs,
        }).then(() => {
            load(this.onLoad);
        });
    };

    Bar(props) {
        const { name, points, classes } = props;
        const width = (points > 1000) ? 1 : (points < 100) ? 0.1 : points / 1000;
        
        let style = classes.barPaper;
        if (points >= 1000) {
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
        if (parseInt(a.points) === parseInt(b.points)) {
          return 0;
        }
        else {
          return (parseInt(a.points) > parseInt(b.points)) ? -1 : 1;
        }
    }

    render() {
        const { interns, error, loading } = this.state;
        const { classes } = this.props;

        if (error) {
            console.log(error);
            return <div> error occured fetching data </div>
        }

        let data = [{name: "ERROR", points: 404}];
        // let team1 = [{name: "ERROR", points: 404}];
        // let team2 = [{name: "ERROR", points: 404}];
        // let team3 = [{name: "ERROR", points: 404}];
        // let team4 = [{name: "ERROR", points: 404}];

        let loadingStyle = classes.loading;
        if(!loading) {
            loadingStyle = classes.notLoading;
            data = interns;
            data.sort(this.comparePoints);
            // team1 = data.slice(0, 10).sort(this.comparePoints);
            // team2 = data.slice(10, 21).sort(this.comparePoints);
            // team3 = data.slice(21, 32).sort(this.comparePoints);
            // team4 = data.slice(32, 41).sort(this.comparePoints);
        }

        return (
            <Container maxWidth="lg">
                <Paper elevation={2} className={classes.paper} width={1}>
                    <Fade in={loading} timeout={30}>
                        <LinearProgress color="primary" className={loadingStyle}/>
                    </Fade>
                    <Fade in={!loading} timeout={1000}>
                        <div>
                            {data.map((intern, key) => (
                                <this.Bar key={key} name={intern.name} points={intern.points} classes={classes}/>
                            ))}
                        </div>
                    </Fade>
                </Paper>
          </Container>
        );
    }
}

Leaderboard.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(useStyles)(Leaderboard);