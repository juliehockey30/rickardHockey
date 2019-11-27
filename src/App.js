import React, { Component } from 'react';
import Header from './components/header/Header.js';
import { BackgroundImage } from './App.styled.js'
import homeBackground from './images/IMG_5553.JPG';

class App extends Component {
  constructor(props){
    super(props);
    this.state={};

    this.isMobile = window.innerWidth <= 1024;
  }

  render() {
    return (
      <div>
        <Header
          isMobile={this.isMobile}
        />
        <BackgroundImage src={homeBackground} />
      </div>
    );
  }
}

export default App;
