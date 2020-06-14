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

export interface IRandomUser {
    cell: string;
    dob: {
        age: number;
        date: string;
    };
    email: string;
    gender: string;
    id: {
        name: string;
        value: null;
    };
    location: {
        city: string;
        coordinates: {
            latitude: string;
            longitude: string;
        };
        country: string;
        postcode: number;
        state: string;
        street: {
            name: string;
            number: number;
        };
        timezone: {
            description: string;
            offset: string;
        };
    };
    login: {
        md5: string;
        password: string;
        salt: string;
        sha1: string;
        sha256: string;
        username: string;
        uuid: string;
    };
    name: {
        first: string;
        last: string;
        title: string;
    };
    nat: string;
    phone: string;
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    };
    registered: {
        age: number;
        date: string;
    };
}

export interface IRandomUserListItemProps {
    user: IRandomUser;
}

const RandomUserListItem = (props: PropsWithChildren<IRandomUserListItemProps>) => {
    return (
        <ListItem key={props.user.login.uuid}>
            <ListItemAvatar>
                <Avatar>
                    <Avatar
                        alt={`${props.user.name.first} ${props.user.name.last}`}
                        src={props.user.picture.thumbnail}
                    />
                </Avatar>
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

export default RandomUserListItem;
