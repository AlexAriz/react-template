import React, { Component } from 'react';

class Child extends Component {
  render() {
    return (
      <p>
        {this.props.match.params.testId}
      </p>
    );
  }
}

export default Child;
