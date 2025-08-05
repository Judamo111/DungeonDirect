import { createTheme } from "@mui/material/styles";

const getAppTheme = (mode = 'light') => createTheme({
    palette: {
        mode,
        background: {
            default: mode === 'light' ? '#eaeaea' : '#121212'
        }
    },
    typography: {
        fontFamily: "'Roboto', sans-serif"
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    margin: 0,
                    padding: 0,
                    boxSizing: 'border-box',
                },
                '#root': {
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',
                }
            }
        },
        MuiContainer: {
            defaultProps: {
                maxWidth: 'lg',
            },
            styleOverrides: {
                root: {
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    paddingLeft: '16px',
                    paddingRight: '16px',
                }
            }
        },
        MuiToolbar: {
            styleOverrides: {
                root: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    minHeight: '64px',
                }
            }
        }
    }
});

export default getAppTheme;
