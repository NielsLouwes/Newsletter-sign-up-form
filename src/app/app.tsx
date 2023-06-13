import styled from 'styled-components';
import { ParentFormComponent } from './components/ParentFormComponent/ParentFormComponent';

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
      <ParentFormComponent />
    </StyledApp>
  );
}

export default App;
