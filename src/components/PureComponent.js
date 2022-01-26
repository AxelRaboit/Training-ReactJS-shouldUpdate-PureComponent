import React, { PureComponent } from 'react';

class PureComp extends PureComponent {
  render() {

    console.log('%c RENDER() DU PureComponent ENFANT SIMPLE', 'color: green;');

    return (
        <div>
            Hello from PureComponent
        </div>
    )
  }
}

export default PureComp;
