import {
    AppBar,
    Toolbar,
    Box,
    Typography,
    Icon,
    IconButton,
    Container
} from '@mui/material';
import DarkMode from './DarkMode';
import { useTheme } from '@mui/material/styles';
import { AccountCircle } from '@mui/icons-material';
import NavMenuButton from './NavBarMenus/NavMenuButton';
import {
    headerToolbarStyles,
    subToolbarStyles,
    logoStyles,
    navLinkStyles,
    accountTextStyles,
    cartTextStyles,
    cartIconStyles,
    sectionBoxStyles,
    menuBoxStyles,
    cartIconButtonStyles,
    accountIconButtonStyles,
    accountIconStyles
} from '/src/theme/headerStyles';
import { NavLink } from 'react-router-dom';
import navMenus from '/src/data/navMenus';


export default function Header({ toggleDarkMode, darkMode }) {
    const theme = useTheme();
    
    const accountlink = { title: 'Account', path: '/account' };
    const cartlink = { title: 'Cart', path: '/cart' };
    const homelink = { title: 'Home', path: '/' };
    const specialslink = { title: 'Specials', path: '/catalogue/specials' };
    const newreleaseslink = { title: 'New Releases', path: '/catalogue/new-releases' };

    function cartIconSVG() {
        return (
            <Icon className="cart-hoverable" sx={cartIconStyles}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
                </svg>
            </Icon>
        );
    }





    return (
        <AppBar position="fixed" elevation={2}>
            <Toolbar sx={headerToolbarStyles(theme)}>
                {/* DungeonDirect Logo and DarkMode Toggle  */}
                <Container sx={sectionBoxStyles}>
                    <Box component={NavLink} to={homelink.path} key={homelink.path} sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box component="img" src="/images/logos/dungeondirectlogonav.png" alt="DungeonDirect Logo" sx={logoStyles} />
                    </Box>
                        <DarkMode toggleDarkMode={toggleDarkMode} darkMode={darkMode} />

                    {/* Navigation Links*/}
                    <Box sx={{ display: 'flex', alignItems: 'center', ml: 'auto'}}>
                        <Box sx={menuBoxStyles}>
                            <NavLink to={newreleaseslink.path} style={{ textDecoration: 'none' }}>
                                <Typography variant="body" sx={navLinkStyles}
                                >
                                    {newreleaseslink.title}
                                </Typography>
                                </NavLink>

                            <NavLink to={specialslink.path} style={{ textDecoration: 'none' }}>
                                <Typography variant="body" sx={navLinkStyles}>
                                {specialslink.title}
                                </Typography>
                            </NavLink>
                        </Box>



                        {/* Account and Cart Icons */}
                        <IconButton component={NavLink} to={accountlink.path} key={accountlink.path} edge="end" color="inherit" aria-label="account" sx={accountIconButtonStyles}>
                            <Typography className="account-hoverable" variant="body" sx={accountTextStyles}>Sign in / Register</Typography>
                            <AccountCircle className="account-hoverable" sx={accountIconStyles} />
                        </IconButton>
                        <IconButton component={NavLink} to={cartlink.path} key={cartlink.path} edge="end" color="inherit" aria-label="cart" sx={cartIconButtonStyles}>
                            <Typography className="cart-hoverable" variant="body" sx={cartTextStyles}>View Cart</Typography>
                            {cartIconSVG()}
                        </IconButton>
                    </Box>
                </Container>
            </Toolbar>

              <Toolbar
                disableGutters
                sx={{
                ...subToolbarStyles(theme),
                minHeight: '54px !important',
                height: '50px !important',
                paddingY: '0px !important',
                }}
                >

                <Container
                sx={{ display: 'flex', alignItems: 'stretch', height: '100%', paddingY: 0 }}
                >
                <Box sx={{ display: 'flex', width: '100%' }}>
                    {navMenus.map((menu, index) => (
                        <NavMenuButton key={index} title={menu.title} items={menu.items} path={menu.path} />
                    ))}
                </Box>
                </Container>
            </Toolbar>
        </AppBar>
    );
}
