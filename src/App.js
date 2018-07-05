import React, { Component } from 'react';

import './styles/jumbotron.css'

import NavBar from './components/Nav/NavBar/';
import Jumbotron from './components/Jumbotron';
import Container from './components/Container';
import Footer from './components/Footer/Index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Jumbotron />
        <Container />
        <Footer />
      </div>
    );
  }
}

export default App;
