import React, { Component } from 'react';
import { AppWrapper } from './App.styled.js'
import Header from './components/header/Header.js';
import Home from './components/home/Home.js';
import About from './components/about/About.js';
import Camps from './components/camps/Camps.js';
import RegisterCamper from './components/register/RegisterCamper.js';

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
      display = (<About />)
    } else if(window.location.pathname === '/camps') {
      display = (<Camps />)
    } else if(window.location.pathname === '/register') {
      display = (<RegisterCamper />)
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
