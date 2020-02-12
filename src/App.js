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
    this.state={
      page: '/'
    };

    this.isMobile = window.innerWidth <= 1024;

    this.setPage = this.setPage.bind(this);
  }

  setPage(page) {
    this.setState({ page });
  }

  render() {
    let display;

    if(this.state.page === '/') {
      display = (<Home />)
    } else if(this.state.page === 'about') {
      display = (<About />)
    } else if(this.state.page === 'camps') {
      display = (<Camps setPage={this.setPage} />)
    } else if(this.state.page === 'register') {
      display = (<RegisterCamper setPage={this.setPage} />)
    }

    return (
      <AppWrapper>
        <Header
          isMobile={this.isMobile}
          setPage={this.setPage}
        />
        {display}
      </AppWrapper>
    );
  }
}

export default App;
