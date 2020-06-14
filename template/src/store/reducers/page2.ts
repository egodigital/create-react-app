/**
 * Created by React Web Creator
 *
 * by e.GO Digital GmbH, Aachen, Germany
 *
 * https://e-go-digital.com
 */

import * as actions from '../actions';
import { Nilable } from '@egodigital/types';
import { Reducer } from 'redux';
import { cloneObj } from '../../utils';

/**
 * The Redux state for page2 namespace.
 */
export interface IPage2ReduxState {
    /**
     * Indicates if currently something is fetching new user list.
     */
    isFetching: boolean;
    /**
     * Contains last error, if occurred.
     */
    lastError?: Nilable;
    /**
     * The current list of users.
     */
    users: IRandomUser[];
}

/**
 * An random user from https://randomuser.me/
 */
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

const initialState: IPage2ReduxState = {
    isFetching: false,
    users: []
};

const page2Reducer: Reducer<IPage2ReduxState> = (state = initialState, action) => {
    const newState = cloneObj(state);

    switch (action.type) {
        case actions.PAGE2_RANDOM_USERS_FETCHED:
            newState.lastError = action.error;
            if (!newState.lastError) {
                newState.users = action.users;
            }

            newState.isFetching = false;
            break;

        case actions.PAGE2_RANDOM_USERS_FETCHING:
            newState.isFetching = true;
            newState.lastError = null;
            break;

        default:
            return state;
    }

    return newState;
};

/**
 * The reducer for page2 namespace.
 */
export default page2Reducer;
