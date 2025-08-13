import { createContext, useContext, useState, useCallback } from "react";

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = useCallback(() => {
        setDarkMode(prev => !prev);
    }, []);

    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
};

//not a production issue. If file is edited during development, fast refresh may remount module and toggle state might be reset
export const useDarkMode = () => useContext(DarkModeContext);
