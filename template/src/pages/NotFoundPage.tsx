/**
 * Created by React Web Creator
 *
 * by e.GO Digital GmbH, Aachen, Germany
 *
 * https://e-go-digital.com
 */

import React from 'react';
import { NavLink } from 'react-router-dom';

import { scss } from './NotFoundPage.styles';

export interface INotFoundPageProps {
}

const NotFoundPage: React.FC<INotFoundPageProps> = (props) => {
    return (
        <div className={scss['NotFoundPage']}>
            <NavLink
                className={['App-link', scss['not-found-page-link']].join(' ')}
                to="/page-2"
            >
                404 Not Found - Goto Page 1
            </NavLink>
        </div>
    );
};

export default NotFoundPage;
