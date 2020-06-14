/**
 * Created by React Web Creator
 *
 * by e.GO Digital GmbH, Aachen, Germany
 *
 * https://e-go-digital.com
 */

import React, { PropsWithChildren } from 'react';
import { NavLink } from 'react-router-dom';
import { scss } from './NotFoundPage.styles';

/**
 * Properties for <NotFoundPage /> component.
 */
export interface INotFoundPageProps {
}

const NotFoundPage = (props: PropsWithChildren<INotFoundPageProps>) => {
    return (
        <div className={scss['NotFoundPage']}>
            <NavLink to="/page-2" className={['App-link', scss['not-found-page-link']].join(' ')}>
                404 Not Found - Goto Page 1
            </NavLink>
        </div>
    );
};

/**
 * Page not found component.
 */
export default NotFoundPage;
