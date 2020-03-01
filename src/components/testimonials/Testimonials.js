import React, { Component } from 'react';
import {
  Background,
  Wrapper,
  TestimonyWrapper,
  TestimonialsHeader,
  NameAndRole,
  LoaderWrapper,
  StyledLoader,
} from './Testimonials.styled.js';
import * as firebase from 'firebase';

class Testimonials extends Component {
  constructor(props){
    super(props);
    this.state={
      testimonials: [],
      loading: true,
    };

    this.getTestimonials = this.getTestimonials.bind(this);
    this.renderTestimonials = this.renderTestimonials.bind(this);
  }

  componentWillMount() {
    this.getTestimonials();
  }

  getTestimonials() {
    return firebase.database().ref('/testimonials/').once('value').then((snapshot) => {
      let testimonials = (snapshot.val());
      this.setState({ testimonials }, () => {
        this.setState({ loading: false });
      });
    });
  }

  renderTestimonials() {
    return this.state.testimonials.map((testimony) =>
      <TestimonyWrapper>
        {testimony.testimony}
        <br />
        <br />
        <NameAndRole>{testimony.name}</NameAndRole>
        <NameAndRole>{testimony.role}</NameAndRole>
      </TestimonyWrapper>
    );
  }

  render() {
    if(this.state.loading){
      return (
        <LoaderWrapper>
          <StyledLoader src="https://media1.tenor.com/images/e68cc33983bed347554ce23fe2bd08bd/tenor.gif" />
        </LoaderWrapper>
      );
    }

    return (
      <Background>
        <Wrapper id="testimonials">
          <TestimonialsHeader>WHAT PEOPLE ARE SAYING ABOUT COACH K</TestimonialsHeader>
          {this.renderTestimonials()}
        </Wrapper>
      </Background>
    );
  }
}

export default Testimonials;
