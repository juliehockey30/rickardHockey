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

class Modal extends Component {
  render() {

    return (
      <ModalOverLay>
        <ModalContent>
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
            <RegisterButton>REGISTER NOW!</RegisterButton>
          </ButtonWrapper>
        </ModalContent>
      </ModalOverLay>
    );
  }
}

export default Modal;
