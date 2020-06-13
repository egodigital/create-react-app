/**
 * Created by React Web Creator
 *
 * by e.GO Digital GmbH, Aachen, Germany
 *
 * https://e-go-digital.com
 */

import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Page2.module.scss';

interface IPage2Props {
}

const Page2: React.FC<IPage2Props> = (props) => {
    return (
        <div className={styles['Page2']}>
            <NavLink
                className={['App-link', styles['page2-link']].join(' ')}
                to="/page-1"
            >
                Goto Page 1
            </NavLink>
        </div>
    );
};

export default Page2;
