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
        <NavMenuItem onClick={() => {this.props.setPage('about')}}>ABOUT COACH KAREN</NavMenuItem>
        <NavMenuItem onClick={() => {this.props.setPage('testimonials')}}>TESTIMONIALS</NavMenuItem>
        <StyledLogo src={logo} onClick={() => {this.props.setPage('/')}} />
        <NavMenuItem onClick={() => {this.props.setPage('camps')}}>CAMPS & CLINICS</NavMenuItem>
        <NavMenuItem onClick={() => {this.props.setPage('contact')}}>CONTACT</NavMenuItem>
      </NavMenuWrapper>
      }
      </HeaderWrapper>
    );
  }
}

export default Header;
