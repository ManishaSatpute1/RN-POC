import { combineReducers } from 'redux';
import { UserReducer } from './modules/users';
import CounterReducer from './modules/counter/CounterReducer';

const AppReducers =  combineReducers({
    userReducer: UserReducer,
    counterReducer: CounterReducer
});

const rootReducer = (state, action) => {
    return AppReducers(state, action);
};

export default rootReducer;