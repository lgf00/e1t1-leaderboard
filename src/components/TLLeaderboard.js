import React, { Component } from 'react';
import PropTypes from 'prop-types';
import load from './helpers/load';
import config from '../resources/config';
import { withStyles } from '@material-ui/styles';
import { Paper, Container, LinearProgress, Fade, Tab, Tabs } from '@material-ui/core';
import TeamView from './TeamView';
import TotalView from './TotalView';
import TabPanel from './TabPanel';

const useStyles = theme => ({
    paper: {
      paddingRight: theme.spacing(4),
      paddingLeft: theme.spacing(4),
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
      margin: theme.spacing(2),
    },
    loading: {
        margin: theme.spacing(2),
        marginTop: theme.spacing(5),
    },
    notLoading: {
        padding: 0,
        margin: 0,
    },
    allTab: {
        marginTop: theme.spacing(1),
    },
    teamTab: {
        marginTop: theme.spacing(1),
    }
});

class Leaderboard extends Component {
    
    state = {
        interns: [],
        error: null,
        loading: true,
        value: 0,
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

    a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    handleChange = (event, newValue) => {
        this.setState({ value: newValue});
    }

    render() {
        const { interns, error, loading, value } = this.state;
        const { classes } = this.props;

        let loadingStyle = classes.loading;
        if(!loading) {
            loadingStyle = classes.notLoading;

            if (error) {
                console.log(error);
                return <div> error occured fetching data, contact Lucas Guzman-Finn </div>
            }
        }

        return (
            <Container maxWidth="lg">
                <Paper elevation={2} className={classes.paper} width={1}>
                    <Tabs value={value} onChange={this.handleChange} aria-label="simple tabs example" indicatorColor="primary" variant="fullWidth">
                        <Tab label="All View" {...this.a11yProps(0)}/>
                    </Tabs>
                    <Fade in={loading} timeout={30} className={loadingStyle}>
                        <LinearProgress color="secondary"/>
                    </Fade>
                    <Fade in={!loading} timeout={1000}>
                        <div>
                            <TabPanel value={value} index={0} className={classes.allTab}>
                                <TotalView data={interns} isLoading={loading}/>
                            </TabPanel>
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