/**
 * Created by React Web Creator
 *
 * by e.GO Digital GmbH, Aachen, Germany
 *
 * https://e-go-digital.com
 */

import { CircularProgress, StyledComponentProps, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import { RouteChildrenProps, withRouter } from 'react-router-dom';
import { WithTranslation, withTranslation } from 'react-i18next';
import { scss, withStyles } from './Page2.styles';

import { Alert } from '@material-ui/lab';
import Enumerable from 'node-enumerable';
import { IRandomUser } from '../components/RandomUserListItem';
import { Nilable } from '@egodigital/types';
import RandomUserList from '../components/RandomUserList';
import axios from 'axios';

export interface IPage2Props extends StyledComponentProps, WithTranslation {
}

export type Page2Props = IPage2Props & RouteChildrenProps;

export interface IPage2State {
    error?: Nilable;
    isLoading: boolean;
    users: IRandomUser[];
}

class Page2 extends Component<Page2Props, IPage2State> {
    constructor(props: Page2Props) {
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
        const query = new URLSearchParams(this.props.location.search);

        let max = 10;
        if (query.has('max')) {
            max = parseInt(query.get('max')!.trim());
        }

        let nat = 'de';
        if (query.has('nat')) {
            nat = query.get('nat')!.trim();
        }

        const url = `https://randomuser.me/api/?results=${
            encodeURIComponent(max)
            }&nat=${
            encodeURIComponent(nat)
            }`;

        axios.get(url)
            .then(response => {
                this.setState({
                    isLoading: false,
                    users: Enumerable.from<IRandomUser>(response.data.results)
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
        let list: Nilable;
        let spinner: Nilable;

        if (this.state.isLoading) {
            spinner = <CircularProgress />;
        } else {
            if (this.state.error) {
                list = <Alert severity="error">{this.state.error}</Alert>;
            } else {
                if (this.state.users.length) {
                    list = <RandomUserList items={this.state.users} />;
                } else {
                    list = <Alert severity="warning">No users found.</Alert>;
                }
            }
        }

        return (
            <div className={scss['Page2']}>
                <Typography variant="h3" className={this.props.classes!.pageTitle} color="inherit">
                    {this.props.t('page2.title')}
                </Typography>

                {spinner}
                {list}
            </div>
        );
    }
}

export default withRouter(
    // @ts-ignore
    withStyles(
        // @ts-ignore
        withTranslation()(Page2)
    )
);
