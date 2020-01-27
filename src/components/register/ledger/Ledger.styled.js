import styled from 'styled-components'

const Wrapper = styled.div`
  margin-top: 70px;
  padding-top: 0;
  width: 80%

  @media(min-width: 768px) {
    margin-top: 100px;
    padding-top: 60px;
  }
`;

const Border = styled.div`
  border: 3px solid black;
`;

export {
  Wrapper,
  Border,
}
