import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import appReducers from './reducers/category/index'



const store = createStore(
appReducers,

applyMiddleware(thunk)
);



ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>
    , document.getElementById('root')

)
