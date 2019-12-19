import React, { Component } from 'react';
import {
  Wrapper,
  ModalOverLay,
  ModalContent,
  CloseIcon,
  ModalTitle,
  ModalDescription,
  ModalLabel,
  ModalValue,
  CostExplination,
  MetaDataWrapper,
  ButtonWrapper,
} from './Camps.styled.js';
import CampCard from './campCard/CampCard.js'
import { RegisterButton } from './campCard/CampCard.styled.js';
import * as firebase from 'firebase';

class Camps extends Component {
  constructor(props){
    super(props);
    this.state={
      showModal: false,
      camps: [],
      loading: true,
      selectedCamp: {}
    };

    this.elementClicked = false

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.getCamps = this.getCamps.bind(this);
    this.renderCampCards = this.renderCampCards.bind(this);

    // window.onclick = e => {
    //   console.log(e.target);
    // }
  }

  componentWillMount() {
    this.getCamps();
  }

  showModal(camp) {
    // console.log("what's this???", window.event.target.innerText);
    // debugger
    // if(window.event.target.innerText !== 'REGISTER NOW') {
      this.setState({ showModal: true, selectedCamp: camp });
    // }
  }

  hideModal() {
    this.setState({ showModal: false });
  }

  getCamps() {
    return firebase.database().ref('/camps/').once('value').then((snapshot) => {
      let camps = (snapshot.val());
      this.setState({ camps }, () => {
        this.setState({ loading: false });
      });
    });
  }

  renderCampCards() {
    return this.state.camps.map((camp) =>
      <CampCard
        camp={camp}
        showModal={this.showModal}
      />
    );
  }

  render() {
    if(this.state.loading){
      return (
        <div>I AM LOADING</div>
      );
    }

    return (
      <Wrapper>
        {this.state.showModal ?
          <ModalOverLay>
            <ModalContent>
            <CloseIcon onClick={this.hideModal}>X</CloseIcon>
              <ModalTitle>{this.state.selectedCamp.name}</ModalTitle>
              <ModalDescription>{this.state.selectedCamp.description}</ModalDescription>
              <MetaDataWrapper>
                <ModalLabel>DATES: </ModalLabel>
                <ModalValue>{this.state.selectedCamp.dates}</ModalValue>
              </MetaDataWrapper>
              <MetaDataWrapper>
                <ModalLabel>TIMES: </ModalLabel>
                <ModalValue>{this.state.selectedCamp.times}</ModalValue>
              </MetaDataWrapper>
              <MetaDataWrapper>
                <ModalLabel>LOCATION: </ModalLabel>
                <ModalValue>{this.state.selectedCamp.location}</ModalValue>
              </MetaDataWrapper>
              <MetaDataWrapper>
                <ModalLabel>COST: </ModalLabel>
                <ModalValue>{this.state.selectedCamp.cost}</ModalValue>
              <CostExplination>{this.state.selectedCamp.costDescription}</CostExplination>
              </MetaDataWrapper>
              <ButtonWrapper>
                <RegisterButton>REGISTER NOW!</RegisterButton>
              </ButtonWrapper>
            </ModalContent>
          </ModalOverLay>
        : null}
        {this.renderCampCards()}
      </Wrapper>
    );
  }
}

export default Camps;
