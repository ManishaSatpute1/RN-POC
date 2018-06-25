import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableHighlight,
    TouchableNativeFeedback,
    StyleSheet,
    Alert } from 'react-native'; 
import Swipeout from 'react-native-swipeout';   

export default class UsersListItem extends Component {

    confirmDelete(){ 
            Alert.alert(
                'Delete User',
                'Delete This User?',
                [
                {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: () => this.deleteUser()},
                ],
                { cancelable: false }
            )
    }

    deleteUser() {
        console.log('delete user');
        this.props.onDeleteItem(this.props.user);
    }

    _onPress = () => {
        this.props.onPressItem(this.props.user);
    }

    render(){
        // Buttons
        var swipeSettings = {
            autoClose: true,
            rowId: this.props.user.rowId,
            sectionId: 1,
            backgroundColor: "#fff",
            right: [
                {
                    text: 'Delete',
                    type: 'Delete',
                    color: '#581845',
                    underlayColor: "#fff",
                    onPress: () =>   this.confirmDelete()
                }
            ],
            left: [
                { 
                    text: 'Add',
                    type: 'primary',
                    color: '#581845',
                    underlayColor: "#fff",
                    onPress: () =>   this.addUser()
                }
            ]
            
        }
        return (
           <Swipeout {...swipeSettings}>
            <View style={styles.itemContainer}>
                <TouchableHighlight
                    onPress={this._onPress}
                    background={TouchableNativeFeedback.SelectableBackground()}>
                    <View style={styles.listViewItem}>
                        <Text style={{color: '#fff'}}>
                            {this.props.user.name}
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>
            </Swipeout>
        )
    }
}

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
    },
    listViewItem: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#581845',
        height: 100,
        borderRadius: 2,
        borderWidth: 0.5,
        borderColor: '#ccc',
    }
});