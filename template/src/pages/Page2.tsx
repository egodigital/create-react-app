/**
 * Created by React Web Creator
 *
 * by e.GO Digital GmbH, Aachen, Germany
 *
 * https://e-go-digital.com
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Nilable } from '@egodigital/types';

import { Avatar, CircularProgress, List, ListItem, ListItemAvatar, ListItemText, StyledComponentProps, Typography, withStyles } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

import styles from './Page2.module.scss';

import axios from 'axios';
import Enumerable from 'node-enumerable';

interface IPage2Props extends StyledComponentProps {
    maxResults: number;
    nationality: string;
}

interface IPage2State {
    error?: Nilable;
    isLoading: boolean;
    users: IUser[];
}

interface IUser {
    "cell": string;
    "dob": {
        "age": number;
        "date": string;
    };
    "email": string;
    "gender": string;
    "id": {
        "name": string;
        "value": null;
    };
    "location": {
        "city": string;
        "coordinates": {
            "latitude": string;
            "longitude": string;
        };
        "country": string;
        "postcode": number;
        "state": string;
        "street": {
            "name": string;
            "number": number;
        };
        "timezone": {
            "description": string;
            "offset": string;
        };
    };
    "login": {
        "md5": string;
        "password": string;
        "salt": string;
        "sha1": string;
        "sha256": string;
        "username": string;
        "uuid": string;
    };
    "name": {
        "first": string;
        "last": string;
        "title": string;
    };
    "nat": string;
    "phone": string;
    "picture": {
        "large": string;
        "medium": string;
        "thumbnail": string;
    };
    "registered": {
        "age": number;
        "date": string;
    };
}

class Page2 extends Component<IPage2Props, IPage2State> {
    static propTypes = {
        maxResults: PropTypes.number.isRequired,
        nationality: PropTypes.string.isRequired
    };

    constructor(props: IPage2Props) {
        super(props);

        this.state = {
            isLoading: true,
            users: []
        };
    }

    componentDidMount() {
        this.setState(() => {
            return {
                error: null,
                isLoading: true
            };
        }, () => {
            this.reloadUsers();
        });
    }

    readonly reloadUsers = () => {
        const url = `https://randomuser.me/api/?results=${
            encodeURIComponent(this.props.maxResults)
            }&nat=${
            encodeURIComponent(this.props.nationality)
            }`;

        axios.get(url)
            .then(response => {
                this.setState({
                    isLoading: false,
                    users: Enumerable.from<IUser>(response.data.results)
                        .orderBy(u => u.name.last.toLowerCase())
                        .thenBy(u => u.name.first.toLowerCase())
                        .toArray()
                });
            })
            .catch(error => {
                this.setState({
                    error,
                    isLoading: false
                });
            });
    };

    render() {
        let list: Nilable<JSX.Element>;
        let spinner: Nilable<JSX.Element>;

        if (this.state.isLoading) {
            spinner = (
                <CircularProgress />
            );
        } else {
            if (this.state.error) {
                list = (
                    <Alert severity="error">
                        {this.state.error}
                    </Alert>
                );
            } else {
                if (this.state.users.length) {
                    list = (
                        <List className={this.props.classes!.userList}>
                            {this.state.users.map(user => {
                                return (
                                    <ListItem key={user.login.uuid}>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <Avatar
                                                    alt={`${user.name.first} ${user.name.last}`}
                                                    src={user.picture.thumbnail}
                                                />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={`${user.name.last}, ${user.name.first}`}
                                            secondary={`${user.location.street.name} ${user.location.street.number}, ${user.location.postcode} ${user.location.city}, ${user.location.country}`}
                                        />
                                    </ListItem>
                                );
                            })}
                        </List>
                    );
                } else {
                    list = (
                        <Alert severity="warning">
                            No users found.
                        </Alert>
                    );
                }
            }
        }

        return (
            <div className={styles['Page2']}>
                <Typography
                    className={this.props.classes!.pageTitle}
                    variant="h3"
                    color="inherit"
                >
                    Page 2 - Axios example
                </Typography>

                {spinner}
                {list}
            </div>
        );
    }
}

export default withStyles(theme => {
    return {
        pageTitle: {
            marginBottom: theme.spacing(2),
            textAlign: 'center'
        },
        userList: {
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '100%',
            maxWidth: 512,
            backgroundColor: theme.palette.background.paper
        }
    };
})(Page2);
