import styled from 'styled-components';
import { SubscribeForm } from './components/SubscribeForm';

const StyledApp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const FormContainer = styled.div`
  height: 600px;
  border: 1px solid black;

`

export function App() {
  return (
    <StyledApp>
      <FormContainer>
         <SubscribeForm />
      </FormContainer>
    </StyledApp>
  );
}

export default App;
