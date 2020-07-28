import React from 'react';
import { AppBar, Toolbar, IconButton, makeStyles, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    homeButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1,
    },
    appbar: {
        background: theme.palette.background.default,
        color: theme.palette.text.primary,
        marginBottom: theme.spacing(4),
    }
}));

function IconButtonLink(props) {
    const { primary, to, } = props;
    const classes = useStyles();
  
    const renderLink = React.useMemo(
      () => React.forwardRef((itemProps, ref) => <RouterLink to={to} ref={ref} {...itemProps} />),
      [to],
    );
  
    return (
      <IconButton edge="start" className={classes.homeButton} color="inherit" component={renderLink}>
        {primary}
      </IconButton>
    )
  }

export default function Header(props) {
    const classes = useStyles();
    return (
        <AppBar position="static" className={classes.appbar} elevation={0}>
            <Toolbar>
                <IconButtonLink primary={<CloseIcon/>} to="/"/>
                <Typography variant="h6" className={classes.title}>
                    {props.name}
                </Typography>
            </Toolbar>
        </AppBar>
    );
}