/**
 * Created by React Web Creator
 *
 * by e.GO Digital GmbH, Aachen, Germany
 *
 * https://e-go-digital.com
 */

import Page2Reducer, { IPage2ReduxState } from './reducers/page2';
import Thunk from 'redux-thunk';
import { Nilable } from '@egodigital/types';
import { ConnectedComponent, connect as connectToReduxStore } from 'react-redux';
import { applyMiddleware, combineReducers, compose, createStore, Dispatch } from 'redux';
import { IS_DEV } from '../constants';

/**
 * Function, which connects Redux actions to props.
 */
export type ConnectDispatchToPropsFunc = (dispatch: Dispatch) => {
    [prop: string]: (...any: any[]) => any
};

/**
 * Function, which connects Redux state values to props.
 */
export type ConnectStateToPropsFunc = (state: IReduxState) => {
    [prop: string]: any
};

/**
 * Options 
 */
export interface IConnectOptions {
    /**
     * Function, which connects Redux actions to props.
     */
    dispatchToProps?: Nilable<ConnectDispatchToPropsFunc>;
    /**
     * Function, which connects Redux state values to props.
     */
    stateToProps?: Nilable<ConnectStateToPropsFunc>;
}

/**
 * The global Redux state.
 */
export interface IReduxState {
    /**
     * Page 2 namespace.
     */
    readonly page2: IPage2ReduxState;
}

/**
 * Connects a component to the Redux store.
 *
 * @param {any} component The component to connect.
 * @param {IConnectOptions} options The options.
 * 
 * @returns {ConnectedComponent<any, any>} The connected component;
 */
export function connect(component: any, options: IConnectOptions): ConnectedComponent<any, any> {
    return connectToReduxStore(
        options.stateToProps, options.dispatchToProps
    )(component);
}

let composeEnhancers: Nilable<<R>(a: R) => R>;
if (IS_DEV) {
    // @ts-ignore
    composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'];
}
composeEnhancers = composeEnhancers || compose;

// EDIT this if you want to enhance the
// global Redux store
const store = createStore(
    combineReducers({
        page2: Page2Reducer
    }),
    composeEnhancers(
        applyMiddleware(
            Thunk
        )
    )
);

/**
 * The global Redux store.
 */
export default store;
