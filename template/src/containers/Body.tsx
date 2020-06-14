/**
 * Created by React Web Creator
 *
 * by e.GO Digital GmbH, Aachen, Germany
 *
 * https://e-go-digital.com
 */

import React, { PropsWithChildren } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { scss, useStyles } from './Body.styles';
import NotFoundPage from '../pages/NotFoundPage';
import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';

export interface IBodyProps {
}

const Body = (props: PropsWithChildren<IBodyProps>) => {
    const classes = useStyles();

    return (
        <Container className={[scss['Body'], classes.container].join(' ')}>
            <Switch>
                <Route path="/" exact component={Page1} />
                <Route path="/page-1" exact component={Page1} />
                <Route path="/page-2" exact render={() => <Page2 />} />

                {/** fallback => 404 not found **/}
                <Route path="/" component={NotFoundPage} />
            </Switch>
        </Container>
    );
};

export default Body;
