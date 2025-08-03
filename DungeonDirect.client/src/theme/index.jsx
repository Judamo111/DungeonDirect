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
    }
});

export default getAppTheme;
