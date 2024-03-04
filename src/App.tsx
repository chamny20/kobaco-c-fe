import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './style/theme';
import { TestChaemin } from './test/chaemin';
import TestJungmin from './test/jungmin';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Temp>color theme test</Temp>
        <p>hello world font test</p>
        <TestChaemin />
        <TestJungmin />
      </ThemeProvider>
    </>
  );
}

const Temp = styled.div`
  background-color: ${(props) => props.theme.red_01};
  border: 1px solid red;
`;

export default App;
