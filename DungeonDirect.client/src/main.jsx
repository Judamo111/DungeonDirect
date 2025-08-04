import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './router/Router';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { DarkModeProvider } from './context/DarkModeContext';
import { RouterProvider } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
    //strictmode is a development mode only tag
    <StrictMode>
        <DarkModeProvider>
    <RouterProvider router={router} />
        </DarkModeProvider>
  </StrictMode>,
)
