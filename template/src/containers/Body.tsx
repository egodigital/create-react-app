/**
 * Created by React Web Creator
 *
 * by e.GO Digital GmbH, Aachen, Germany
 *
 * https://e-go-digital.com
 */

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Container } from '@material-ui/core';

import styles from './Body.module.scss';
import { makeStyles } from '@material-ui/core/styles';

import NotFoundPage from '../pages/NotFoundPage';
import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';

interface IBodyProps {
}

export const useStyles = makeStyles(theme => ({
    container: {
        paddingTop: theme.spacing(1)
    }
}));

const Body: React.FC<IBodyProps> = (props) => {
    const classes = useStyles();

    return (
        <Container className={[styles['Body'], classes.container].join(' ')}>
            <Switch>
                <Route path="/" exact component={Page1} />
                <Route path="/page-1" exact component={Page1} />
                <Route path="/page-2" exact render={() => {
                    return <Page2 maxResults={10} nationality={'de'} />
                }} />

                {/** fallback => 404 not found **/}
                <Route path="/" component={NotFoundPage} />
            </Switch>
        </Container>
    );
};

export default Body;
