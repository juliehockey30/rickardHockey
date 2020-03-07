import styled from 'styled-components';
import { SocialIcon } from 'react-social-icons';

const Wrapper = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px 0;

  @media(min-width: 1024px) {
    flex-direction: row;
  }
`;

const Background = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 16px;
  font-weight: bold;
  justify-content: center;
  padding-left: 32px;
  padding-right: 32px;

  @media(min-width: 768px) and (max-width: 1025px) {
    font-size: 24px;
  }

  @media(min-width: 1025px) {
    font-size: 32px;
  }
`;

const Email = styled.a`
  color: #67bbf0;
  margin: 24px 12px 12px 12px;
`;

const Phone = styled.p`
  color: white;
  margin: 24px 12px 12px 12px;
`;

const InstaLink = styled(SocialIcon)`
  height: 40px !important;
  margin-top: 12px;
  width: 40px !important;

  @media(min-width: 1024px) {
    height: 50px !important;
    width: 50px !important;
  }
`;

export {
  Wrapper,
  Background,
  Email,
  Phone,
  InstaLink
};
