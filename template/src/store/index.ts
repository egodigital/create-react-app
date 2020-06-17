/**
 * Created by React Web Creator
 *
 * by e.GO Digital GmbH, Aachen, Germany
 *
 * https://e-go-digital.com
 */

import Page2Reducer, { IPage2ReduxState } from './reducers/page2';
import Thunk from 'redux-thunk';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { IS_DEV } from '../constants';

/**
 * The global Redux state.
 */
export interface IReduxState {
    /**
     * Page 2 namespace.
     */
    readonly page2: IPage2ReduxState;
}

// @ts-ignore
const composeEnhancers = (IS_DEV ? window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] : null) || compose;

// EDIT this if you want to enhance the
// global Redux store
const store = createStore(
    combineReducers({
        page2: Page2Reducer
    }),
    composeEnhancers(
        applyMiddleware(Thunk)
    )
);

/**
 * The global Redux store.
 */
export default store;
