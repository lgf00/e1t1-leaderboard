import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createMuiTheme, ThemeProvider, CssBaseline } from '@material-ui/core';
import Home from './pages/Home';
import Interns from './pages/Interns';

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
            <Route exact path="/interns"> <Interns/> </Route>
          </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
