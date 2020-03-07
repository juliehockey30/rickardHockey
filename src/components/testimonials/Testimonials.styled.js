import styled from 'styled-components'

const Background = styled.div`
  background-color: #4d4d4d;
  color: white;
  margin-top: -5px;
  padding: 32px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TestimonialsHeader = styled.p`
  border: 6px solid #554ede;
  font-size: 32px;
  font-weight: bold;
  margin: 0 auto 24px auto;
  max-width: 275px;
  padding: 12px;
  text-align: center;
  width: max-content;

  @media(min-width: 769px) and (max-width: 1025px) {
    font-size: 50px;
    margin: 0 auto 48px auto;
    max-width: unset;
  }

  @media(min-width: 1025px) {
    font-size: 54px;
    margin: 0 auto 48px auto;
    max-width: unset;
  }
`;

const TestimonyWrapper = styled.div`
  border: 5px solid #67bbf0;
  margin: 24px 0;
  padding: 24px;

  @media(min-width: 1024px) {
    margin: 24px;
  }
`;

const NameAndRole = styled.p`
  color: #67bbf0;
  font-style: italic;
  margin: 0
`;

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 200px;
`;

const StyledLoader = styled.img`
  height: 150px;
  width: 200px;
`;


export {
  Background,
  Wrapper,
  TestimonialsHeader,
  TestimonyWrapper,
  NameAndRole,
  LoaderWrapper,
  StyledLoader,
};
