import React, { Component } from 'react';
import {
  Wrapper,
  CampTitle,
  Label,
  Value,
  RegisterButton
} from './CampCard.styled.js';

class CampCard extends Component {
  constructor(props){
    super(props);
    this.state={};

    this.showModal = this.showModal.bind(this);
    this.registerClick = this.registerClick.bind(this);
  }

  showModal() {
    if(window.event.target.innerText !== 'REGISTER NOW!') {
      return this.props.showModal(this.props.camp)
    }
  }

  registerClick(event) {
    window.sessionStorage.setItem('selectedCamp', this.props.camp.name);
    window.sessionStorage.setItem('selectedCampPrice', this.props.camp.price);
    window.sessionStorage.setItem('selectedCampGoaliePrice', this.props.camp.goaliePrice);
    window.location.pathname = '/register';
  }

  render() {
    return (
      <Wrapper onClick={this.showModal}>
        <CampTitle>{this.props.camp.name}</CampTitle>
        <Label>COST: </Label>
        <Value>{this.props.camp.cost}</Value>
        <br/>
        <br/>
        <Label>DATES: </Label>
        <Value>{this.props.camp.dates}</Value>
        <br/>
        <br/>
        <Label>LOCATION: </Label>
        <Value>{this.props.camp.location}</Value>
        <br/>
        <br/>
        {this.props.camp.ages ?
          <>
            <Label>AGES: </Label>
            <Value>{this.props.camp.ages}</Value>
            <br/>
            <br/>
          </>
        : null}
        <RegisterButton onClick={this.registerClick}>REGISTER NOW!</RegisterButton>
      </Wrapper>
    );
  }
}

export default CampCard;
