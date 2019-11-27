import styled from 'styled-components'

const HamburgerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px;
  position: absolute;
  right: 0;
  top: 0;
`;

const HamburgerMenuItemWrapper = styled.ul`
  background-color: black;
  color: white;
  list-style: none;
  margin-top: 0;
  padding: 0;
  position: absolute;
  right: 0;
  top: 50px;
  width: 50%;
`;

const HamburgerMenuItem = styled.li`
  border: 1px solid white;
  height: 40px;
  line-height: 40px;
  padding: 10px 20px;
  text-align: right;
`;

const MenuLabel = styled.label`
  color: white;
  margin-right: 16px;
`;

export{
  HamburgerWrapper,
  HamburgerMenuItemWrapper,
  HamburgerMenuItem,
  MenuLabel
};
