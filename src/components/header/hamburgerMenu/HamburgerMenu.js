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

  hamburgerMenuOnClick(element) {
    this.props.scrollToElement(element);
    this.toggleHamburgerMenu();
  };

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
            <HamburgerMenuItem onClick={() => this.hamburgerMenuOnClick('about')}>ABOUT COACH K</HamburgerMenuItem>
            <HamburgerMenuItem onClick={() => this.hamburgerMenuOnClick('camps')}>CAMPS & CLINICS</HamburgerMenuItem>
            <HamburgerMenuItem onClick={() => this.hamburgerMenuOnClick('testimonials')}>TESTIMONIALS</HamburgerMenuItem>
            <HamburgerMenuItem onClick={() => this.hamburgerMenuOnClick('contact')}>CONTACT</HamburgerMenuItem>
          </HamburgerMenuItemWrapper>
          : null
        }
      </div>
    );
  }
}

export default CustomHamburgerMenu;
