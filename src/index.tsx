import React from 'react'
import ReactDOM from 'react-dom';
import App from './App.component';
import { BrowserRouter as Router } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import  thunk from 'redux-thunk'
import { logger } from 'redux-logger'

import { rootReducers } from './reducers/index.reducer';

const store = createStore(rootReducers, applyMiddleware(thunk, logger))

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>, 
    document.getElementById('root'));

serviceWorker.unregister();
