
import IconButton from "@mui/material/IconButton";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useDarkMode } from "../../Context/DarkModeContext";

function DarkModeToggle() {
    const { darkMode, toggleDarkMode } = useDarkMode();

    return (
        <IconButton onClick={toggleDarkMode}>
            {darkMode ? <DarkModeIcon /> : <LightModeIcon sx={{ color: "yellow" }} />}
        </IconButton>
    );
}

export default DarkModeToggle;

