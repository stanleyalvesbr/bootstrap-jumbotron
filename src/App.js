import React, { Component } from 'react';

import './styles/jumbotron.css'
import NavBar from './components/NavBar/';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
      </div>
    );
  }
}

export default App;
