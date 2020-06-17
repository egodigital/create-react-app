/**
 * Created by React Web Creator
 *
 * by e.GO Digital GmbH, Aachen, Germany
 *
 * https://e-go-digital.com
 */

import Body from './components/Body';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './components/Header';
import React, { PropsWithChildren } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import './App.scss';

/**
 * Props for <App /> component.
 */
export interface IAppProps {
}

const theme = createMuiTheme({
    palette: {
        // type: 'dark'
        type: 'light'
    }
});

const App = (props: PropsWithChildren<IAppProps>) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />

            <Header />
            <Body />
        </ThemeProvider>
    );
}

/**
 * App component.
 */
export default App;
