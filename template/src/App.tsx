/**
 * Created by React Web Creator
 *
 * by e.GO Digital GmbH, Aachen, Germany
 *
 * https://e-go-digital.com
 */

import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';

import NotFoundPage from './pages/NotFoundPage';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />

                <Switch>
                    <Route path="/" exact component={Page1} />
                    <Route path="/page-1" exact component={Page1} />
                    <Route path="/page-2" exact component={Page2} />

                    {/** fallback => 404 not found **/}
                    <Route path="/" component={NotFoundPage} />
                </Switch>
            </header>
        </div>
    );
}

export default App;
