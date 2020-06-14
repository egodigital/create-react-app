/**
 * Created by React Web Creator
 *
 * by e.GO Digital GmbH, Aachen, Germany
 *
 * https://e-go-digital.com
 */

import * as actions from '../store/actions';
import RandomUserList from '../components/RandomUserList';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Nilable } from '@egodigital/types';
import { CircularProgress, StyledComponentProps, Typography } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { WithTranslation, withTranslation } from 'react-i18next';
import { RouteChildrenProps, withRouter } from 'react-router-dom';
import { scss, withStyles } from './Page2.styles';
import { connect } from '../store';
import { IRandomUser } from '../store/reducers/page2';

export interface IPage2Props extends StyledComponentProps, WithTranslation {
    /**
     * The (last) error from fetching.
     */
    error?: any;
    /**
     * Starts fetching users.
     * 
     * @param {number} max The maximum number of results.
     * @param {string} nat The nationality, like 'gb' or 'de'.
     */
    fetchUsers: (max: number, nat: string) => any;
    /**
     * Indicates if someone is currently fetching or not.
     */
    isFetching: boolean;
    /**
     * The current list of users.
     */
    users: IRandomUser[];
}

/**
 * Properties for <Page2 /> component.
 */
export type Page2Props = IPage2Props & RouteChildrenProps;

class Page2 extends Component<Page2Props> {
    static propTypes = {
        error: PropTypes.any,
        fetchUsers: PropTypes.func.isRequired,
        isFetching: PropTypes.bool.isRequired,
        users: PropTypes.array.isRequired
    };

    componentDidMount() {
        this.reloadUsers();
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

        this.props.fetchUsers(max, nat);
    };

    render() {
        let list: Nilable;
        let spinner: Nilable;

        if (this.props.isFetching) {
            spinner = <CircularProgress />;
        } else {
            if (this.props.error) {
                list = <Alert severity="error">{this.props.error}</Alert>;
            } else {
                if (this.props.users.length) {
                    list = <RandomUserList items={this.props.users} />;
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

/**
 * Page 2 component.
 */
export default connect(withRouter(
    // @ts-ignore
    withStyles(
        // @ts-ignore
        withTranslation()(Page2)
    )
), {
    dispatchToProps: (dispatch => {
        return {
            fetchUsers: (max: number, nat: string) => {
                // @ts-ignore
                return dispatch(actions.fetchRandomUsers(max, nat));
            },
        };
    }),
    stateToProps: (state => {
        return {
            error: state.page2.lastError,
            isFetching: state.page2.isFetching,
            users: state.page2.users
        };
    })
});
