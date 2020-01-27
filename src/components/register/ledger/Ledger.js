import React, { Component } from 'react';
import { Wrapper, Border } from './Ledger.styled.js';

class Ledger extends Component {
  render() {
    return (
      <Wrapper>
        <Border>
          I AM THE LEDGER!!
        </Border>
      </Wrapper>
    );
  }
}

export default Ledger;
