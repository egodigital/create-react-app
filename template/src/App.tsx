/**
 * Created by React Web Creator
 *
 * by e.GO Digital GmbH, Aachen, Germany
 *
 * https://e-go-digital.com
 */

import React from 'react';
import './App.css';

import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import Body from './containers/Body';
import Header from './containers/Header';

const theme = createMuiTheme({
    palette: {
        // type: 'dark'
        type: 'light'
    }
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />

            <Header />
            <Body />
        </ThemeProvider>
    );
}

export default App;
