import styled from 'styled-components'

const Wrapper = styled.div`
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  padding-top: 0;

  @media(min-width: 768px) {
    flex-direction: row;
    margin-top: 100px;
    padding-top: 60px;
  }
`;

const Bio = styled.div`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  width: 80%;
  font-weight: bold;

  @media(min-width: 768px) {
    width: 40%;
  }
`;

const Image = styled.img`
  border: 6px solid #67bbf0;
  margin-left: auto;
  margin-right: auto;
  max-width: 90%;
  margin-bottom: 30px;

  @media(min-width: 768px) {
    max-width: 400px;
  }
`;

export {
  Wrapper,
  Bio,
  Image,
};
