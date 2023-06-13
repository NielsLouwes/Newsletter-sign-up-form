import styled from 'styled-components';

const MainTitle = styled.h1`
  font-size: 2.5rem;
  margin: 8px;
  margin-bottom: 25px;
`;

const DismissButton = styled.button`
  width: 99%;
  color: white;
  background: hsl(234, 29%, 20%);
  border-radius: 5px;
  padding: 15px;
  font-size: 1rem;
  cursor: pointer;
  justify-content: space-between;
  transition: 0.3s; 

  &:hover {
    background-color: hsl(4, 100%, 67%); 
    border: none;
  }
`;

const SuccessForm = styled.div`
  width: 375px;
  background: white;
  font-family: 'Roboto';
  padding: 15px;
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ContentContainer = styled.div`
  margin-top: 150px;
  gap: 15px;
`

export const SubscribeFormStyled = {
  DismissButton,
  MainTitle,
  SuccessForm,
  ContentContainer
};
