import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Main extends Component {
  render() {
    return (
      <p>
        {this.props.match.params.testId}
      </p>
    );
  }
}

Main.propTypes = {
  match: PropTypes.object
};

export default Main;
