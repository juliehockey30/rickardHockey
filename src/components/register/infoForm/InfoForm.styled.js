import styled from 'styled-components';

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
`;

const CampCost = styled.h2`
  margin-top: 0;
  text-align: center;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%
`;

const FlexInput = styled.input`
  background-color: ${props => props.disabled ? '#cfcfcf' : 'white'};
  border: 1px solid grey;
  font-size: 14px;
  height: 30px;
  margin: 12px;
  padding: 8px;
  text-align: center;
  width: 40%;
`;

const FullWidthInput = styled.input`
  border: 1px solid grey;
  font-size: 14px;
  height: 30px;
  margin: 12px;
  padding: 8px;
  text-align: center;
  width: 75%;
`;

const PositionSelect = styled.select`
  border: 1px solid grey;
  font-size: 14px;
  height: 45px;
  margin: 12px;
  text-align: center;
  width: 43%;
`;

const PaymentWrapper = styled.div`
  margin-top: 12px;
`;

const PayWithWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  font-size: 16px;
  font-weight: bold;
  height: 40px;
  justify-content: center;
`;

const VenmoLogo = styled.img`
  width: 100px;
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
}
