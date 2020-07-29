import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import ButtonLink from '../components/ButtonLink';

export default function Home(){
    return (
      <Grid container alignItems="center" direction="column" justify="center" style={{ minHeight: '100vh' }}>
        <Grid item xs={12}>
          <Typography variant="h1"> E1T1 Leaderboard</Typography>
        </Grid>
        <Grid item xs={12}>
            <ButtonLink primary="Interns" to="/interns" color="primary" variant="contained"/>
        </Grid>
      </Grid>
    );
}
