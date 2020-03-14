import React from 'react'
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import { createStore, applyMiddleware } from 'redux'
import { logger } from 'redux-logger'
import  thunk from 'redux-thunk'

import App from './App.component';
import { rootReducers } from './reducers';

import * as serviceWorker from './serviceWorker';


const store = createStore(rootReducers, applyMiddleware(thunk, logger))


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>, 
    document.getElementById('root'));

serviceWorker.unregister();
