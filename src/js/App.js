import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

App.propTypes = {
  children: PropTypes.object
};

export default App;
