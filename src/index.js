import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter } from 'react-router-dom';

const theme = createMuiTheme({
    palette: {
        type: 'light',
    },
});

ReactDOM.render(
    <BrowserRouter>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Home />
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root')
);
