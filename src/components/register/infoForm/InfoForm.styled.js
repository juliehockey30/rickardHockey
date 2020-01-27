import styled from 'styled-components';

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 70px;
  padding-top: 0;
  width: 100%;

  @media(min-width: 768px) {
    margin-top: 100px;
    padding-top: 60px;
    width: 50%;
  }
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
  font-size: 14px;
  height: 30px;
  margin: 12px;
  padding: 8px;
  width: 40%;
`;

const FullWidthInput = styled.input`
  font-size: 14px;
  height: 30px;
  margin: 12px;
  padding: 8px;
  width: 75%;
`;

const PositionSelect = styled.select`
  font-size: 14px;
  height: 45px;
  margin: 12px;
  width: 43%;
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
}
