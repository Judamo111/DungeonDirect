import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./App";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { DarkModeProvider } from './context/DarkModeContext';


createRoot(document.getElementById('root')).render(
    //strictmode is a development mode only tag
    <StrictMode>
        <DarkModeProvider>
    <App />
        </DarkModeProvider>
  </StrictMode>,
)
