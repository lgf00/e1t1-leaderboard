import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import ButtonLink from '../components/ButtonLink';

export default function Home(){
    return (
      <Grid container alignItems="center" direction="column" justify="center" style={{ minHeight: '100vh' }}>
        <Grid item xs={12}>
          <Typography variant="h1"> E1T1 Leaderboard 2021</Typography>
        </Grid>
        <Grid item xs={12}>
            <ButtonLink primary="Cumalative" to="/cumalative" color="primary" variant="contained"/>
            <ButtonLink primary="Current Week 1/15" to="/current-week" color="primary" variant="contained"/>
        </Grid>
        <Grid item xs={12}>
            <ButtonLink primary="Team Leaders" to="/team-leaders" color="primary" variant="contained"/>
        </Grid>
      </Grid>
    );
}
