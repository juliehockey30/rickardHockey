import React, { Component } from 'react';
import { Wrapper, Background, Email, Phone, InstaLink } from './Contact.styled.js';

class Contact extends Component {
  constructor(props){
    super(props);
    this.state={};
  }

  renderCoachKContact() {
    return(
      <>
        <Background  id="contact">
          <Email href="mailto:kerickard18@gmail.com">kerickard18@gmail.com</Email>
          <Phone>(214)435-4978</Phone>
        </Background>
        <Background>
          <Phone>Coach K on Instagram: </Phone>
          <InstaLink url="https://www.instagram.com/coach.karen/" />
        </Background>
      </>
    )
  }

  renderTCContact() {
    return(
      <>
        <Background>
          <Phone>Team Colorado on Instagram: </Phone>
          <InstaLink url="https://www.instagram.com/teamcoloradoaaa/" />
        </Background>
        <Background>
          <Email href="https://www.teamcoloradohockey.com/">www.teamcoloradohockey.com</Email>
        </Background>
      </>
    )
  }

  render() {
    return (
      <Wrapper>
        <div>
          {this.renderCoachKContact()}
        </div>
        <div>
          {this.renderTCContact()}
        </div>
      </Wrapper>
    );
  }
}

export default Contact;
