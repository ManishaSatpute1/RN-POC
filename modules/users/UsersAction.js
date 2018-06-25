import { connect } from 'react-redux';

import * as actions from './constants';

import store from '../../store';
import UsersList from '../../components/users/UsersList';

export function loadUsersData() {
        return function(dispatch) {
             dispatch({ type: actions.FETCH_USERS});
             return fetch('https://jsonplaceholder.typicode.com/users')
                .then((response) => response.json())
                .then((responseJson) =>
                    dispatch({type: actions.FETCH_USERS_SUCCESS, payload: responseJson}))
                .catch(error => {
                    throw(error);
                });

            }
}
const mapStateToProps = (state) => {
    return {
        isLoading: state.userReducer.isLoading,
        users: state.userReducer.users
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => store.dispatch(loadUsersData())
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(UsersList)