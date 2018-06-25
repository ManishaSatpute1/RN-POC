import React, {Component} from 'react';
import { FlatList, ActivityIndicator, View, StyleSheet, ToastAndroid  } from 'react-native';
import UserListItem from './UserListItem';
import store from '../../store';
import * as usersConstants from '../../modules/users/constants';

export default class UsersList extends Component {
    constructor(props) {
        super(props);
    }
    static navigationOptions = {
        title: 'Users List!'
    };

    componentDidMount() {
        
        this.props.fetchUsers();
    }

    _onPressItem = (user) => {
        const { navigate } = this.props.navigation;
        const currentItem = this.props.users.filter(item => item.name === user.name);
        navigate('Details',{userDetails: currentItem[0]});
    };

    _onDeleteItem = (user) => {
        let users = this.props.users.filter(item => item.name !== user.name);
        store.dispatch({ type: usersConstants.USER_DELETED, payload: users });
    }

    _renderItem = ({item}) => {
        return (<UserListItem
            id={item.id}
            user={item}
            onPressItem={this._onPressItem.bind(this)}
            onDeleteItem={this._onDeleteItem.bind(this)}
        />
        )
    };

    render() {
            if(this.props.isLoading){
                return(
                    <View style={styles.container}>
                        <ActivityIndicator/>
                    </View>
                )
            }
            return (
                <View style={styles.container}>
                    <FlatList
                        data={this.props.users}
                        renderItem={this._renderItem}
                        keyExtractor={(item) => item.name}
                    />
                </View>
            )
        }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'space-around'
    }
});
