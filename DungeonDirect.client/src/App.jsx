import { CssBaseline, Container, Box } from '@mui/material';
import getAppTheme from './theme';
import { ThemeProvider } from '@mui/material/styles';
import Header from './features/header/NavBar';
import Catalogue from './features/catalogue/Catalogue';
import { useDarkMode } from './context/DarkModeContext';
import { Outlet } from 'react-router-dom';

function App() {
    const { darkMode } = useDarkMode();
    const theme = getAppTheme(darkMode ? 'dark' : 'light');

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            <Box sx={{ minHeight: '100vh', bgcolor: theme.palette.background.default }}>
                <Container maxWidth="xl" sx={{ mt: 20}}>
                    <Outlet />
                </Container>
            </Box>
        </ThemeProvider>
    );
}

export default App;
