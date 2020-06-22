/**
 * Created by React Web Creator
 *
 * by e.GO Digital GmbH, Aachen, Germany
 *
 * https://e-go-digital.com
 */

import * as actions from '../../store/actions';
import RandomUserList from '../../components/RandomUserList';
import React, { PropsWithChildren, useEffect } from 'react';
import { Nilable } from '@egodigital/types';
import { CircularProgress, Typography } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { useTranslation } from 'react-i18next';
import { RouteChildrenProps } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { scss, useStyles } from './index.styles';
import { IReduxState } from '../../store';

export interface IPage2Props {
}

/**
 * Properties for <Page2 /> component.
 */
export type Page2Props = IPage2Props & RouteChildrenProps;

const Page2 = (props: PropsWithChildren<Page2Props>) => {
    const error = useSelector((state: IReduxState) => state.page2.lastError);
    const isFetching = useSelector((state: IReduxState) => state.page2.isFetching);
    const users = useSelector((state: IReduxState) => state.page2.users);

    const classes = useStyles();

    const { t } = useTranslation();

    function reloadUsers() {
        const query = new URLSearchParams(props.location.search);

        let max = 10;
        if (query.has('max')) {
            max = parseInt(query.get('max')!.trim());
        }

        let nat = 'de';
        if (query.has('nat')) {
            nat = query.get('nat')!.trim();
        }

        actions.fetchRandomUsers(max, nat);
    }

    useEffect(() => {
        if (!isFetching) {
            reloadUsers();
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    let list: Nilable;
    let spinner: Nilable;

    if (isFetching) {
        spinner = <CircularProgress />;
    } else {
        if (error) {
            list = <Alert severity="error">{error}</Alert>;
        } else {
            if (users.length) {
                list = <RandomUserList items={users} />;
            } else {
                list = <Alert severity="warning">No users found.</Alert>;
            }
        }
    }

    return (
        <div className={scss['Page2']}>
            <Typography variant="h3" className={classes.pageTitle} color="inherit">
                {t('page2.title')}
            </Typography>

            {spinner}
            {list}
        </div>
    );
};

/**
 * Page 2 component.
 */
export default Page2;
