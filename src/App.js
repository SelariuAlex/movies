import React, { Component } from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Home />
      </React.Fragment>
    );
  }
}

export default App;
