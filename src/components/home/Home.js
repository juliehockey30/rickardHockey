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
      <div id="home">
        <BackgroundImage src={homeBackground} />
        <HomeObjective>
          Rickard Hockey offers high intensity camps, clinics, and lessons with the intention of providing the best possible environment for your athlete to develop her skills, talents, and athleticism while enjoying the sport she loves.
        </HomeObjective>
      </div>
    );
  }
}

export default Home;
