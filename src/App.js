import React, { Component } from 'react';
import { AppWrapper } from './App.styled.js'
import Header from './components/header/Header.js';
import Home from './components/home/Home.js';
import About from './components/about/About.js';
import Camps from './components/camps/Camps.js';
import Testimonials from './components/testimonials/Testimonials.js';
import Contact from './components/contact/Contact.js';

class App extends Component {
  constructor(props){
    super(props);
    this.isMobile = window.innerWidth <= 1024;

    this.scrollToElement = this.scrollToElement.bind(this);
  }

  scrollToElement(id) {
    const element = document.getElementById(id);
    const offset = window.innerWidth <= 768 ? 50 : 100;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }

  render() {
    return (
      <AppWrapper id="wrapper">
        <Header
          isMobile={this.isMobile}
          scrollToElement={this.scrollToElement}
        />
        <Home />
        <About />
        <Camps setPage={this.setPage} />
        <Testimonials />
        <Contact />
      </AppWrapper>
    );
  }
}

export default App;
