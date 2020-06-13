import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Container } from '@material-ui/core';

import styles from './Body.module.scss';

import NotFoundPage from '../pages/NotFoundPage';
import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';

import ReactLogo from '../assets/react-logo.svg';

interface IBodyProps {
}

const Body: React.FC<IBodyProps> = (props) => {
    return (
        <Container className={[styles['Body']].join(' ')}>
            <img
                src={ReactLogo}
                className={styles['React-logo']}
                alt="React logo"
            />

            <Switch>
                <Route path="/" exact component={Page1} />
                <Route path="/page-1" exact component={Page1} />
                <Route path="/page-2" exact component={Page2} />

                {/** fallback => 404 not found **/}
                <Route path="/" component={NotFoundPage} />
            </Switch>
        </Container>
    );
};

export default Body;
