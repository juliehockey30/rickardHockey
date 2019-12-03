import React, { Component } from 'react';
import { HeaderWrapper, StyledLogo, NavMenuWrapper, NavMenuItem } from './Header.styled.js';
import CustomHamburgerMenu from './hamburgerMenu//HamburgerMenu.js'
import logo from '../../images/logo.png'

class Header extends Component {
  constructor(props){
    super(props);
    this.state={};
  }

  render() {
    return (
      <HeaderWrapper isMobile={this.props.isMobile}>
      {this.props.isMobile ?
        <div>
          <StyledLogo src={logo} onClick={() => {window.location.pathname = '/'}}/>
          <CustomHamburgerMenu />
        </div>
      :
      <NavMenuWrapper>
        <NavMenuItem onClick={() => {window.location.pathname = '/about'}}>ABOUT COACH KAREN</NavMenuItem>
        <NavMenuItem onClick={() => {window.location.pathname = '/testimonials'}}>TESTIMONIALS</NavMenuItem>
        <StyledLogo src={logo} onClick={() => {window.location.pathname = '/'}} />
        <NavMenuItem onClick={() => {window.location.pathname = '/camps'}}>CAMPS & CLINICS</NavMenuItem>
        <NavMenuItem onClick={() => {window.location.pathname = '/contact'}}>CONTACT</NavMenuItem>
      </NavMenuWrapper>
      }
      </HeaderWrapper>
    );
  }
}

export default Header;
