/**
 * Created by React Web Creator
 *
 * by e.GO Digital GmbH, Aachen, Germany
 *
 * https://e-go-digital.com
 */

import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Page1.module.scss';

interface IPage1Props {
}

const Page1: React.FC<IPage1Props> = (props) => {
    return (
        <div className={styles['Page1']}>
            <NavLink
                className={['App-link', styles['page1-link']].join(' ')}
                to="/page-2"
            >
                Goto Page 2
            </NavLink>
        </div>
    );
};

export default Page1;
