import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

// Components
import Home from 'js/components/Home';
import Test from 'js/components/Test';

const App = (
  <Router>
    <div>
      <h1>
        <Link to="/">Hello World!</Link>
      </h1>

      <Switch>
        <Route exact path='/' component={Home} />
        <Route path="/test/:testId" component={Test} />
        <Route render={() => <p>Not Found</p>} />
      </Switch>

      <Link to="/test/helloWorld">Test</Link>
    </div>
  </Router>
);

export default App;
