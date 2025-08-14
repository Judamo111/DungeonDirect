import React from 'react';
import { CssBaseline, Container, Box } from '@mui/material';
import getAppTheme from '../theme';
import { ThemeProvider } from '@mui/material/styles';
import NavBar from './navbar/NavBar';
import { useDarkMode } from '../Context/DarkModeContext';
import { Outlet } from 'react-router-dom';

export default function App() {
  const { darkMode } = useDarkMode();
  const theme = getAppTheme(darkMode ? 'dark' : 'light');

  return (

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
        <Box sx={{ minHeight: '100vh', bgcolor: theme.palette.background.default }}>
          <Container maxWidth="xl" sx={{ mt: 20 }}>
            <Outlet />
          </Container>
        </Box>
      </ThemeProvider>

  );
}
