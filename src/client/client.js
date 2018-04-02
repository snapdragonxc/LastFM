import 'babel-polyfill';
import React from'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../Routes';
import { renderRoutes } from 'react-router-config';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'; //<--- Monitor state change on the console
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './reducers/reducers';
//
const store = createStore(
    reducers, 
    window.INITIAL_STATE, 
  //  applyMiddleware(thunk, logger)
    applyMiddleware(thunk)
);

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
           <div>{renderRoutes(Routes)}</div>
        </BrowserRouter>
    </Provider>
    , document.querySelector('#root'));
