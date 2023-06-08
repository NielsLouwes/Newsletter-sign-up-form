import { ErrorMessage, Field } from 'formik';
import styled from 'styled-components';

const FormContainer = styled.div`
  border: 1px solid black;
  width: 375px;
  background: white;
`;

const MainTitle = styled.h1`
  font-size: 2.5rem;
  margin: 8px;
  margin-bottom: 25px;
`;

const BodyContainer = styled.div`
  padding: 15px;
`;

const BottomFormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubscribeButton = styled.button`
  width: 99%;
  color: white;
  background: hsl(234, 29%, 20%);
  border-radius: 5px;
  padding: 15px;
  font-size: 1rem;
  cursor: pointer;
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
  height: 750px;
  font-family: 'Roboto';
`;

export const SubscribeFormStyled = {
  FormContainer,
  BodyContainer,
  BottomFormContainer,
  SubscribeButton,
  StyledField,
  EmailTitle,
  StyledError,
  EmailContainer,
  MainTitle,
  SuccessForm
};
