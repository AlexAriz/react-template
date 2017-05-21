import React, { Component } from 'react';

class Test extends Component {
  render() {
    return (
      <p>
        {this.props.match.params.testId}
      </p>
    );
  }
}

export default Test;
