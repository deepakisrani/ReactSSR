import { create } from 'lodash';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

import reducers from '../client/reducers';

export default (req, baseURL) => {
    
    const axiosInstance = axios.create({
            baseURL,
            headers: {
                cookie: req.get('cookie') || ''
            }
    });

    const store = createStore(
        reducers,
        {},
        applyMiddleware(thunk.withExtraArgument(axiosInstance))
    );

    return store;
};