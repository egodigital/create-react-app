/**
 * Created by React Web Creator
 *
 * by e.GO Digital GmbH, Aachen, Germany
 *
 * https://e-go-digital.com
 */

import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Page2.module.scss';

interface IPage2Props {
}

const Page2: React.FC<IPage2Props> = (props) => {
    return (
        <Fragment>
            <NavLink
                className={['App-link', styles['page2-link']].join(' ')}
                to="/page-1"
            >
                Goto Page 1
            </NavLink>
        </Fragment>
    );
};

export default Page2;
