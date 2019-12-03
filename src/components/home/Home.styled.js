import styled from 'styled-components'

const BackgroundImage = styled.img`
  filter: grayscale(100%);
  width: 100%;
  margin-top: 15px;

  @media(min-width: 768px) {
    margin-top: 0;
  }
`;

const HomeObjective = styled.div`
  background-color: rgba(103, 187, 240, 0.5);
  border: 3px solid black;
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 16px;
  position: absolute;
  right: 7%;
  text-align: center;
  top: 165px;
  width: 75%

  @media(min-width: 768px) {
    border: 5px solid black;
    color: black;
    font-size: 32px;
    padding: 24px;
    right: 50px;
    top: 200px;
    width: 25%
  }
`;

export {
  BackgroundImage,
  HomeObjective
}
