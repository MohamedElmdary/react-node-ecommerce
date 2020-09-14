import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createMuiTheme({
    palette: {
        type: 'dark',
    },
});

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Home />
    </ThemeProvider>,
    document.getElementById('root')
);
