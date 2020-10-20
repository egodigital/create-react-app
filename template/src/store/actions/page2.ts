/**
 * Created by React Web Creator
 *
 * by e.GO Digital GmbH, Aachen, Germany
 *
 * https://e-go-digital.com
 */

import axios from 'axios';
import Enumerable from 'node-enumerable';
import { Nilable } from '@egodigital/types';
import { Dispatch } from 'redux';
import { IRandomUser } from '../reducers/page2';

export const PAGE2_RANDOM_USERS_FETCHED = 'PAGE2_RANDOM_USERS_FETCHED';
export const PAGE2_RANDOM_USERS_FETCHING = 'PAGE2_RANDOM_USERS_FETCHING';

/**
 * Fetches random users.
 *
 * @param {number} results The maximum number of results. 
 * @param {string} nationality The country / nationality, like 'gb' or 'de'.
 */
export function fetchRandomUsers(results: number, nationality: string): any {
    return (dispatch: Dispatch) => {
        const finalDispatch = (error: any, users?: Nilable<IRandomUser[]>) => {
            dispatch({ type: PAGE2_RANDOM_USERS_FETCHED, error, users });
        };

        try {
            dispatch({ type: PAGE2_RANDOM_USERS_FETCHING });

            const url = `https://randomuser.me/api/?results=${results}&nat=${encodeURIComponent(nationality)}`;

            axios.get(url)
                .then(response => {
                    const users = Enumerable.from<IRandomUser>(response.data.results)
                        .orderBy(u => u.name.last.toLowerCase())
                        .thenBy(u => u.name.first.toLowerCase())
                        .toArray();

                    finalDispatch(null, users);
                })
                .catch(err => {
                    finalDispatch(err);
                });
        } catch (e) {
            finalDispatch(e);
        }
    };
}
