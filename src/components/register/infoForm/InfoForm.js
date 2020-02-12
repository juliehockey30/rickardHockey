import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import * as firebase from 'firebase';
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

const SERVER = 'http://localhost:8080';

class InfoForm extends Component {
  constructor(props){
    super(props);
    this.state={
      campCost: "Please select Player's Position to see cost",
      chargeAmount: 0,
      display: '',
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
    this.handleToken = this.handleToken.bind(this);
  }

  sendForm() {
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

    this.setState({ display: "paySuccess" });
  }

  selectPosition(event) {
    this.setState({ playerPositionValue: event.target.value});
    if(event.target.value === 'goalie') {
      this.setState({
        campCost: `$${window.sessionStorage.getItem('selectedCampGoaliePrice')}`,
        chargeAmount: parseInt(window.sessionStorage.getItem('selectedCampGoaliePrice'))*100
      });
    } else {
      this.setState({
        campCost: `$${window.sessionStorage.getItem('selectedCampPrice')}`,
        chargeAmount: parseInt(window.sessionStorage.getItem('selectedCampPrice'))*100
      });
    }
  }

  handleToken(token) {
    const totalCost = this.state.chargeAmount;
    const description = `${this.state.playerFirstNameValue} ${this.state.playerLastNameValue} - ${window.sessionStorage.getItem('selectedCamp')}`

    const body = { "token": token.id, "amount": totalCost, "description": description };

    const request = new Request(
      SERVER + "/token",
    {
      method: 'POST',
      body: JSON.stringify(body),
      headers: new Headers({'Content-type': 'application/json'})
    });

    fetch(request)
    .then((response)=>{
      if(response.ok){

      }
      else{
        console.log("ERROR");
      }
    });

    this.sendForm();
    console.log("sent new token to server");
  }

  render() {
    if(this.state.display === 'paySuccess'){
      return(
        <Wrapper>
          <CampName>Thank you for registering!</CampName>
        </Wrapper>
      )
    } else {
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
            <StripeCheckout
              stripeKey="pk_test_UJRtfxaasBeJuxVud3KueDLs00KwpM4Bu9"
              token={this.handleToken}
              amount={this.state.chargeAmount}
              name={window.sessionStorage.getItem('selectedCamp')}
            />
          </FormWrapper>
        </Wrapper>
      );
    }
  }
}

export default InfoForm;
