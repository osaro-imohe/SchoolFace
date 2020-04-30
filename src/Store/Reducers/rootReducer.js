import authReducer from './authReducer.js';
import postReducer from './postReducer.js';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    auth : authReducer,
    posts: postReducer,
})

export default rootReducer;