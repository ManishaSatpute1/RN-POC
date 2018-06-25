import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';

import { Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation';

import store from './store';
import UserDetails from './components/users/UserDetails';
import UsersAction from './modules/users/UsersAction';

import ScrollViewExample from './components/ScrollViewExample';
import CounterAction from './modules/counter/CounterAction';
import ImageBrowser from './components/camera-example/ImageBrowser';

export default class App extends Component {

    render() {
        return (
          <Provider store={store}>
            <MainStack />
          </Provider>
        )
    }
}

const MainStack = StackNavigator(
    {
        Home: {
            screen: UsersAction,
        },
        Details: {
            screen: UserDetails,
        },
    },
    {
        initialRouteName: 'Home',
    }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
