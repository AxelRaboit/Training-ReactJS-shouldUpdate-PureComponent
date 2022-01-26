import React, { Component } from 'react';

class SimpleComponent extends Component {
  render() {

    console.log('%c RENDER() DU COMPOSANT ENFANT SIMPLE', 'color: pink;');

    return (
        <div>
            Hello World
        </div>
    )
  }
}

export default SimpleComponent;
