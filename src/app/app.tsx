import styled from 'styled-components';
import { SubscribeForm } from './components/SubscribeForm/SubscribeForm';

const StyledApp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: 'Roboto';
  background: #242526;
`;

export function App() {
  return (
    <StyledApp>
      <SubscribeForm />
    </StyledApp>
  );
}

export default App;
