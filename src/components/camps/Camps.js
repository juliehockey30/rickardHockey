import React, { Component } from 'react';
import {
  Background,
  Wrapper,
  CampHeader,
  Header,
  Subheader,
  LoaderWrapper,
  StyledLoader,
} from './Camps.styled.js';
import Modal from './modal/Modal.js'
import CampCard from './campCard/CampCard.js'
import * as firebase from 'firebase';

class Camps extends Component {
  constructor(props){
    super(props);
    this.state={
      showModal: false,
      camps: [],
      loading: true,
      selectedCamp: {},
      modalContent: 'campDetails'
    };

    this.elementClicked = false

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.getCamps = this.getCamps.bind(this);
    this.renderCampCards = this.renderCampCards.bind(this);
    this.setModalContent = this.setModalContent.bind(this);
  }

  componentWillMount() {
    this.getCamps();
  }

  showModal(camp) {
      this.setState({ showModal: true, selectedCamp: camp });
  }

  setModalContent(content){
    if(!this.state.showModal) {
      this.setState({ showModal: true, modalContent: content})
    } else {
      this.setState({ modalContent: content })
    }
  }

  hideModal() {
    this.setState({ showModal: false, modalContent: 'campDetails' });
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
        setPage={this.props.setPage}
        showModal={this.showModal}
        setModalContent={this.setModalContent}
      />
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
      <Background id="camps">
        <CampHeader>AVAILABLE CAMPS & CLINICS</CampHeader>
        <Header>Click on any camp to view more details about it!</Header>
        <Subheader>If you have any questions, please contact Coach Karen directly.</Subheader>
        <Wrapper>
          {this.state.showModal ?
            <Modal
              hideModal={this.hideModal}
              modalContent={this.state.modalContent}
              selectedCamp={this.state.selectedCamp}
              setModalContent={this.setModalContent}
            />
          : null}
          {this.renderCampCards()}
        </Wrapper>
      </Background>
    );
  }
}

export default Camps;
