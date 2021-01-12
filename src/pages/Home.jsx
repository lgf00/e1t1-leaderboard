import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import ButtonLink from '../components/ButtonLink';

export default function Home(){
    return (
      <Grid container alignItems="center" direction="column" justify="center" style={{ minHeight: '100vh' }}>
        <Grid item xs={12} style={{ marginBottom: '40px' }}>
          <Typography variant="h1" style={{ margin: '0 20px', fontSize: 'min(15vw, 100px)', textAlign: 'center', }}> E1T1 Leaderboard 2021</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4" style={{ fontSize: 'min(6vw, 40px)' }}> Interns </Typography>
        </Grid>
        <Grid item xs={12} container alignItems="center" justify="center">
            <ButtonLink primary="Cumalative" to="/cumalative" color="primary" variant="contained"/>
            <ButtonLink primary="Current Week" to="/current-week" color="primary" variant="contained"/>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4" style={{ fontSize: 'min(6vw, 40px)' }}> Team Leaders (WIP) </Typography>
        </Grid>
        <Grid item xs={12} container alignItems="center" justify="center">
          <ButtonLink primary="Cumalative" to="/tl-cumalative" color="primary" variant="contained"/>
          <ButtonLink primary="Current Week" to="/tl-current-week" color="primary" variant="contained"/>
        </Grid>
      </Grid>
    );
}
