import {bookReducer} from './Book/bookReducer';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const store=createStore(bookReducer,applyMiddleware(thunk,logger))
export default store