import styled from 'styled-components'

const HeaderWrapper = styled.div`
  height: ${props => props.isMobile ? 50 : 100}px;
  background-color: black;
  display: flex;
  flex-direction: row;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
`;

const StyledLogo = styled.img`
  height: 40px;
  margin: 4px auto;

  @media(min-width: 768px) {
    height: 90px;
    margin: 0;
  }
`;

const NavMenuWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin: 4px auto;
`;

const NavMenuItem = styled.div`
  color: white;
  margin: 20px;
  font-weight: bold;
`;

export{
  HeaderWrapper,
  StyledLogo,
  NavMenuWrapper,
  NavMenuItem
};
