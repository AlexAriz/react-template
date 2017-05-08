import React from 'react';
import { AppContainer } from 'react-hot-loader';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

// Components
import App from './App';
import Main from './components/Main';

const Routes = (
  <Router>
    <App>
      <Switch>
        <Route path="/test/:testId" component={Main} />
        <Route path="/foo/:testId" component={Main} />
      </Switch>
    </App>
  </Router>
);

export default Routes;
