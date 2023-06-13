import { ErrorMessage, Field } from 'formik';
import styled from 'styled-components';

const FormContainer = styled.div`
  border: 1px solid black;
  width: 375px;
  background: white;
  height: 800px;

  @media (width > 1200px) {
    display: flex;
    width: 1000px;
    height: 600px;
    border-radius: 15px;
  }
`;

const SubscribeContainer = styled.div`
  @media (width > 1200px) {
    display: flex;
    height: 100%;
    justify-content: space-between;
    flex-direction: row-reverse;
  }
`;

const ImageContainer = styled.div`
  @media (width > 1200px) {
    display: flex;
    width: 50%;
    border-radius: 15px;
    padding: 15px;
    overflow: hidden;
  }
`;

const Image = styled.img`
  width: 375px;
  height: auto;

  @media (width > 1200px) {
    width: 98%;
    height: auto;
    object-fit: cover;
    border-radius: 15px;
  }
`;

const MainTitle = styled.h1`
  font-size: 3rem;
  margin: 8px;
  margin-bottom: 25px;
`;

const BodyContainer = styled.div`
  padding: 15px;
  flex: 1;

  @media (width > 1200px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 25px;
  }
`;

const BottomFormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormButton = styled.button`
  width: 99%;
  color: white;
  background: hsl(234, 29%, 20%);
  border-radius: 5px;
  padding: 15px;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: hsl(4, 100%, 67%);
    border: none;
  }
`;

const StyledField = styled(Field)`
  padding: 15px;
  border: 1px solid lightgrey;
  border-radius: 5px;
  margin-bottom: 20px;
  width: 90%;
  font-size: 1rem;
  margin-top: 5px;
  cursor: pointer;
  border-color: ${(props) =>
    props['aria-invalid'] ? 'hsl(4, 100%, 67%)' : 'hsl(231, 7%, 60%)'};

  ::placeholder {
    color: ${(props) =>
      props['aria-invalid'] ? 'hsl(4, 100%, 67%)' : 'hsl(231, 7%, 60%)'};
  }
`;

const EmailTitle = styled.span`
  font-size: 0.8rem;
  padding: 2px;
`;

const StyledError = styled(ErrorMessage)`
  font-size: 0.8rem;
  padding: 2px;
  color: hsl(4, 100%, 67%);
`;

const EmailContainer = styled.div`
  display: flex;
  justify-content: space-between;
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
`;

export const SubscribeFormStyled = {
  FormContainer,
  BodyContainer,
  BottomFormContainer,
  FormButton,
  StyledField,
  EmailTitle,
  StyledError,
  EmailContainer,
  MainTitle,
  SuccessForm,
  ContentContainer,
  SubscribeContainer,
  Image,
  ImageContainer,
};
