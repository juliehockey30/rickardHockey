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
          <StyledLogo src={logo}/>
          <CustomHamburgerMenu />
        </div>
      :
      <NavMenuWrapper>
        <NavMenuItem>HOME</NavMenuItem>
        <NavMenuItem>ABOUT ME</NavMenuItem>
        <StyledLogo src={logo} />
        <NavMenuItem>CAMPS & CLINICS</NavMenuItem>
        <NavMenuItem>CONTACT ME</NavMenuItem>
      </NavMenuWrapper>
      }
      </HeaderWrapper>
    );
  }
}

export default Header;
