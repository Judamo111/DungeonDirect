import { AppBar, Toolbar, Box, Typography } from '@mui/material';
import DarkMode from './DarkMode';
import { useTheme } from '@mui/material/styles';

//import { Link } from 'react-router-dom';

export default function Header({ toggleDarkMode, darkMode }) {

    const theme = useTheme();


    return (
        <AppBar
            position="fixed"
            sx={{
                backgroundColor: theme.palette.mode === 'light' ? '#754518ff' : 'default',
                color: theme.palette.mode === 'light' ? '#fff' : 'inherit'
            }}
            elevation={2}
        >

            <Toolbar>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box
                            component="img"
                            src="/images/logos/dungeondirectlogonav.png"
                            alt="DungeonDirect Logo"
                            sx={{
                                height: 50,
                                width: 'auto',
                                mr: 2,
                                border: 2,
                                borderColor: 'brown',
                                borderRadius: '10%'
                            }}
                        />
                </Box>
                <DarkMode toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
            </Toolbar>
        </AppBar>
    );
}
