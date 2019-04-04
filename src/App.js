import React, { Component } from 'react';
import SomeComponent from './SomeComponent'
import { OtherComponent } from './OtherComponent'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <SomeComponent /> */}
        <OtherComponent />
      </React.Fragment>
    );
  }
}

export default App;
