import React, { Component } from 'react';
import {
  Wrapper,
  FormWrapper,
  CampName,
  CampCost,
  InputWrapper,
  FlexInput,
  FullWidthInput,
  PositionSelect,
} from './InfoForm.styled.js';
import * as firebase from 'firebase';

class InfoForm extends Component {
  constructor(props){
    super(props);
    this.state={
      campCost: "Please select Player Position to see cost",
      playerFirstNameValue: '',
      playerLastNameValue: '',
      playerBirthYearValue: '',
      playerPositionValue: '',
      player2019TeamValue: '',
      playerDietValue: '',
      parentFirstNameValue: '',
      parentPhoneNumberValue: '',
      parentEmailValue: '',
    };

    this.sendForm = this.sendForm.bind(this);
    this.selectPosition = this.selectPosition.bind(this);
  }

  sendForm(e) {
    e.preventDefault();

    let regsiterUserRef = firebase.database().ref(`/${window.sessionStorage.getItem('selectedCamp')} Campers/`).push();
    regsiterUserRef.set({
      playerFirstName: this.state.playerFirstNameValue,
      playerLastName: this.state.playerLastNameValue,
      playerBirthYear: this.state.playerBirthYearValue,
      playerPosition: this.state.playerPositionValue,
      player2019Team: this.state.player2019TeamValue,
      playerDiet: this.state.playerDietValue,
      parentFirstName: this.state.parentFirstNameValue,
      parentPhoneNumber: this.state.parentPhoneNumberValue,
      parentEmail: this.state.parentEmailValue,
    });
  }

  selectPosition(event) {
    this.setState({ playerPositionValue: event.target.value});
    if(event.target.value === 'goalie') {
      this.setState({ campCost: `$${window.sessionStorage.getItem('selectedCampGoaliePrice')}`});
    } else {
      this.setState({ campCost: `$${window.sessionStorage.getItem('selectedCampPrice')}`});
    }
  }

  render() {
    return (
      <Wrapper>
        <FormWrapper>
          <CampName>Register Now for the {window.sessionStorage.getItem('selectedCamp')}</CampName>
          <CampCost>Cost: {this.state.campCost}</CampCost>
          <h2>Player Information</h2>
          <InputWrapper>
            <FlexInput
              type="text"
              autoFocus={true}
              name="PlayerFirstName"
              placeholder="Player's First Name"
              onChange={(event) => this.setState({ playerFirstNameValue: event.target.value})}
              value={this.state.playerFirstNameValue}
            />
            <FlexInput
              type="text"
              autoFocus={true}
              name="PlayerLastName"
              placeholder="Player's Last Name"
              onChange={(event) => this.setState({ playerLastNameValue: event.target.value})}
              value={this.state.playerLastNameValue}
            />
          </InputWrapper>
          <InputWrapper>
            <FlexInput
              type="text"
              autoFocus={true}
              name="PlayerBirthYear"
              placeholder="Player's Birth Year"
              onChange={(event) => this.setState({ playerBirthYearValue: event.target.value})}
              value={this.state.playerBirthYearValue}
            />
            <PositionSelect
              name="PlayerPosition"
              onChange={(event) => this.selectPosition(event)}
            >
              <option value="" disabled selected hidden>Player's Position</option>
              <option value="forward">Forward</option>
              <option value="defense">Defense</option>
              <option value="goalie">Goalie</option>
            </PositionSelect>
          </InputWrapper>
          <FullWidthInput
            type="text"
            autoFocus={true}
            name="2019Team"
            placeholder="Player's 2019 Fall/Winter Team"
            onChange={(event) => this.setState({ player2019TeamValue: event.target.value})}
            value={this.state.player2019TeamValue}
          />
          <FullWidthInput
            type="text"
            autoFocus={true}
            name="DietaryConcerns"
            placeholder="Player's Dietary Concerns If Any"
            onChange={(event) => this.setState({ playerDietValue: event.target.value})}
            value={this.state.playerDietValue}
          />
        </FormWrapper>
        <FormWrapper>
          <h2>Parent Information</h2>
          <InputWrapper>
            <FlexInput
              type="text"
              autoFocus={true}
              name="parentFirstName"
              placeholder="Parent's First Name"
              onChange={(event) => this.setState({ parentFirstNameValue: event.target.value})}
              value={this.state.parentFirstNameValue}
            />
            <FlexInput
              type="text"
              autoFocus={true}
              name="ParentLastName"
              placeholder="Parent's Last Name"
              onChange={(event) => this.setState({ parentLastNameValue: event.target.value})}
              value={this.state.parentLastNameValue}
            />
          </InputWrapper>
          <InputWrapper>
            <FlexInput
              type="text"
              autoFocus={true}
              name="ParentPhone"
              placeholder="Parent's Phone Number"
              onChange={(event) => this.setState({ parentPhoneNumberValue: event.target.value})}
              value={this.state.parentPhoneNumberValue}
            />
            <FlexInput
              type="text"
              autoFocus={true}
              name="ParentEmail"
              placeholder="Parent's Email"
              onChange={(event) => this.setState({ parentEmailValue: event.target.value})}
              value={this.state.parentEmailValue}
            />
          </InputWrapper>
          <button
            onClick={this.sendForm}
          >
          SEND DATA
          </button>
        </FormWrapper>
      </Wrapper>
    );
  }
}

export default InfoForm;
