import React from 'react'
import { Button, makeStyles } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom'

const useStyles = makeStyles({
  button: {
    margin: '25px 15px',
    paddingLeft: 40,
    paddingRight: 40,
  },
});

export default function ButtonLink(props) {
    const { primary, to, color, variant } = props;
    const classes = useStyles();
  
    const renderLink = React.useMemo(
      () => React.forwardRef((itemProps, ref) => <RouterLink to={to} ref={ref} {...itemProps} />),
      [to],
    );
  
    return (
      <Button color={color} variant={variant} component={renderLink} className={classes.button}>
        {primary}
      </Button>
    )
}