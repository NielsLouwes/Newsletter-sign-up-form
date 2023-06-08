import { ErrorMessage, Field } from 'formik';
import styled from 'styled-components';

const FormContainer = styled.div`
  /* height: 6px; */
  border: 1px solid black;
  width: 375px;
  background: white;
`;

const BodyContainer = styled.div`
  padding: 15px;
`;

const BottomFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 15px; */
`

const SubscribeButton = styled.button`
  width: 99%;
  color: white;
  background: hsl(234, 29%, 20%);
  border-radius: 5px;
  padding: 15px;
  font-size: 1rem;
`

const StyledField = styled(Field)`
  padding: 15px;
  border: 1px solid lightgrey;
  border-radius: 5px;
  margin-bottom: 20px;
  width: 90%;
  font-size: 1rem;
  margin-top: 5px;
`;

const EmailTitle = styled.span`
  font-size: 0.8rem;
  padding: 2px;
  margin-bottom: 10px;
`

const StyledError = styled(ErrorMessage)`
  font-size: 0.8rem;
  padding: 2px;
  margin-bottom: 10px;
  color: hsl(4, 100%, 67%);
`

const EmailContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const SubscribeFormStyled = {
  FormContainer,
  BodyContainer,
  BottomFormContainer,
  SubscribeButton,
  StyledField,
  EmailTitle,
  StyledError,
  EmailContainer
};
