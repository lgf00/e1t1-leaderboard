import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createMuiTheme, ThemeProvider, CssBaseline } from '@material-ui/core';
import Home from './pages/Home';
import CurrentWeek from './pages/CurrentWeek';
import Cumalative from './pages/Cumalative';
import TLCurrentWeek from './pages/TLCurrentWeek';
import TLCumalative from './pages/TLCumalative';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Router basename={"/e1t1-leaderboard" || ''}>
          <Switch>
            <Route exact path="/"> <Home/> </Route>
            <Route exact path="/current-week"> <CurrentWeek/> </Route>
            <Route exact path="/cumalative"> <Cumalative/> </Route>
            <Route exact path="/tl-current-week"> <TLCurrentWeek/> </Route>
            <Route exact path="/tl-cumalative"> <TLCumalative/> </Route>
          </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
