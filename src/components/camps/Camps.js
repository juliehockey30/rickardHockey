import React, { Component } from 'react';
import { Wrapper, Header, Subheader } from './Camps.styled.js';
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
      selectedCamp: {}
    };

    this.elementClicked = false

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.getCamps = this.getCamps.bind(this);
    this.renderCampCards = this.renderCampCards.bind(this);
  }

  componentWillMount() {
    this.getCamps();
  }

  showModal(camp) {
      this.setState({ showModal: true, selectedCamp: camp });
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
        setPage={this.props.setPage}
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
      <div>
        <Header>Click on any camp to view more details about it!</Header>
        <Subheader>If you have any questions, please contact Coach Karen directly.</Subheader>
        <Wrapper>
          {this.state.showModal ?
            <Modal
              hideModal={this.hideModal}
              selectedCamp={this.state.selectedCamp}
            />
          : null}
          {this.renderCampCards()}
        </Wrapper>
      </div>
    );
  }
}

export default Camps;
