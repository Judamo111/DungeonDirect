import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { router } from './app/router/Router';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { DarkModeProvider } from './app/Context/DarkModeContext';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store/store';

createRoot(document.getElementById('root')).render(
    
    <StrictMode>
    <Provider store={store}>
        <DarkModeProvider>
    <RouterProvider router={router} />
        </DarkModeProvider>
    </Provider>
  </StrictMode>,
)
