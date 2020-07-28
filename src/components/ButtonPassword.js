import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Fade, TextField, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import ButtonLink from './ButtonLink';

const useStyles = theme => ({
    button: {
      margin: '25px 15px',
      paddingLeft: 25,
      paddingRight: 25,
    },
});


class ButtonPassword extends Component {
    state = {
        showInputField: false,
    }

    showPasswordField() {
        this.setState({showInputField: true});
    }
    
    render() {
        const { showInputField } = this.state;
        const { classes } = this.props;
        return (
            <Grid container  alignItems="center" direction="column" justify="center">
                <Grid item xs={12}>
                    <Button color="secondary" variant="outlined" className={classes.button} onClick={() => this.showPasswordField()}>
                        Team Leaders
                    </Button>
                    <ButtonLink primary="Interns" to="/interns" color="primary" variant="contained" func={null}/>
                </Grid>
                <Grid item xs={12}>
                    <Fade in={showInputField} timeout={1000}>
                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            margin="dense"
                            color="secondary"
                            autoComplete="current-password"
                            variant="outlined"
                        />
                    </Fade>
                </Grid>
            </Grid>
        );
    }
}

ButtonPassword.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(useStyles)(ButtonPassword);