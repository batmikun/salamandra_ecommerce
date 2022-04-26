import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RouterComponent from './routes';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as colors from '@mui/material/colors';

const theme = createTheme({
    palette:{
        primary: colors.red,
        secondary: colors.yellow,
        teal: colors.teal
        
    }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <RouterComponent />
        </ThemeProvider>
    </React.StrictMode>
); 
