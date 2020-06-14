/**
 * Created by React Web Creator
 *
 * by e.GO Digital GmbH, Aachen, Germany
 *
 * https://e-go-digital.com
 */

import React, { PropsWithChildren } from 'react';
import PropTypes from 'prop-types';
import { List } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import RandomUserListItem, { IRandomUser } from './RandomUserListItem';

export interface IRandomUserListProps {
    items: IRandomUser[];
}

const useStyles = makeStyles(theme => {
    return {
        list: {
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '100%',
            maxWidth: 512,
            backgroundColor: theme.palette.background.paper
        }
    };
});

const RandomUserList = (props: PropsWithChildren<IRandomUserListProps>) => {
    const classes = useStyles();

    return (
        <List className={classes.list}>
            {props.items.map(user => {
                return (
                    <RandomUserListItem user={user} key={user.login.uuid} />
                );
            })}
        </List>
    );
};

RandomUserList.propTypes = {
    items: PropTypes.array.isRequired
};

export default RandomUserList;
