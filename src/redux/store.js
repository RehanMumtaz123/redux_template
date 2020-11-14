import {bookReducer} from './Book/bookReducer';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const store=createStore(bookReducer,applyMiddleware(thunk))
export default store
