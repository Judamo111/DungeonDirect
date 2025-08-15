import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Icon,
  IconButton,
  Container,
  LinearProgress,
  Badge,
  Paper,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { AccountCircle } from "@mui/icons-material";
import NavMenuButton from "./NavMenuButton";
import {
  headerToolbarStyles,
  subToolbarStyles,
  logoStyles,
  navLinkStyles,
  accountTextStyles,
  cartTextStyles,
  cartIconStyles,
  menuBoxStyles,
  cartIconButtonStyles,
  accountIconButtonStyles,
  accountIconStyles,
} from "src/app/theme/headerStyles.jsx";
import { NavLink } from "react-router-dom";
import navMenus from "src/data/navMenus";
import { useDispatch, useSelector } from "react-redux";
import { useFetchCartQuery } from "src/app/api/cartApi";
import { setDarkMode } from "../../slices/uiSlice";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import Search from "src/features/catalogue/Search";

export default function NavBar() {
  const theme = useTheme();
  const { isLoading, darkMode } = useSelector((state) => state.ui);
  const dispatch = useDispatch();
  const { data: cart, isLoading: cartLoading } = useFetchCartQuery();
  const itemCount = (cart?.items ?? []).reduce(
    (sum, item) => sum + (item.quantity ?? 0),
    0
  );

  const accountlink = { title: "Account", path: "/account" };
  const cartlink = { title: "Cart", path: "/cart" };
  const homelink = { title: "Home", path: "/" };
  const specialslink = { title: "Specials", path: "/catalogue/specials" };
  const newreleaseslink = {
    title: "New Releases",
    path: "/catalogue/new-releases",
  };
  // const allproductslink = { title: "All Products", path: '/catalogue/all-products'};

  function cartIconSVG() {
    return (
      <Icon className="cart-hoverable" sx={cartIconStyles}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          fill="currentColor"
          className="bi bi-cart4"
          viewBox="0 0 16 16"
        >
          <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
        </svg>
      </Icon>
    );
  }

  return (
    <AppBar position="fixed" elevation={2}>
<Toolbar sx={headerToolbarStyles(theme)}>
  <Container sx={{ display: "flex", alignItems: "center", gap: 2 }}>
    {/* Left: Logo */}
    <Box
      component={NavLink}
      to={homelink.path}
      key={homelink.path}
      sx={{ display: "flex", alignItems: "center", flexShrink: 0 }}
    >
      <Box
        component="img"
        src="/images/logos/dungeondirectlogonav.png"
        alt="DungeonDirect Logo"
        sx={logoStyles}
      />
    </Box>

    {/* Left: Dark/Light toggle */}
    <IconButton onClick={() => dispatch(setDarkMode())} sx={{ flexShrink: 0 }}>
      {darkMode ? <DarkModeIcon /> : <LightModeIcon sx={{ color: "yellow" }} />}
    </IconButton>

    {/* CENTER: Search (flexes and stays centered) */}
    <Box
      sx={{
        flex: 1,                       
        display: "flex",
        justifyContent: "left", 
        px: 2,
      }}
    >
      <Paper sx={{ width: "100%", maxWidth: 300 }}>
        <Search />
      </Paper>
    </Box>

    {/* RIGHT: Nav links + account/cart */}
    <Box sx={{ display: "flex", alignItems: "center", ml: "auto", gap: 1, flexShrink: 0 }}>
      <Box sx={menuBoxStyles}>
        <NavLink to={newreleaseslink.path} style={{ textDecoration: "none" }}>
          <Typography variant="body" sx={navLinkStyles}>
            {newreleaseslink.title}
          </Typography>
        </NavLink>

        <NavLink to={specialslink.path} style={{ textDecoration: "none" }}>
          <Typography variant="body" sx={navLinkStyles}>
            {specialslink.title}
          </Typography>
        </NavLink>
      </Box>

      <IconButton
        component={NavLink}
        to={accountlink.path}
        edge="end"
        color="inherit"
        aria-label="account"
        sx={accountIconButtonStyles}
      >
        <Typography className="account-hoverable" variant="body" sx={accountTextStyles}>
          Sign in / Register
        </Typography>
        <AccountCircle className="account-hoverable" sx={accountIconStyles} />
      </IconButton>

      <IconButton
        component={NavLink}
        to={cartlink.path}
        edge="end"
        color="inherit"
        aria-label="cart"
        sx={cartIconButtonStyles}
      >
        <Typography className="cart-hoverable" variant="body" sx={cartTextStyles}>
          View Cart
        </Typography>
        <Badge badgeContent={itemCount} color="secondary" invisible={itemCount === 0}>
          {cartIconSVG()}
        </Badge>
      </IconButton>
    </Box>
  </Container>
</Toolbar>

      {/* Sub-toolbar with navigation menus */}
      <Toolbar
        disableGutters
        sx={{
          ...subToolbarStyles(theme),
          minHeight: "54px !important",
          height: "50px !important",
          paddingY: "0px !important",
        }}
      >
        <Container
          sx={{
            display: "flex",
            alignItems: "stretch",
            height: "100%",
            paddingY: 0,
          }}
        >
          <Box sx={{ display: "flex", width: "100%" }}>
            {navMenus.map((menu, index) =>
              !menu.path ? (
                <NavLink key={index} title={menu.title} items={menu.items} />
              ) : (
                <NavMenuButton
                  key={index}
                  title={menu.title}
                  items={menu.items}
                  path={menu.path}
                />
              )
            )}
          </Box>
        </Container>
      </Toolbar>
      {isLoading && (
        <Box sx={{ width: "%100" }}>
          <LinearProgress color="secondary" />
        </Box>
      )}
    </AppBar>
  );
}
