import { applyMiddleware, createStore } from 'redux';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import {authReducer} from './reducers/authReducer';
import { fightReducer } from './reducers/fightReducer';

const rootReducer = combineReducers({
	auth: authReducer,
	fight: fightReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
