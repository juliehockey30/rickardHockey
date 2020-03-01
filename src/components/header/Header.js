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
          <StyledLogo src={logo} onClick={() => this.props.scrollToElement('home')}/>
          <CustomHamburgerMenu scrollToElement={this.props.scrollToElement}/>
        </div>
      :
      <NavMenuWrapper>
        <NavMenuItem onClick={() => this.props.scrollToElement('about')}>ABOUT COACH KAREN</NavMenuItem>
        <NavMenuItem onClick={() => this.props.scrollToElement('camps')}>CAMPS & CLINICS</NavMenuItem>
        <StyledLogo src={logo} onClick={() => this.props.scrollToElement('home')} />
        <NavMenuItem onClick={() => this.props.scrollToElement('testimonials')}>TESTIMONIALS</NavMenuItem>
        <NavMenuItem onClick={() => this.props.scrollToElement('contact')}>CONTACT</NavMenuItem>
      </NavMenuWrapper>
      }
      </HeaderWrapper>
    );
  }
}

export default Header;
