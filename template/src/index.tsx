/**
 * Created by React Web Creator
 *
 * by e.GO Digital GmbH, Aachen, Germany
 *
 * https://e-go-digital.com
 */

import { ApolloProvider } from '@apollo/react-hooks';
import App from './App';
import countriesQLClient from './graphql/countriesQL';
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import store from './store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './i18';
import './index.scss';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <ApolloProvider client={countriesQLClient}>
                    <App />
                </ApolloProvider>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// EDIT if you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
