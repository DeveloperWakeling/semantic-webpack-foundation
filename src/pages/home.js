import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

class Home extends Component {
  render() {
    return (
      <div>
          Home Page
      </div>
    );
  }

  testFunction = () => {
    alert("Hello World");
  }
}

export default Home;