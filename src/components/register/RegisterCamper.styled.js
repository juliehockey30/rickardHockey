import styled from 'styled-components'

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;
  padding-top: 0;
`;

const FormWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-left: 24px;
`;

const CampName = styled.h1`
  text-align: center;
  margin-top: 30px;

  @media(min-width: 768px) {
    margin-top: 20px;
  }
`;

const CampCost = styled.h2`
  margin-top: 0;
  text-align: center;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%

  @media(min-width: 768px) {
    flex-direction: row;
  }
`;

const FlexInput = styled.input`
  background-color: ${props => props.disabled ? '#cfcfcf' : 'white'};
  border: 1px solid grey;
  font-size: 14px;
  height: 30px;
  margin: 12px;
  padding: 8px;
  text-align: center;
  width: 80%;

  @media(min-width: 768px) {
    width: 40%;
  }
`;

const FullWidthInput = styled.input`
  border: 1px solid grey;
  font-size: 14px;
  height: 30px;
  margin: 12px 12px 12px 0;
  padding: 8px;
  text-align: center;
  width: 80%;

  @media(min-width: 768px) {
    margin: 12px;
    width: 75%;
  }
`;

const PositionSelect = styled.select`
  border: 1px solid grey;
  font-size: 14px;
  height: 45px;
  margin: 12px;
  text-align: center;
  width: 80%;

  @media(min-width: 768px) {
    width: 43%;
  }
`;

const PaymentWrapper = styled.div`
  margin-top: 12px;
`;

const PayWithWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  font-size: 12px;
  font-weight: bold;
  height: 40px;
  justify-content: center;

  @media(min-width: 768px) {
    font-size: 16px;
  }
`;

const VenmoLogo = styled.img`
  width: 100px;
`;

const RegisterButton = styled.button`
  background-color: ${props => props.disabled ? '#ababab' : '#67bbf0'};
  border-radius: 6px;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 24px;
  font-weight: bold;
  margin: 24px 0;
  height: 50px;
  width: 250px;
`;

const PaymentReminder = styled.p`
  font-style: italic;
  text-align: center;
`;

const VenmoSpan = styled.span`
  width: 50px;

  @media(min-width: 768px) {
    width: unset;
  }
`;

export {
  Wrapper,
  FormWrapper,
  CampName,
  CampCost,
  InputWrapper,
  FlexInput,
  FullWidthInput,
  PositionSelect,
  PaymentWrapper,
  PayWithWrapper,
  VenmoLogo,
  RegisterButton,
  PaymentReminder,
  VenmoSpan,
}
