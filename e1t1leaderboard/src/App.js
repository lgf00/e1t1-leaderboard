import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createMuiTheme, ThemeProvider, CssBaseline } from '@material-ui/core';
import Home from './pages/Home';
import TeamLeaders from './pages/TeamLeaders';
import Interns from './pages/Interns';

const theme = createMuiTheme({
  palette: {
    type: 'light',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Router>
          <Switch>
            <Route exact path="/"> <Home/> </Route>
            <Route exact path="/teamleaders"> <TeamLeaders/> </Route>
            <Route exact path="/interns"> <Interns/> </Route>
          </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
