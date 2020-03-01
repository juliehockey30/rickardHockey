import React, { Component } from 'react';
import {
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
} from './Modal.styled.js';
import { RegisterButton } from '../campCard/CampCard.styled.js';
import RegisterCamper from '../../register/RegisterCamper.js';

class Modal extends Component {
  constructor(props){
    super(props);
    this.state={};

    this.registerClick = this.registerClick.bind(this);
  }

  registerClick(event) {
    window.sessionStorage.setItem('selectedCamp', this.props.selectedCamp.name);
    window.sessionStorage.setItem('selectedCampPrice', this.props.selectedCamp.price);
    window.sessionStorage.setItem('selectedCampGoaliePrice', this.props.selectedCamp.goaliePrice);
    this.props.setModalContent('register');
    const element = document.getElementById('modalContent')
    element.style.transform = 'transformY(180deg)';
  }

  renderCampDetailsModal() {
    return(
      <ModalContent id="modalContent">
        <CloseIcon onClick={this.props.hideModal}>X</CloseIcon>
        <ModalTitle>{this.props.selectedCamp.name}</ModalTitle>
        <ModalDescription>{this.props.selectedCamp.description}</ModalDescription>
        <MetaDataWrapper>
          <ModalLabel>DATES: </ModalLabel>
          <ModalValue>{this.props.selectedCamp.dates}</ModalValue>
        </MetaDataWrapper>
        <MetaDataWrapper>
          <ModalLabel>TIMES: </ModalLabel>
          <ModalValue>{this.props.selectedCamp.times}</ModalValue>
        </MetaDataWrapper>
        <MetaDataWrapper>
          <ModalLabel>LOCATION: </ModalLabel>
          <ModalValue>{this.props.selectedCamp.location}</ModalValue>
        </MetaDataWrapper>
        <MetaDataWrapper>
          <ModalLabel>COST: </ModalLabel>
          <ModalValue>{this.props.selectedCamp.cost}</ModalValue>
          <CostExplination>{this.props.selectedCamp.costDescription}</CostExplination>
        </MetaDataWrapper>
        <ButtonWrapper>
          <RegisterButton onClick={this.registerClick}>REGISTER NOW!</RegisterButton>
        </ButtonWrapper>
      </ModalContent>
    );
  }

  renderRegisterModal() {
    return(
      <ModalContent id="modalContent">
        <CloseIcon onClick={this.props.hideModal}>X</CloseIcon>
        <RegisterCamper />
      </ModalContent>
    );
  }

  render() {
    const modalDisplay = this.props.modalContent === 'campDetails' ?
    this.renderCampDetailsModal() : this.renderRegisterModal()

    return (
      <ModalOverLay>
        {modalDisplay}
      </ModalOverLay>
    );
  }
}

export default Modal;
