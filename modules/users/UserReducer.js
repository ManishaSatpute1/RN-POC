import * as actions from './constants';

const initialState = {
    users : [],
    isLoading: false
};

export default function(state = initialState, action) {
    switch(action.type){
        case actions.FETCH_USERS : {
            return {
                ...state,
                isLoading: true
            };
        }
        case actions.FETCH_USERS_SUCCESS : {
            return {
                ...state,
                users: action.payload,
                isLoading: false
            };
        }
        case actions.USER_DELETED : {
            return {
                ...state,
                users: action.payload
            };
        }
        default:
            return state;
    }

}