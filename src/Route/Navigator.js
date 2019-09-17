import React, {Component} from 'react'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'

import WelcomeScreen from '../Screens/Auth/Welcome'
import LoginScreen from '../Screens/Auth/Login'
import RegisterScreen from '../Screens/Auth/Register'
import HomeScreen from '../Screens/App/Home'

import Splash from '../Screens/Splash'

//Auth Route
const AuthStack = createStackNavigator({
  Welcome: WelcomeScreen,
  Login: LoginScreen,
  Register: RegisterScreen,
},{
  defaultNavigationOptions: {
    header: null
  }
});


//App Route
const AppStack = createStackNavigator({
  Home: HomeScreen,
});


const AppRoot = createAppContainer(
  createSwitchNavigator(
    {
      Splash : Splash,
      Auth: AuthStack,
      App: AppStack,
    },
    {
      initialRouteName: 'Splash',
      headerMode: 'none',
    },
  ),
);

export default AppRoot;