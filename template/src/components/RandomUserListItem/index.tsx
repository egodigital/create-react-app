/**
 * Created by React Web Creator
 *
 * by e.GO Digital GmbH, Aachen, Germany
 *
 * https://e-go-digital.com
 */

import React, { PropsWithChildren } from 'react';
import PropTypes from 'prop-types';
import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import { IRandomUser } from '../../store/reducers/page2';

/**
 * Props for <RandomUserListItem /> component.
 */
export interface IRandomUserListItemProps {
    /**
     * The underlying user object.
     */
    user: IRandomUser;
}

const RandomUserListItem = (props: PropsWithChildren<IRandomUserListItemProps>) => {
    return (
        <ListItem key={props.user.login.uuid}>
            <ListItemAvatar>
                <Avatar
                    alt={`${props.user.name.first} ${props.user.name.last}`}
                    src={props.user.picture.thumbnail}
                />
            </ListItemAvatar>

            <ListItemText
                primary={`${props.user.name.last}, ${props.user.name.first}`}
                secondary={`${props.user.location.street.name} ${props.user.location.street.number}, ${props.user.location.postcode} ${props.user.location.city}, ${props.user.location.country}`}
            />
        </ListItem>
    );
};

RandomUserListItem.propTypes = {
    user: PropTypes.object.isRequired
};

/**
 * The component for an item of a random user list.
 */
export default RandomUserListItem;
