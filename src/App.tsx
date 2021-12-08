import React from 'react';
import './App.css';
import { ThemeProvider } from '@mui/system';
import { theme } from './theme';
import { CssBaseline } from '@mui/material';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRouter/>
    </ThemeProvider>
  );
}

export default App;
