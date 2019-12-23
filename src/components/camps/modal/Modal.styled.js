import styled from 'styled-components'

const ModalOverLay = styled.div`
  background-color: rgba(0,0,0,0.4);
  height: 100%;
  left: 0;
  padding-top: 100px;
  position: fixed;
  top: -40px;
  width: 100%;
  z-index: 1;
`;

const ModalContent = styled.div`
  background-color: white;
  border: 3px solid black;
  left: 1%;
  max-height: calc(100vh - 100px);
  overflow-y: auto;
  padding: 12px;
  position: absolute;
  width: 90%;

  @media(min-width: 768px) {
    left: 15%;
    max-height: calc(100vh - 210px);
    padding: 24px;
    top: 150px;
    width: 70%;
  }
`;

const CloseIcon = styled.div`
  background-color: white;
  cursor: pointer;
  font-size: 24px;
  font-weight: bold;
  height: 40px;
  line-height: 40px;
  margin: 0 12px 0 0;
  position: fixed;
  right: 135px;
  text-align: right;
  top: 113px;
  width: 73%;
`;

const ModalTitle = styled.div`
  color: rgb(103, 187, 240);
  font-size: 48px;
  font-weight: bold;
  margin-top: 20px;
  text-align: center;
`;

const ModalDescription = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 12px;
  margin-top: 16px;
  text-align: center;
`;

const ModalLabel = styled.span`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 12px;
  margin-top: 12px;
  text-align: center;
`;

const ModalValue = styled.span`
  color: rgb(103, 187, 240);
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 12px;
  margin-top: 12px;
  text-align: center;
`;

const CostExplination = styled.div`
  font-style: italic;
`;

const MetaDataWrapper = styled.div`
  margin-bottom: 16px;
  margin-top: 16px;
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
