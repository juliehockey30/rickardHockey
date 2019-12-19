import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: rgba(103, 187, 240, 0.7);
  border: 4px solid black;
  border-radius: 12px;
  height: fit-content;
  margin: 24px;
  padding: 20px;
  text-align: center;
  cursor: pointer;
`;

const CampTitle = styled.h1`
  margin-top: 0;
`;

const Label = styled.span`
  font-weight: bold;
`;

const Value = styled.span`
  color: white;
  font-weight: bold;
`;

const RegisterButton = styled.button`
  background-color: #554ede;
  color: white;
  font-size: 24px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  height: 50px;
  width: 250px;
`;

export{
  Wrapper,
  CampTitle,
  Label,
  Value,
  RegisterButton
};
