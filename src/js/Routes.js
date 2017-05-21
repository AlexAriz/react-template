import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

// Components
import Home from './components/Home';
import Child from './components/Child';

const Routes = (
  <Router>
    <div>
      <h1>
        <Link to="/">Hello World!</Link>
      </h1>

      <Switch>
        <Route exact path='/' component={Home} />  
        <Route path="/test/:testId" component={Child} />
        <Route path="/foo/:testId" component={Child} />
        <Route render={() => <p>Not Found</p>} />
      </Switch>

      <Link to="/test/helloWorld">CHILD</Link>
      <Link to="/foo/bar">CHILD</Link>
    </div>
  </Router>
);

export default Routes;
