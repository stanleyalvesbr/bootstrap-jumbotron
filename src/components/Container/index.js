import React, { Component } from 'react';
import ContainerHeading from './ContainerHeading';

class Container extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <ContainerHeading />
          <ContainerHeading />
          <ContainerHeading />
        </div>
        <hr />
      </div>
    );
  }
}

export default Container;