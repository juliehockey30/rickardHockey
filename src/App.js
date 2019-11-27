import React, { Component } from 'react';
import { AppWrapper } from './App.styled.js'
import Header from './components/header/Header.js';
import Home from './components/home/Home.js'

class App extends Component {
  constructor(props){
    super(props);
    this.state={};

    this.isMobile = window.innerWidth <= 1024;
  }

  render() {
    return (
      <AppWrapper>
        <Header
          isMobile={this.isMobile}
        />
        <Home />
      </AppWrapper>
    );
  }
}

export default App;
