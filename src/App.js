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
    let display;

    if(window.location.pathname === '/') {
      display = (<Home />)
    } else if(window.location.pathname === '/about') {
      display = (<div>Test</div>)
    }

    return (
      <AppWrapper>
        <Header
          isMobile={this.isMobile}
        />
        {display}
      </AppWrapper>
    );
  }
}

export default App;
