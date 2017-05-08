import React, { Component } from 'react';

class Main extends Component {
  render() {
    return (
      <p>
        {this.props.match.params.testId}
      </p>
    );
  }
}

export default Main;
