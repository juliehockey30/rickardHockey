import React, { Component } from 'react';
import InfoForm from './infoForm/InfoForm.js';

class RegisterCamper extends Component {
  render() {
    return (
        <InfoForm setPage={this.props.setPage}/>
    );
  }
}

export default RegisterCamper;
