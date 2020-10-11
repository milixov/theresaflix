import {createStore, applyMiddleware, combineReducers} from 'redux';
import {createLogger} from 'redux-logger';
import reducers from './reducers';

import {axiosInstance} from '../config/axios';
import {handleRequests} from '@redux-requests/core';
import {createDriver} from '@redux-requests/axios';

const {requestsReducer, requestsMiddleware} = handleRequests({
    driver: createDriver(axiosInstance),
});

const middleware = [...requestsMiddleware];

if (__DEV__) {
    const logger = createLogger();
    middleware.push(logger);
}

const rootReducer = combineReducers({
    ...reducers,
    requests: requestsReducer,
});

export default createStore(rootReducer, applyMiddleware(...middleware));
