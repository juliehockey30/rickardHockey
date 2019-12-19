import styled from 'styled-components'

const ModalOverLay = styled.div`
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: -40px;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.4);
`;

const ModalContent = styled.div`
  background-color: white;
  border: 3px solid black;
  position: absolute;
  left: 1%;
  width: 90%;
  padding: 12px;

  @media(min-width: 768px) {
    width: 70%;
    left: 15%;
    top: 150px;
    padding: 24px;
  }
`;

const CloseIcon = styled.div`
  text-align: right;
  margin: 12px 12px 0 0;
  font-weight: bold;
  cursor: pointer;
`;

const ModalTitle = styled.div`
  text-align: center;
  margin-top: 0;
  color: rgb(103, 187, 240);
  font-size: 48px;
  font-weight: bold;
`;

const ModalDescription = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  margin-top: 16px;
  margin-bottom: 12px;
`;

const ModalLabel = styled.span`
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  margin-top: 12px;
  margin-bottom: 12px;
`;

const ModalValue = styled.span`
  color: rgb(103, 187, 240);
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  margin-top: 12px;
  margin-bottom: 12px;
`;

const CostExplination = styled.div`
  font-style: italic;
`;

const MetaDataWrapper = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export{
  ModalOverLay,
  ModalContent,
  CloseIcon,
  ModalTitle,
  ModalDescription,
  ModalLabel,
  ModalValue,
  CostExplination,
  MetaDataWrapper,
  ButtonWrapper,
};
