import './App.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './style/theme';
import { Router } from './router/router';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
