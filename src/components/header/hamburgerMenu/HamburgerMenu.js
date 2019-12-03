import React, { Component } from 'react';
import { HamburgerWrapper,
  HamburgerMenuItemWrapper,
  HamburgerMenuItem,
  MenuLabel
} from './HamburgerMenu.styled.js'
import HamburgerMenu from 'react-hamburger-menu';

class CustomHamburgerMenu extends Component {
  constructor(props){
    super(props);
    this.state={
      hamburgerMenuOpen: false,
    };

    this.toggleHamburgerMenu = this.toggleHamburgerMenu.bind(this);
  }

  toggleHamburgerMenu() {
    this.setState({ hamburgerMenuOpen: !this.state.hamburgerMenuOpen})
  }

  render() {
    return (
      <div>
        <HamburgerWrapper>
          <MenuLabel onClick={this.toggleHamburgerMenu}>MENU</MenuLabel>
          <HamburgerMenu
            isOpen={this.state.open}
            menuClicked={this.toggleHamburgerMenu}
            width={18}
            height={15}
            strokeWidth={3}
            rotate={0}
            color='white'
            borderRadius={0}
            animationDuration={0.5}
          />
        </HamburgerWrapper>
        {this.state.hamburgerMenuOpen ?
          <HamburgerMenuItemWrapper>
            <HamburgerMenuItem onClick={() => {window.location.pathname = '/about'}}>ABOUT COACH K.</HamburgerMenuItem>
            <HamburgerMenuItem onClick={() => {window.location.pathname = '/'}}>TESTIMONIALS</HamburgerMenuItem>
            <HamburgerMenuItem onClick={() => {window.location.pathname = '/camps'}}>CAMPS & CLINICS</HamburgerMenuItem>
            <HamburgerMenuItem onClick={() => {window.location.pathname = '/contact'}}>CONTACT ME</HamburgerMenuItem>
          </HamburgerMenuItemWrapper>
          : null
        }
      </div>
    );
  }
}

export default CustomHamburgerMenu;
