import React from 'react';
import { CssBaseline, Container, Box } from '@mui/material';
import getAppTheme from '../theme/theme';
import { ThemeProvider } from '@mui/material/styles';
import NavBar from './navbar/NavBar';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function App() {
  const { darkMode } = useSelector(state => state.ui);
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
