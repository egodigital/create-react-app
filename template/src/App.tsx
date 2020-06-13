/**
 * Created by React Web Creator
 *
 * by e.GO Digital GmbH, Aachen, Germany
 *
 * https://e-go-digital.com
 */

import React, { Fragment } from 'react';
import './App.css';

import CssBaseline from '@material-ui/core/CssBaseline';

import Body from './containers/Body';
import Header from './containers/Header';

function App() {
    return (
        <Fragment>
            <CssBaseline />

            <Header />
            <Body />
        </Fragment>
    );
}

export default App;
