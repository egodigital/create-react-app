/**
 * Created by React Web Creator
 *
 * by e.GO Digital GmbH, Aachen, Germany
 *
 * https://e-go-digital.com
 */

import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './NotFoundPage.module.scss';

interface INotFoundPageProps {
}

const NotFoundPage: React.FC<INotFoundPageProps> = (props) => {
    return (
        <div className={styles['NotFoundPage']}>
            <NavLink
                className={['App-link', styles['not-found-page-link']].join(' ')}
                to="/page-2"
            >
                404 Not Found - Goto Page 1
            </NavLink>
        </div>
    );
};

export default NotFoundPage;
