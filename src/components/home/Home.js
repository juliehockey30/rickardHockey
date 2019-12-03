import React, { Component } from 'react';
import { HomeObjective, BackgroundImage } from './Home.styled.js';
import homeBackground from '../../images/IMG_5553.JPG';

class Home extends Component {
  constructor(props){
    super(props);
    this.state={};
  }

  render() {
    return (
      <>
        <BackgroundImage src={homeBackground} />
        <HomeObjective>
          Here is your business statement. Maybe something like:
          Rickard Hockey offers high intensity camps, clinics, and private lessons for hockey players of all ages and all skill levels.
        </HomeObjective>
      </>
    );
  }
}

export default Home;
