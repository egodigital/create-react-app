/**
 * Created by React Web Creator
 *
 * by e.GO Digital GmbH, Aachen, Germany
 *
 * https://e-go-digital.com
 */

import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './NotFoundPage.module.scss';

interface INotFoundPageProps {
}

const NotFoundPage: React.FC<INotFoundPageProps> = (props) => {
    return (
        <Fragment>
            <NavLink
                className={['App-link', styles['not-found-page-link']].join(' ')}
                to="/page-2"
            >
                404 Not Found - Goto Page 1
            </NavLink>
        </Fragment>
    );
};

export default NotFoundPage;
