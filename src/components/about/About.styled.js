import styled from 'styled-components'

const Background = styled.div`
  background-color: #4d4d4d;
  color: white;
  margin-top: -5px;
  padding: 32px;
`;

const AboutHeader = styled.p`
  border: 6px solid #554ede;
  font-size: 32px;
  font-weight: bold;
  margin: 0 auto 24px auto;
  padding: 12px;
  text-align: center;
  width: max-content;

  @media(min-width: 768px) {
    font-size: 54px;
    margin: 0 auto 48px auto;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media(min-width: 768px) {
    flex-direction: row;
  }
`;

const Bio = styled.div`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  width: 100%;
  font-weight: bold;

  @media(min-width: 768px) {
    width: 40%;
  }
`;

const Image = styled.img`
  border: 6px solid #67bbf0;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  margin-bottom: 30px;

  @media(min-width: 768px) {
    max-width: 500px;
    max-height: 350px;
  }
`;

export {
  Background,
  AboutHeader,
  Wrapper,
  Bio,
  Image,
};
