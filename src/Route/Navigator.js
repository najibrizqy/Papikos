import React, {Component} from 'react'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'

import LoginScreen from '../Screens/Login'
import RegisterScreen from '../Screens/Register'
import HomeScreen from '../Screens/Home'


//Auth Route
const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen,
});


//App Route
const AppStack = createStackNavigator({
  Home: HomeScreen,
});


const AppRoot = createAppContainer(
  createSwitchNavigator(
    {
      Home : HomeScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'Home',
      headerMode: 'none',
    },
  ),
);

export default AppRoot;