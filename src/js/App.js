import React, { Component } from 'react';
import { AppContainer } from 'react-hot-loader';

import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <AppContainer>
        <div>
          <h1>
            <Link to="/">Hello World!</Link>
          </h1>
          {React.cloneElement(this.props.children, this.props)}
          <Link to="/test/helloWorld">MAIN</Link>
          <Link to="/foo/bar">MAIN</Link>
        </div>
      </AppContainer>
    );
  }
}

export default App;
