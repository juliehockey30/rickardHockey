import React, { Component } from 'react';
import { Wrapper, Bio, Image } from './About.styled.js';
import image from '../../images/IMG_5338.JPG';

class About extends Component {
  constructor(props){
    super(props);
    this.state={};
  }

  render() {
    return (
      <Wrapper>
        <Image src={image}/>
        <Bio>
          Coach Karen Rickard is a native of Bowmanville, ON Canada and played competitive youth hockey with the Toronto Aeros before accepting a full scholarship to the University of Wisconsin where she received recognition as a stand out student-athlete with awards such as the Jeff Sauer Award, WCHA Player of the Week (twice), WCHA All-Second Team, Big Ten scholar-athlete, and WCHA All Academic team.
          <br />
          <br />
          After her collegiate career, Rickard went on to earn her MBA and Master of Sports Administration from Ohio University before landing in Dallas, TX where she started coaching with the Dallas Stars Elite and worked full time with the Dallas Mavericks NBA team.
          <br />
          <br />
          Rickard moved to Colorado in 2015, has coached at multiple USA Hockey National Player Development camps, holds her USA Hockey Level Four CEP certificate, and is currently the Head Coach of the 14U and 16U girls Tier I Team Colorado teams.
        </Bio>
      </Wrapper>
    );
  }
}

export default About;
